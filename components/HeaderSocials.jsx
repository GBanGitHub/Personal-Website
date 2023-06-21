import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/geunhyung-ban-831b39229/' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/GBanGitHub' target='_blank'><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials