import React from 'react'
import './about.css'
import me from '../../assets/TemporaryAboutMeBenji.jpg'
import {FiAward} from 'react-icons/fi'
import {AiOutlineTeam} from 'react-icons/ai'
import {BiLibrary} from 'react-icons/bi'

const About = () => {
  return (
    <section id='about'>
    <h5>Get to Know</h5>
    <h2>About Me</h2>

    <div className='container about_container'>
      <div className='about_me'>
        <div className="about_me-image">
          <img src={me} alt="About Image" />
        </div>
      </div>
    
    <div className="about-content">
      <div className="about_cards">
        <article className='about_card'>
          <FiAward className='about_icon' />
          <h5>Experience</h5>
          <small>Sophomore in Computer Science</small>
        </article>

        <article className='about_card'>
          <AiOutlineTeam className='about_icon' />
          <h5>Teamwork</h5>
          <small>Sophomore in Computer Science</small>
        </article>

        <article className='about_card'>
          <BiLibrary className='about_icon' />
          <h5>Projects</h5>
          <small>Some Projects</small>
        </article>
      </div>
      <p>
      Hello, my name is Geunhyung Ban. I am an aspiring Software Engineer with a passion for leveraging the power of both Java and Python to develop innovative solutions.
      </p>

      <a href='#contact' className='btn btn-primary'>Contact Me</a>

    </div>
    </div>
    </section>
  )
}

export default About