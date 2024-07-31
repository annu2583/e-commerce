import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>

      <div className='container'>

        <div className='footer'>
          <div className='title'>
            <p className='heading_section '>Join Our Newsletter</p>
            <p className='font_14px'>We love to surprise our subscribers with occasional gifts.</p>
          </div>

          <div className='input-group'>
            <input className='font_section  email' type="email" placeholder='Your email address' />
            <button className='Subscribe-buttton'>Subscribe</button>
          </div>
        </div>
      </div>


      <div className='container'>
        <div className='footer-container'>
          <div className='colum_1'>
            <div className='logo-footer-heading'>
              <img src='footer-logo.svg' alt='footer_logo' />
              <p className='heading_section'>ecommerce</p>

            </div>
            <div className='font_14px'>
              <p>DevCut is a YouTube channel for </p>
              <p>practical project-based learning.</p>
            </div>
            <div className='logo-section'>
              <img src='github.svg' />
              <img src='insta.svg' />
              <img src='youtube.svg' />
            </div>
          </div>

          <div className='column_2'>
            <ul className='font_section'>SUPPORT </ul>
            <a><li>FAQ</li></a>
            <a><li>Terms of use</li></a>
            <a><li>Privacy Policy</li></a>
          </div>

          
        </div>
      </div>
    </>


  )
}
export default Footer;
