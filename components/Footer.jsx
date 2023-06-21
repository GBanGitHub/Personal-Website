import React from 'react'
import './footer.css'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Geunhyung Ban</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://instagram.com"><AiOutlineInstagram /></a>
        <a href="https://www.linkedin.com/in/geunhyung-ban-831b39229/"><BsLinkedin /></a>
        <a href="https://github.com/GBanGitHub"><BsGithub /></a>
      </div>
    </footer>
  )
}

export default Footer