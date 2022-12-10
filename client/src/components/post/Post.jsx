import './post.css'
import {Link} from 'react-router-dom'
import "../../settings/globals";

const Post = ({post}) => {  
  const PF = "http://localhost:5000"+ "/images/";
  return (
    <div className='post'>
      {post.photo&&(<img className='postImg' src={PF + post.photo} alt=""/>)}
      
      <div className="postInfo">
        <div className="popstCats">
          {post.categories.map((cat)=>{
              return <span className="postCat">{cat.name}</span>
          })}  
        </div>
        <Link to={`/posts/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
       
        <hr/>
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        <p className='postDesc'>
        {post.desc}
        </p>
      </div>
    </div>
  )
}

export default Post