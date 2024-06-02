
import "./NavBar.css";
//import { Link } from "react-router-dom";
function NavBar() {
    return (
        <nav>
            <ul className="navbar">
                <li class="nav-item"><a>Home</a></li>
                <li class="nav-item"><a>About</a></li>
                 <li class="nav-item"><a>Project</a></li>
                <li class="nav-item"><a>Resume</a></li> 
            </ul>
        </nav>
    )
}

export default NavBar;