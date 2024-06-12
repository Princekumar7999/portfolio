
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Homepage from './homepage';
import Whoiam from './whoiam';
import Education from './education';
import Skills from './skills';
import Projects from './projects';
import Experience from './experience';
import Services from './services';
import Blog from './blog';
import './App.css';

function App() {
  return (
    <Router>
      <div className="my-container">
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Whoiam />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import NavBar from './NavBar';

// import Services from './services';
// import Whoiam from './whoiam';
// import Education from './education';
// import Skills from './skills';
// import Projects from './projects'
// import Experience from './experience';
// import Blog from './blog'
// import Homepage from './homepage';
// import "./App.css"





// function App() {
//   return (
//     <Router>
//       <div className="my-container">
//         <NavBar />
//         <Routes>
//           <Route path="/" exact component={Homepage} />
//           <Route path="/about" component={Whoiam} />
//           <Route path="/education" component={Education} />
//           <Route path="/skills" component={Skills} />
//           <Route path="/projects" component={Projects} />
//           <Route path="/experience" component={Experience} />
//           <Route path="/services" component={Services} />
//           <Route path="/blog" component={Blog} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }


// // function Projects() {
// //   return (
// //     <div>
// //       <h1>Projects</h1>
// //       <p>Here are some of my projects...</p>
// //     </div>
// //   );
// // }

// // function App() {
// //   return (

// //     <div className="my-container">
     
// //       <NavBar/>
// //       <Homepage />
// //       <Whoiam />
// //       <Education />
// //       <Skills />
// //       <Projects />
// //       <Experience />
// //       <Services />
// //       <Blog />
// //       </div>
    
// //   );
// // }

// export default App;



