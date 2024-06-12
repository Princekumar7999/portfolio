
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav>
      <ul className="navbar">
      <li className="nav-item"><Link to="/">Home</Link></li>
      {/* <li className="nav-item"><Link to="/about">About</Link></li>
        <li className="nav-item"><Link to="/education">Education</Link></li>
        <li className="nav-item"><Link to="/skills">Skills</Link></li> */}
        <li className="nav-item"><Link to="/projects">Projects</Link></li>
        <li className="nav-item"><Link to="/experience">Experience</Link></li>
        <li className="nav-item"><Link to="/services">Services</Link></li>
        {/* <li className="nav-item"><Link to="/blog">Blog</Link></li> */}
      </ul>
    </nav>
  );
}

export default NavBar;






// import React from 'react';
// import { Link } from 'react-router-dom';
// import "./NavBar.css";

// function NavBar() {
//     return (
//       <nav>
//         <ul className="navbar">
//           <li className="nav-item"><Link to="/">Home</Link></li>
//           <li className="nav-item"><Link to="/about">About</Link></li>
//           <li className="nav-item"><Link to="/projects">Projects</Link></li>
//           <li className="nav-item"><Link to="/resume">Resume</Link></li>
//         </ul>
//       </nav>
//     );
//   }

// // function NavBar() {
// //     return (
// //         <nav>
// //             <ul className="navbar">
// //                 <li className="nav-item"><a>Home</a></li>
// //                 <li className="nav-item"><a>About</a></li>
// //                  <li className="nav-item"><a>Project</a></li>
// //                 <li className="nav-item"><a>Resume</a></li> 
// //             </ul>
// //         </nav>
// //     )
// // }

// export default NavBar;