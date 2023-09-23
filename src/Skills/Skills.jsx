import React from 'react'
import './Skills.css'
import ProgressBar from "@ramonak/react-progress-bar"

const Skills = () => {
  return (
    <section className="skills_section">
      <div className="container skills_container">
        <div className="skills_header_container">
          <h3 className='skills_header section_header'>Skills</h3>
        </div>
        
        <div className='skills_groups'>

          <div className="left_skills_group">
            {/* Java */}
            <div className="skills_item">
              <div className="skill_info">
                <p>Java</p>
              </div>
              {/* labelColor='var(--color-bg)' labelSize='0.5rem' */}
              <ProgressBar completed={80} className='skills_bar' baseBgColor='var(--dark-blue)' bgColor='var(--light-blue)' height='10.25px' animateOnRender='true' customLabel=' ' />
            </div>
            {/* JavaScript */}
            <div className="skills_item">
              <div className="skill_info">
                <p>JavaScript</p>
              </div>
              <ProgressBar completed={80} className='skills_bar' baseBgColor='var(--dark-blue)' bgColor='var(--light-blue)' height='10.25px' customLabel=' '  animateOnRender='true' />
            </div>
            {/* HTML */}
            <div className="skills_item">
              <div className="skill_info">
                <p>HTML</p>
              </div>
              <ProgressBar completed={90} className='skills_bar' baseBgColor='var(--dark-blue)' bgColor='var(--light-blue)' height='10.25px' customLabel=' ' animateOnRender='true' />
            </div>
            {/* CSS */}
            <div className="skills_item">
              <div className="skill_info">
                <p>CSS</p>
              </div>
              <ProgressBar completed={80} className='skills_bar' baseBgColor='var(--dark-blue)' bgColor='var(--light-blue)' height='10.25px' customLabel=' ' animateOnRender='true' />
            </div>
          </div>

          <div className="right_skills_group">
            {/* React */}
            <div className="skills_item">
              <div className="skill_info">
                <p>React</p>
              </div>
              <ProgressBar completed={70} className='skills_bar' baseBgColor='var(--dark-blue)' bgColor='var(--light-blue)' height='10.25px' customLabel=' 'animateOnRender='true' />
            </div>
            {/* Node */}
            <div className="skills_item">
              <div className="skill_info">
                <p>Node</p>
              </div>
              <ProgressBar completed={60} className='skills_bar' baseBgColor='var(--dark-blue)' bgColor='var(--light-blue)' height='10.25px' customLabel=' ' animateOnRender='true' />
            </div>
            {/* Express */}
            <div className="skills_item">
              <div className="skill_info">
                <p>Express</p>
              </div>
              <ProgressBar completed={60} className='skills_bar' baseBgColor='var(--dark-blue)' bgColor='var(--light-blue)' height='10.25px' customLabel=' ' animateOnRender='true' />
            </div>
            {/* SQL */}
            <div className="skills_item">
              <div className="skill_info">
                <p>SQL</p>
              </div>
              <ProgressBar completed={70} className='skills_bar' baseBgColor='var(--dark-blue)' bgColor='var(--light-blue)' height='10.25px' customLabel=' 'animateOnRender='true' />
            </div>
          </div>
        </div>       
      </div>
    </section>
  )
}

export default Skills