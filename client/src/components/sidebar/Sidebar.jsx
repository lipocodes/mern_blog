import './sidebar.css';
import {useState,useEffect} from 'react';
import {axiosInstance} from '../../config';
import {Link} from 'react-router-dom'

const Sidebar = () => {
  
  const [cats,setCats] = useState([]);
  useEffect(()=>{
   const getCats = async ()=>
     {
      const res = await axiosInstance.get("/categories");
      setCats(res.data);
     } 
     getCats(); 
    },[]);
  
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <p className="sidebarTitle">ABOUT ME</p>
        <img src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
        <p className="sidebarText">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
      </div>
      <div className="sidebarItem">
        <p className="sidebarTitle">CATEGORIES</p>
        <ul className="sidebarList">
          {cats.map((item)=>(
           <Link className='link' to={"/?cat=" + item.name}><li className="sidebarListItem">{item.name}</li></Link> 
          ))}
 
        </ul>
      </div>
      <div className="sidebarItem">
        <p className="sidebarTitle">FOLLOW US</p>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>      
    </div>
  )
}

export default Sidebar