import './register.css'

const Register = () => {
  return (
    <div className='login'>
      <span className="loginTitle">Register</span>  
      <form className="loginForm">
        <label>Email</label>
        <input className='loginInput' type="text" placeholder='Enter your email...'></input>
        <label>Password</label>
        <input className='loginInput' type="password" placeholder='Enter your password...'></input>
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">Register</button>  
    </div>
  )
}

export default Register