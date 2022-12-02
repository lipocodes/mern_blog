import './post.css'

const Post = () => {
  return (
    <div className='post'>
      <img className='postImg' src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
      <div className="postInfo">
        <div className="popstCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>   
        </div>
        <span className="postTitle">There are many variations of passages</span>
        <hr/>
        <span className="postDate">1 hour ago</span>
        <p className='postDesc'>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
        </p>
      </div>
    </div>
  )
}

export default Post