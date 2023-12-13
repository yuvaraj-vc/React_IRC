import '../Assets/Nav.css'
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <div>
    
    <nav className="navbar">
        <div className="logo">
            <img src="https://static.vecteezy.com/system/resources/previews/000/616/286/original/g-letters-logo-and-symbols-template-icons-vector.jpg" alt="Logo"/>
        </div>
        <ul>
            <li ><Link to="/te">Login</Link></li>
            <li ><Link to="/Fo">About</Link></li>
            
        </ul>
    </nav>
</div> 
  )
}

export default Nav;
