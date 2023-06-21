import React from 'react'
import './experience.css'
import {FaCheck} from 'react-icons/fa'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>My Skills</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <FaCheck className='experience_details-icon'/>
              <div>
              <h4>HTML</h4>
              </div>
            </article>
            <article className='experience_details'>
              <FaCheck className='experience_details-icon'/>
              <div>
              <h4>CSS</h4>
              </div>
            </article>
            <article className='experience_details'>
              <FaCheck className='experience_details-icon'/> 
              <div>
              <h4>JavaScript</h4>
              </div>
            </article>
            <article className='experience_details'>
              <FaCheck className='experience_details-icon'/>
              <div>
              <h4>React</h4>
              </div>
            </article>
        </div>
      </div>
      {/* ===== End of the Frontend Section =====*/}

      <div className="experience_backend">
      <h3>Backend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <FaCheck className='experience_details-icon'/>
              <div>
              <h4>Python</h4>
              </div>
            </article>
            <article className='experience_details'>
              <FaCheck className='experience_details-icon'/>
              <div>
              <h4>Java</h4>
              </div>
            </article>
            <article className='experience_details'>
              <FaCheck className='experience_details-icon'/>
              <div>
              <h4>Node.js</h4>
              </div>
            </article>
            <article className='experience_details'>
              <FaCheck className='experience_details-icon'/>
              <div>
              <h4>C++</h4>
              </div>
            </article>
        </div>
      </div>
      {/* ===== End of the Backend Section =====*/}

      <div className="experience_softskills">
      <h3>Soft Skills</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <FaCheck className='experience_details-icon'/>
              <div>
              <h4>Communication</h4>
              </div>
            </article>
            <article className='experience_details'>
              <FaCheck className='experience_details-icon'/>
              <div>
              <h4>Teamwork</h4>
              </div>
            </article>
            <article className='experience_details'>
              <FaCheck className='experience_details-icon'/>
              <div>
              <h4>Initiative</h4>
              </div>
            </article>
            <article className='experience_details'>
              <FaCheck className='experience_details-icon'/> 
              <div>
              <h4>Analytical</h4>
              </div>
            </article>
        </div>
      </div>
      {/* ===== End of the Soft Skills Section =====*/}

      <div className="experience_education">
      <h3>Education</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <FaCheck className='experience_details-icon'/>
              <div>
              <h4>Arizona State University</h4>
              <small className='text-light'>Bachelors in Computer Science</small>
              </div>
            </article>
            <article className='experience_details'>
              <FaCheck className='experience_details-icon'/>
              <div>
              <h4>Current Sophomore</h4>
              <small className='text-light'>05/2022 - 07/2026</small>
              </div>
            </article>
        </div>
      </div>
      {/* ===== End of the Education Section =====*/}

      </div>
    </section>
  )
}

export default Experience