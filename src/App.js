import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar';
import Home from './Home';
import Counter from './Counter';
import Footer from './footer';
import About from './About';
import OurLocations from './OurLocations';
import Gallery from './Gallery';
import FounderDesk from './FounderDesk';
import Franchise from './Franchise';
import Contact from './contact';
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/About" element={<About />} />
          <Route path="/OurLocations" element={<OurLocations />} />
          <Route path="/Gallery" element={<Gallery/>}/>
          <Route path="/FounderDesk" element={<FounderDesk/>}/>
            <Route path="/Franchise" element={<Franchise/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
