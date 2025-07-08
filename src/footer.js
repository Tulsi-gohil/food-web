import './App.css';
import logo from './logo.png';
function Footer(){
    return (
 <div className="  text-white text-center py-5">
       <div className="container">
        <div className="row justify-content-center">
         <div className="col-md-2 mx-4 ">
         <img src={logo} alt='logo' className='footer-logo' style={{ height: '80px' }} /> 
         <p className='footer-subtitle text-left'>Satisfy your cravings for deliciousness at VS Foodie Corner -
             Where every dish is an exquisite skillful creation.</p>
         </div>
         <div className="col-md-2 mx-4">
         <h3 className='footer-title'>Address</h3>
         <p className='footer-subtitle text-left'>58 Ralph Ave New York, New York 1111</p>
<p className='footer-subtitle'>P: +1 800 000 111 E: contact@example.com</p>
         </div>
         <div className="col-md-2 mx-4">
                <h3 className='footer-title'>Quick Links</h3>
                  <div className="footer-subtitle">
           <a className="nav-link text-white"  href="/" >Home      </a> 
           <a className="nav-link text-white"  href="/About" >Who We Are  </a> 
           <a className="nav-link text-white"  href="/OurLocations">Our Locations</a> 
           <a className="nav-link text-white"  href="/Gallery" >Gallery      </a> 
           <a className="nav-link text-white"  href="/FounderDesk">Founder Desk </a> 
           <a className="nav-link text-white"  href="/Franchise"  >Franchise   </a> 
           <a className="nav-link text-white"  href="/Contact" >Contact Us  </a> 
   
        </div>

         </div>
          <div className="col-md-2 mx-4">
                <h3 className='footer-title'>Open Hours</h3>
                <p className='footer-subtitle'>Monday – Sunday Lunch: 12PM – 2PM Dinner: 6PM – 10PM

</p>
                    <p className='footer-subtitle'>Happy Hours: 4PM – 6PM</p>

          </div>
        </div>
      </div>
    </div>
    );
}
export default Footer;