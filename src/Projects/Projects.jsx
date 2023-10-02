import React from 'react'
import './Projects.css'
import weather_img from '../Assets/weather_img.png'
import currency_img from '../Assets/currency_img.jpg'
import calculator_img from '../Assets/calculator_img.png'
import todo_img from '../Assets/todo2_img.png'
import scraper_img from '../Assets/scraper_img.png'
import highlighter_img from '../Assets/highlighter_img.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro' 

const projects_data = [
  {
    id: 1,
    image: weather_img,
    title: 'Weather Report',
    github: 'https://github.com/anupamabhay/Weather-Report'
  },
  {
    id: 2,
    image: currency_img,
    title: 'Currency Converter',
    github: 'https://github.com/anupamabhay/Currency-Converter'
  },
  {
    id: 3,
    image: calculator_img,
    title: 'Simple Calculator',
    github: 'https://github.com/anupamabhay/Calculator-React'
  },
  {
    id: 4,
    image: todo_img,
    title: 'To-Do List',
    github: 'https://github.com/anupamabhay/ToDoList-React'
  },
  {
    id: 5,
    image: scraper_img,
    title: 'Google Scraper',
    github: 'https://github.com/anupamabhay/Google-Scraper'
  },
  {
    id: 6,
    image: highlighter_img,
    title: 'Highlighter',
    github: 'https://github.com/anupamabhay/Highlighter'
  }
]

const Projects = () => {
  return (

    <section className="projects_section">
      <div className="container projects_container">
        <div className="project_header_container">
          <h2 className="projects_header section_header">Projects</h2>
        </div>

        <div className="projects_grid_group">
          {
            projects_data.map(({id, image, title, github}) => {
              return (
                <article key={id} className='projects_item_container'>
                  <a href={github} target='_blank' rel='noopener noreferrer' className='project_item' >
                    <img src={image} alt={title} className='projects_item_img' />
                    <div className="project_item_info">
                      <h4 className="projects_item_title">
                        {title} 
                      </h4>
                      <span className="link_icon">
                        <FontAwesomeIcon icon={solid("arrow-up-right-from-square")} size='sm' style={{color: "#8ADFDC",}} />
                      </span>
                    </div>
                  </a>
                </article>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Projects