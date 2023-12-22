import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {RiFolderChartLine} from 'react-icons/ri'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About me </h2>

      <div className="container about__container">
        <div className="about__me">
        <div className="about__me-image">
        <img src= {ME} alt="About Image" />
      </div>
     </div>
      <div className="about__content">
        <div className="about__cards">

        <article className='about__card'> 
        <FaAward className='about__icon'/>
        <h5>Exertise</h5>
        <small>Java </small>
        <small>& Mern </small>
        </article>

        <article className='about__card'> 
        <FiUsers className='about__icon'/>
        <h5>Projects</h5>
        <small>50+ projects</small>
        </article>

        <article className='about__card'> 
        <RiFolderChartLine className='about__icon'/>
        <h5>BCA</h5>
        <small> Graduate </small>
        </article>
      </div>
    
      <p>
      Seeking an opportunity to improve professional qualities while contributing to the symbolic growth of
      the organization with my technical, innovative and logical skills.
      </p>

      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
      </div>
    </section>
  )
}

export default About
