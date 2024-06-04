
import "./NavBar.css";

function NavBar() {
    return (
        <nav>
            <ul className="navbar">
                <li className="nav-item"><a>Home</a></li>
                <li className="nav-item"><a>About</a></li>
                 <li className="nav-item"><a>Project</a></li>
                <li className="nav-item"><a>Resume</a></li> 
            </ul>
        </nav>
    )
}

export default NavBar;