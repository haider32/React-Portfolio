import React from 'react'
import './Contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xtml98d', 'template_do66rm6', form.current, 'Np3T1T-Eu7pX00XnX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className = "contact__option">
             <MdOutlineMail className='contact__option-icon'/>
             <h4>Email</h4>
             <h5>syedmohdhaider2@gmail.com</h5>
             <a href="mailto:syedmohdhaider2@gmail.com">Send a message</a>
          </article>
          <article className = "contact__option">
             <BsWhatsapp  className='contact__option-icon'/>
             <h4>WhatsApp</h4>
             <h5>+918726879756</h5>
             <a href="https://api.whatsapp.com/send?phone=+918726879756" target="_blank">Send a message</a>
          </article>
          
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="Haider" placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
