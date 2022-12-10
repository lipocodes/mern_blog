const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth.js');
const usersRoute = require('./routes/users.js');
const postsRoute = require('./routes/posts.js');
const categoriesRoute = require('./routes/categories.js');
const multer = require("multer");
const path = require("path");

dotenv.config();
app.use("/images", express.static((path.join(__dirname,"/images"))));
mongoose.connect(process.env.MONGO_URL, {useUnifiedTopology:true}).
then(()=>{console.log("MongoDB is connected!")}).catch((err)=>{console.log("Error while connecting to MongoDB: " + err)});

//Uploading a file locally (folder Images)
const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
      cb(null,"images");  
    },
    filename: (req,file,cb)=> {
      cb(null, req.body.name);  
    }
});
const upload = multer({storage:storage});
app.post('/api/upload', upload.single("file"), (req,res)=>{
   res.status(200).json('File loaded!'); 
});

app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/users',usersRoute);
app.use('/api/posts/',postsRoute);
app.use('/api/categories', categoriesRoute);

app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen("5000", ()=>{
    console.log("Backend is running!!!");
});