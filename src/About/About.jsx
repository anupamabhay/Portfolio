import React from 'react'
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro' 
import { useTypewriter } from 'react-simple-typewriter'
import 'animate.css';

const About = () => {

  const [text] = useTypewriter({
    words: ["Full-Stack Developer", "Software Engineer"],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 40,
    delaySpeed: 5000,
  });

  return (
    <>
      <section className='about_section'>
        <div className="container about_container">
          <h1 className="about_me">Hey, I'm <strong>Anupam</strong></h1>
          <h3>a <span className='profession'>{text}.</span></h3>
          <div className="btn_container">
            <div className="about_me_btn">
              <a href='https://drive.google.com/file/d/1LKW9ZsV8xXAokL1Ok8c3nma40zgKEpsU/view?usp=sharing' target='_blank' rel='noopener noreferrer'>
                <button className="btn resume_btn">                
                  <FontAwesomeIcon className='social_icons' icon={solid("file-lines")} size="sm" />      
                  <span className="resume_btn_text"></span>
                </button>
              </a>
              <a href='https://github.com/anupamabhay' target='_blank' rel='noopener noreferrer'>
                <button className="btn github_btn">
                  <FontAwesomeIcon className='social_icons' icon={brands("github")} />                  
                  <span className="github_btn_text"></span>
                </button>
              </a>
              <a href='https://linkedin.com/in/anupamabhay' target='_blank' rel='noopener noreferrer'>
                <button className="btn linkedin_btn">
                  <FontAwesomeIcon className='social_icons' icon={brands("linkedin")}/>
                  <span className="linkedin_btn_text"></span>
                </button>
              </a>
            </div>
            <a href='mailto:anupamabhay2001@gmail.com' target='_blank' rel='noopener noreferrer'>
              <button className="btn contact_btn">
                <FontAwesomeIcon className='contact_icon' icon={solid("envelope")} />
                <span className="contact_btn_text"></span>
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default About