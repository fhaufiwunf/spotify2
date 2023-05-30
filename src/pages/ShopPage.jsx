import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const ShopPage = () => {
  
  useEffect(() => {
    fetch('https://646f49f809ff19b12086f068.mockapi.io/api/product/product')
      .then((response) => response.json())
      .then((json) => console.log(json));
      
  }, [])
  



  return (
    <div className='shopcustem'>
      <NavLink to='/shop'>shop</NavLink>
      <div>
        <h1>image</h1>
        <h4>name</h4>
        <h4>prise</h4>
      </div>
    </div>

  )
}

export default ShopPage