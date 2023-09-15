import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <section className="skills_section">
      <div className="container skills_container">
        <h3><strong>Skills</strong></h3>
        <div className="skills_item_group">
          <div className="skill_item java">
            <div className="skill_info">
              <p>Java</p>
              <p className="skill_percent">
              80%
              </p>
            </div>
          </div>
          <div className="progress_line" data-percent="80%">
            <span style={{width:"80%"}}></span>
          </div>

          <div className="skill_item java">
            <div className="skill_info">
              <p className='skill_name'>JavaScript</p>
              <p className="skill_percent">
              80%
              </p>
            </div>
          </div>
          <div className="progress_line" data-percent="80%">
            <span className='skill_js' style={{width:"80%"}}></span>
          </div>

          <div className="skill_item java">
            <div className="skill_info">
              <p>HTML</p>
              <p className="skill_percent">
              90%
              </p>
            </div>
          </div>
          <div className="progress_line" data-percent="90%">
            <span style={{width:"90%"}}></span>
          </div>
          
          <div className="skill_item java">
            <div className="skill_info">
              <p>CSS</p>
              <p className="skill_percent">
              80%
              </p>
            </div>
          </div>
          <div className="progress_line" data-percent="80%">
            <span style={{width:"80%"}}></span>
          </div>

          <div className="skill_item java">
            <div className="skill_info">
              <p>React</p>
              <p className="skill_percent">
              70%
              </p>
            </div>
          </div>
          <div className="progress_line" data-percent="70%">
            <span style={{width:"70%"}}></span>
          </div>
          
          <div className="skill_item java">
            <div className="skill_info">
              <p>Node.js</p>
              <p className="skill_percent">
              50%
              </p>
            </div>
          </div>
          <div className="progress_line" data-percent="50%">
            <span style={{width:"50%"}}></span>
          </div>

          <div className="skill_item java">
            <div className="skill_info">
              <p>Express.js</p>
              <p className="skill_percent">
              50%
              </p>
            </div>
          </div>
          <div className="progress_line" data-percent="50%">
            <span style={{width:"50%"}}></span>
          </div>
          
          <div className="skill_item java">
            <div className="skill_info">
              <p>SQL</p>
              <p className="skill_percent">
              70%
              </p>
            </div>
          </div>
          <div className="progress_line" data-percent="70%">
            <span style={{width:"70%"}}></span>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Skills