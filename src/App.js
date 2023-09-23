import './App.css';
import About from './About/About'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'

function App() {
  return (
    <>
      <section className="container homepage">
        <About />
        <Skills />
      </section>
      <section className='container projects_page'>
        <Projects />
      </section>
    </>
  );
}

export default App;
