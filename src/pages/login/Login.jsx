import './login.css'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>
      <span className="loginTitle">Login</span>  
      <form className="loginForm">
        <label>Email</label>
        <input className='loginInput' type="text" placeholder='Enter your email...'></input>
        <label>Password</label>
        <input className='loginInput' type="password" placeholder='Enter your password...'></input>
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">
        <Link className='link' to='/register'>REGISTER</Link>
      </button>  
    </div>
  )
}

export default Login