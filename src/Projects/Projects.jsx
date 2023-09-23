import React from 'react'
import './Projects.css'
import IMG1 from '../Assets/project-placeholder.png'
import img_scraper from '../Assets/google-scraper.png'

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
    github: 'https://github.com/anupamabhay/Google-Scrapper'
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
          <article className='projects_item project_one'>
            
            <a href='https://github.com/anupamabhay/Weather-Report' target='_blank' rel='noopener noreferrer'>
              <img src={IMG1} alt="project-image" className='projects_item_img' />
              <p className="projects_item_title">
                Weather Report
              </p>
            </a>
          </article>

          <article className='projects_item project_one'>
            
            <a href='https://github.com/anupamabhay/Currency-Converter' target='_blank' rel='noopener noreferrer'>
              <img src={IMG1} alt="project-image" className='projects_item_img' />
              <p className="projects_item_title">
                Currency Converter
              </p>
            </a>
          </article>
          
          <article className='projects_item project_one'>
            
            <a href='https://github.com/anupamabhay/Calculator-React' target='_blank' rel='noopener noreferrer'>
              <img src={IMG1} alt="project-image" className='projects_item_img' />
              <p className="projects_item_title">
                Simple Calculator
              </p>
            </a>
          </article>

          <article className='projects_item project_one'>
            
            <a href='https://github.com/anupamabhay/ToDoList-React' target='_blank' rel='noopener noreferrer'>
              <img src={IMG1} alt="project-image" className='projects_item_img' />
              <p className="projects_item_title">
                To-Do List
              </p>
            </a>
          </article>

          <article className='projects_item project_one'>
            
            <a href='https://github.com/anupamabhay/Google-Scrapper' target='_blank' rel='noopener noreferrer'>
              <img src={IMG1} alt="project-image" className='projects_item_img' />
              <p className="projects_item_title">
                Google Scraper
              </p>
            </a>
          </article>

          <article className='projects_item project_one'>
            
            <a href='https://github.com/anupamabhay/Highlighter' target='_blank' rel='noopener noreferrer'>
              <img src={IMG1} alt="project-image" className='projects_item_img' />
              <p className="projects_item_title">
                Highlighter
              </p>
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Projects