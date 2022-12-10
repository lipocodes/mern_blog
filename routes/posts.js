
var express = require('express');
var router = express.Router();
const { json } = require("express")
const User = require("../models/User")
const Post = require("../models/Post");
const bcrypt = require("bcrypt")

//CREATE POST 
router.post('/', async function (req, res, next) {
  const newPost = new Post(req.body);
  try{
   const savedPost =  await newPost.save();
   res.status(200).json(savedPost);
  }catch(err){res.status(500).json("Error in CREATE POST " + err)}
 
})

//UPDATE POST
router.put('/:id', async function (req, res, next) {
 try{
   const post = await Post.findById(req.params.id);
   !post&&res.status(404).json('Error in UPDATE POST');
   if(post.username===req.body.username){
    const updatedPost = await Post.findByIdAndUpdate(req.params.id,{$set: req.body}, {new:true});
    res.status(200).json(updatedPost);
   }else{
    res.status(401).json("You can update your posts only!");
   }
 }catch(err){res.status(500).json("Error in UPDATE POST: " + err)}  
  
})


//DELETE POST
router.delete('/:id', async function (req, res, next) {
    try{
      const post = await Post.findById(req.params.id);
    
      !post&&res.status(404).json('Error in DELETE POST');
     
      if(post.username===req.body.username){
       await post.delete();
       res.status(200).json("Post deleted!");
      }else{
       res.status(401).json("You can delete your posts only!");
      }
    }catch(err){res.status(500).json("Error in DELETE POST: " + err)}      
   })



  //GET POST
  router.get("/:id", async(req,res)=>{  
    try{
     const post = await Post.findById(req.params.id);
     
     res.status(200).json(post); 
    }catch(err){res.status(500).json("Error in GET: " + err)}
  });




  //GET ALL POSTS
  router.get("/", async(req,res)=>{   
    const username = req.query.user;
    const catName = req.query.cat; 
   
    try{
     let posts;
   
     
     
     if(typeof username !== 'undefined'){    
        posts = await Post.find({username:username});
   
     }else if(typeof catName !== 'undefined'){
        posts = await Post.find({categories: {
            $in:[catName]
        }});
     }else{ 
        posts = await Post.find();
     }  
   
     res.status(200).json(posts); 
    }catch(err){ res.status(500).json("Error in GET ALL POSTS: " + err)}
  });


module.exports = router;