import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'
import {useContext, useState} from 'react';
import {Context} from "../../context/Context";
import {axiosInstance} from '../../config';


const Settings = () => {
  const {user,dispatch} = useContext(Context); 
  const PF = "http://localhost:5000/images/";
  const [file,setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success,setSuccess] = useState(false);

  const handleSubmit = async(e)=>{
    e.preventDefault();
    dispatch({type:"UPDATE_START"});
    setSuccess(false);
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password
    }
    if(file){
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("file",file);
      data.append("fileName", file.name);
      updatedUser.profilePic = fileName;
    }
    try{
      const res = await axiosInstance.put("/users/" + user._id,updatedUser);

      setSuccess(true);
      dispatch({type: "UPDATE_SUCCESSFUL",payload:res.data});
    }catch(e){setSuccess(false); dispatch({type:"UPDATE_FAILURE"})}
  }

  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>    
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img  src={file? URL.createObjectURL(file): PF + user.profilePic } alt=""/>  
            <label htmlFor='fileInput'>
              <i className="settingsPPIcon far fa-user-circle"></i>  
            </label>
            <input type="file" id="fileInput" style={{display:"none"}} onChange={(e)=>setFile(e.target.files[0])}></input>
          </div>
          <label>Username</label> 
          <input type="text" placeholder={user.username} onChange={(e)=>setUsername(e.target.value)}></input>
          <label>Email</label>
          <input type="email" placeholder={user.email} onChange={(e)=>setEmail(e.target.value)}></input>
          <label>Password</label>
          <input type="password" onChange={(e)=>setPassword(e.target.value)}></input> 
          <button cl className="settingsSubmit" type="submit">Update</button>
          {success && <span style={{color:"green", textAlign:"center", marginTop:"20px"}}>Profile Updated...</span>}
        </form>
      </div>
      <Sidebar/>
    </div>
  )
}

export default Settings