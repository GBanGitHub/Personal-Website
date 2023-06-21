import React from 'react'
import './header.css'
import CallToAction from './CallToAction'
import PersonalPhoto from '../../assets/TemporaryBenji.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
    <div className="container header_container">
      <h5>Hello I'm</h5>
      <h1>Geunhyung Ban</h1>
      <h5 className="text-light">Software Engineer</h5>
      <CallToAction />
      <HeaderSocials />

      <div className="personal_photo">
        <img src= {PersonalPhoto} alt="PersonalPhoto" />
      </div>

      <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header