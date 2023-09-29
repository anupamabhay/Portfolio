import React from 'react'
import './Projects.css'
import IMG1 from '../Assets/project-placeholder.png'
import img_scraper from '../Assets/google-scraper.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro' 

const projects_data = [
  {
    id: 1,
    image: IMG1,
    title: 'Weather Report',
    github: 'https://github.com/anupamabhay/Weather-Report'
  },
  {
    id: 2,
    image: IMG1,
    title: 'Currency Converter',
    github: 'https://github.com/anupamabhay/Currency-Converter'
  },
  {
    id: 3,
    image: IMG1,
    title: 'Simple Calculator',
    github: 'https://github.com/anupamabhay/Calculator-React'
  },
  {
    id: 4,
    image: IMG1,
    title: 'To-Do List',
    github: 'https://github.com/anupamabhay/ToDoList-React'
  },
  {
    id: 5,
    image: IMG1,
    title: 'Google Scraper',
    github: 'https://github.com/anupamabhay/Google-Scraper'
  },
  {
    id: 6,
    image: IMG1,
    title: 'Highlighter',
    github: 'https://github.com/anupamabhay/Highlighter'
  }
]

const Projects = () => {
  return (

    <section className="projects_section">
      <div className="container projects_container">
        <div className="project_header_container">
          <h3 className="projects_header section_header">Projects</h3>
        </div>

        <div className="projects_grid_group">
          {
            projects_data.map(({id, image, title, github}) => {
              return (
                <article key={id} className='projects_item_container'>
                  <a href={github} target='_blank' rel='noopener noreferrer' className='project_item' >
                    <img src={image} alt={title} className='projects_item_img' />
                    <div className="project_item_info">
                      <p className="projects_item_title">
                        {title} 
                      </p>
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