import React, { useState } from 'react'
import '../../styles/header.css'
import { useProducts } from '../../contaxt/Products'

function Header() {
  const [show, setShow] = useState()
  const { data } = useProducts()
  console.log(data)
  return (
    <>
      <div className='notification_bar'>
        <p className='notify'>Get 25% OFF on your first order.Order Now</p>
      </div>
      <div className='container'>

        <div className='navbar'>
          <div className='left_section '>
            <img className='toogle' src='./images/menu.png' />
            <img src='./images/logo.png' />
            <nav className='nav_list'>
              <span className='side_bar'>
              </span>
              <ul className='nav_bar '>
                <li className='nav_item'>
                  <a className='font_section nav_menu' href='#home'>Home</a>
                </li>
                <li className='nav_item'>
                  <a className='font_section category nav_menu' href='#cate'>Categories <img className='cate_icon' src='./images/vector.png' /></a>
                </li>
                <li className='nav_item'>
                  <a className='font_section nav_menu' href='#about'>About</a>
                </li>
                <li className='nav_item'>
                  <a className='font_section nav_menu' href='#contact'>Contact</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className='right_section'>
            {/* <div> */}
            {/* <img className='search_img' src='./images/search.png'/> */}
            <input type="text" placeholder="Search product" name="search" />
            {/* </div> */}
            <img className='search' src='./images/search.png' />
            <div className='nav_icons'>
              <img src='./images/cart.png' />
              <img src='./images/acc.png' />
            </div>
          </div>

          {
            data.map((item, index) => {
              return (<>
                <div>
                  <h1>{item?.data}</h1>
                  <h2>{item?.id}</h2>
                </div>
              </>)
            })
          }

        </div>
      </div>


    </>
  )
}

export default Header;

