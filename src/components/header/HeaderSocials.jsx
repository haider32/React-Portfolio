import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {RiInstagramLine} from 'react-icons/ri'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/mohd-haider-319134200"target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/haider32"target="_blank"><FaGithub/></a>
        <a href="https://www.instagram.com/syedmohdhaider2"target="_blank"><RiInstagramLine/></a>
    </div>
  )
}

export default HeaderSocials
