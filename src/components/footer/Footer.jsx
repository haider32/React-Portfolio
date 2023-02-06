import React from 'react'
import './Footer.css'
import {TfiInstagram} from 'react-icons/tfi'
import {FaTwitter} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Haider</a>

      {/* <ul className='permalinks'> */}
        {/* <li><a href="#">Home</a></li> */}
        {/* <li><a href="about">About</a></li> */}
        {/* <li><a href="experience">Experience</a></li> */}
        {/* <li><a href="services">Services</a></li> */}
        {/* <li><a href="portfolio">Portfolio</a></li> */}
        {/* <li><a href="contact">Contact</a></li> */}
         {/* </ul> */}

       <div className="footer__socials">
        <a href="https://www.instagram.com/syedmohdhaider2"><TfiInstagram/></a>
        <a href="https://twitter.com/SyedMohdHaider3"><FaTwitter/></a>
        <a href="https://www.linkedin.com/in/mohd-haider-319134200"><BsLinkedin/></a>
       </div>
       <div className="footer__copyright">
          <small>&copy; Haider. All rights reserved</small>
        </div>
    </footer>

    
  )
}

export default Footer
