import React from 'react'
import PublicResume from '../../assets/Public Resume.pdf'

const CallToAction = () => {
  return (
    <div className='call_to_action'>
        <a href= {PublicResume} download className = 'btn'>Download Resume</a>
        <a href= '#contact' className = 'btn btn-primary'>Contact</a>
    </div>
  )
}

export default CallToAction