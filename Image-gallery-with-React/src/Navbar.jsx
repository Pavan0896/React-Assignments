import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHouseChimney, faImages, faCircleInfo,faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
   
  };

  return (
    <nav className='navbar'>
       <div className="menu" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    <ul className={isMenuOpen ? 'navbar-nav active' : 'navbar-nav'}>
      <li className="nav-item"><Link to="/"><FontAwesomeIcon icon={faHouseChimney}/> Home</Link></li> 
      <li className="nav-item"><Link to="/gallery"><FontAwesomeIcon icon={faImages} /> Gallery</Link></li>
      <li className="nav-item"><Link to="/contact"><FontAwesomeIcon icon={faEnvelope} /> Contact</Link></li>
      <li className="nav-item"><Link to="/about"><FontAwesomeIcon icon={faCircleInfo} /> About</Link></li>
    </ul>
   
    </nav>
  )
}

export default Navbar
