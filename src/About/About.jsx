import React from 'react'
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro' 
import { useTypewriter } from 'react-simple-typewriter'
import 'animate.css';

const About = () => {

  const [text] = useTypewriter({
    words: [" there"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 100,
    delaySpeed: 4000,
  });

  return (
    <>
      <section className='about_section'>
        <div className="container about_container">
          <div className="greet">
            <h1 className="greet_hey">
              Hey
              <span className='greet_typewriter'>
                {text}
              </span>
              <span className='greet_exclaimation'>
                !
              </span>
            </h1>
          </div>
          <div className="about_me">
            <h3 className="about_me_para">
              I’m 
              <span className='about_me_name'>
                {' Anupam Abhay'}
              </span>
                , a software engineer slash full-stack developer from India. Feel free to check out everything about me below.
            </h3>
          </div>

          <div className="btn_container">
            <a className='about_me_icon' href="https://drive.google.com/file/d/1JCDPjRcNXFYryBC2LnZ89-HIVzG5UexT/view?usp=drivesdk" target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon className='about_me_icons' icon={solid("file-lines")} size="lg" /> 
            </a>
            <a className='about_me_icon' href="https://github.com/anupamabhay" target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon className='about_me_icons' icon={brands("github")} size="lg" />
            </a>
            <a className='about_me_icon' href="https://linkedin.com/in/anupamabhay" target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon className='about_me_icons' icon={brands("linkedin")} size="lg" /> 
            </a>
            <a className='about_me_icon' href="mailto:anupamabhay2001@gmail.com" target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon className='about_me_icons' icon={solid("envelope")} size="lg" /> 
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default About