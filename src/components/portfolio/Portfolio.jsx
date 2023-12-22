import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data =[
{
  id: 1,
  image: IMG1,
  title: 'Modern calculator',
  github: 'https://github.com/haider32/Modern-Calculator',
  demo: 'https://modern-calculator-js.netlify.app/'
},
{
  id: 2,
  image: IMG2,
  title: 'Chat-App',
  github: 'https://github.com/haider32/Chat_Application',
  demo: 'https://chat-app-reactjs-haider.netlify.app/'
},
{
  id: 3,
  image: IMG3,
  title: 'Transformo',
  github: 'https://github.com/haider32/Transformo',
  demo: 'https://transformo.netlify.app/'
},
{
  id: 4,
  image: IMG4,
  title: 'soon',
  github: 'http//github.com',
  demo: 'http:google.com'
},
{
  id: 5,
  image: IMG5,
  title: 'soon',
  github: 'http//github.com',
  demo: 'http:google.com'
},
{
  id: 6,
  image: IMG6,
  title: 'soon',
  github: 'http//github.com',
  demo: 'http:google.com'
}
]

const Portfolio = () => {
  return (
   <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>portfolio</h2>

    <div className="container portfolio__container">
      {
        data.map (({id, image, title, github, demo}) => {
          return (
            <article key={id} className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={image} alt="title" />
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
           <a href={github} className='btn'>Github</a>
           <a href= {demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </div>
      </article>
          )
        })
      }
      
    </div>
   </section>
  )
}

export default Portfolio
