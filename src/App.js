import './App.css';
import About from './About/About'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'

function App() {
  return (
    <>
      <About />
      {/** deleted Skills from here and moved it to About **/}
      <Projects />
    </>
  );
}

export default App;
