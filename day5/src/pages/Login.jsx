import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <div>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" /><br />
        <label htmlFor="password">Password</label>
        <input type="password" /><br />
        <input type="checkbox" name="remember-me" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label><br />
        <input type="submit" />
      </form>
    </div>
    <div>Dont have an account? <Link to="/signup">Sign-up</Link></div>
    </>
  )
}

export default Login