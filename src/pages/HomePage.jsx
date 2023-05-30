import React from 'react'
import { NavLink } from 'react-router-dom'


const HomePage = () => {


  return (
    <div className='headercustem'>

      <NavLink to='/'>home</NavLink>
      <NavLink to='/shop'>shop</NavLink>
      <NavLink to='/login'>login</NavLink>
      <NavLink to='/cart'>cart</NavLink>


    </div>
  )

}

export default HomePage