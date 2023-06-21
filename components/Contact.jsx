import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jh7buqj', 'template_pb99ofh', form.current, 'bShXh0IdaEagbgnFz')
    
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Let's Get in Touch</h5>
      <h2>Contact Me</h2>

    <div className="container contact_container">
      <div className="contact_options">
        <article className="contact_option">
          <AiOutlineMail className='contact_option-icon'/>
          <h4>Email</h4>
          <h5>gbanmail1@gmail.com</h5>
          <a href="mailto:gbanmail1@gmail.com" target='_blank'>Send me a Message</a>
        </article>
        <article className="contact_option">
          <RiMessengerLine className='contact_option-icon'/>
          <h4>Messenger</h4>
          <h5>gbanmail1@gmail.com</h5>
          <a href="mailto:gbanmail1@gmail.com" target='_blank'>Messenger</a> {/* Remember to change the mailto: to https://m.me(urusername) *not the whole link to ur messenger**/}
        </article>
      </div>

      {/* ===== End of Contact Form =====*/}

    <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Full Name' required />
        <input type="email" name='email' placeholder='Email' required />
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
    </form>
  </div>
</section>
  )
}

export default Contact