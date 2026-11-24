
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="main-navbar">

      <Link to="/">Accueil</Link>

      <Link to="/etudiants">Etudiant</Link>

      <Link to="/contact">Contact</Link>

    </nav>
  );
}

export default Navbar;

