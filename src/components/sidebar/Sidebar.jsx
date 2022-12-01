import './sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <p className="sidebarTitle">ABOUT ME</p>
        <img className='sidebarImg' src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
        <p className="sidebarText">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
      </div>
      <div className="sidebarItem">
        <p className="sidebarTitle">CATEGORIES</p>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sports</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
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