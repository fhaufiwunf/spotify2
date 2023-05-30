import React from 'react'
import { NavLink } from 'react-router-dom'
const LoginPage = (e) => {
  
  return (
    <div className='logincustem'>
        <input placeholder='login'  />
        <input placeholder='password'/>
        <a href='akdhosh'>fogot password</a>
        <NavLink to='/login'>login</NavLink>
    </div>
  )
  
}

export default LoginPage