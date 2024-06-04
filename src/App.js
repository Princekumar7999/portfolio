
import NavBar from './NavBar';
import Services from './services';
import Whoiam from './whoiam';
import Education from './education';
import Skills from './skills';
import Projects from './projects'
import Experience from './experience';
import Blog from './blog'
import Homepage from './homepage';
import "./App.css"

function App() {
  return (
    
   
     <div className="my-container">
      <NavBar/>
      <Homepage />
      <Whoiam />
      <Education />
      <Skills />
      <Projects />
      <Experience />
      <Services />
      <Blog />
      </div>
    
  );
}

export default App;