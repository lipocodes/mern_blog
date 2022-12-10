import './singlePost.css';
import {useLocation} from 'react-router';
import {useEffect, useState, useContext} from 'react';
import Post from '../post/Post';
import {axiosInstance} from '../../config';
import {Link} from 'react-router-dom';
import "../../settings/globals";
import {Context} from "../../context/Context";


const SinglePost = () => {
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc,setDesc] = useState(""); 
  const [updateMode,setUpdateMode] = useState(false);
  

const PF =  "http://localhost:5000" + "/images/";
 const location = useLocation();
 const path =  location.pathname.split('/')[2];
 const [post,setPost] = useState({});

 useEffect(()=>{
  const getPost = async ()=>{
   const res = await axiosInstance.get("/posts/" + path);
   setPost(res.data);
   setTitle(res.data.title);
   setDesc(res.data.desc);
  }
  getPost();
 }, [path]);

 const d = new Date(post.createdAt);
 const dateTimePostCreated = d.getDay()+"/"+d.getMonth()+"/"+d.getFullYear()+" " + d.getHours() + ":" + d.getMinutes();


 const handleDelete = async(e)=>{
  try{
   const res = await axiosInstance.delete("/posts/" + post._id, {data:{username:user.username}});
   window.location.replace("/");
  }catch(err){console.log("Error in handleDelete: " + err);}
 }

 const handleUpdate = async(e)=>{
  try{
    const res = await axiosInstance.put("/posts/"+post._id,{username:user.username,title:title,desc:desc});
    setUpdateMode(false);
  }catch(err){console.log("Error in handleUpdate: " + err);}
 }

  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        {post.photo&&(
            <img
            className="singlePostImg"
            src={PF+post.photo}
            alt=""
          />
        )}
      
        {updateMode ? <input type="text" value={title}  className="singlePostTitleInput" autoFocus="true" onChange={(e)=>setTitle(e.target.value)}/>:
                <h1 className="singlePostTitle">
                {post.title}
                {user?.username===post.username && 
                  (<div className="singlePostEdit">
                     <i className="singlePostIcon fa-regular fa-pen-to-square" onClick={()=>{setUpdateMode(true)}}></i>
                     <i className="singlePostIcon fa-regular fa-trash-can" onClick={handleDelete}></i>
                  </div>)
                }
            
              </h1>
        }

        <div className="singlePostInfo">
          <span className='singlePostAuthor'>Author: <Link className='link' to={"/?user=" + post.username}><b>{post.username}</b></Link> </span>
          <span className='singlePostDate'>{dateTimePostCreated}</span>
        </div>
        {
         updateMode? <textarea className="singlePostDescInput" value={desc} onChange={(e)=>setDesc(e.target.value)}/>:
          <p className='singlePostDesc'>
            {post.desc}  
          </p>
         }
        {updateMode && 
          <button className="singlePostButton" onClick={handleUpdate}>Update</button>

        }
       
      </div>  
    </div>
  )
}

export default SinglePost