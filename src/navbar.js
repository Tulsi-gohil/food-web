 import './App.css';
import logo from './logo.png'; // Assuming logo.png is in the same directory
function navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark px-4">
      <a className="navbar-brand text-white" href="#">
        <img src={ logo} alt="Logo" style={{ height: '50px' }} />
      </a>
      <button
        className="navbar-toggler text-white"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item"><a className="nav-link text-white" href="/">HOME       </a></li>
          <li className="nav-item"><a className="nav-link text-white" href="/About">WHO WE ARE   </a></li>
          <li className="nav-item"><a className="nav-link text-white" href="/OurLocations">OUR LOCATIONS</a></li>
          <li className="nav-item"><a className="nav-link text-white" href="/Gallery">GALLERY      </a></li>
          <li className="nav-item"><a className="nav-link text-white" href="/FounderDesk">FOUNDER DESK </a></li>
          <li className="nav-item"><a className="nav-link text-white" href="/Franchise">FRANCHISE    </a></li>
          <li className="nav-item"><a className="nav-link text-white" href="/Contact">CONTACT US   </a></li>
   
        </ul>
      </div>
      <div className="d-none d-lg-flex gap-3">
          <a href="#" className="text-white"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-white"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
        </div>
    </nav>
  );
}

export default navbar;
