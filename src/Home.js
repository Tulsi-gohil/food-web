import './App.css';
import chef from './chef.png';
import clean from './clean.png';
import img from './img.png';
import dish from './dish.png';
import ttt from './ttt.png';
import tt from './tt.png';
import cup from './cup.png';
import marbal from './marbal.png';
import birthday from './birthday.png';
import meeting from './meeting.png';
import party from './party.png';
 import sandwich from './sandwich.png'
 import photo from './photo.png';
 import { useNavigate } from 'react-router-dom';



 import Hotdeals from './Hotdeals.png';

 import Counter from './Counter';
   function Home() {
      const navigate = useNavigate();

  const goToContact = () => {

    
    navigate('/contact');
   };
    const goToAbout = () => {
     navigate('/About');
  };
  return (
    <>
      <div className="d-flex justify-content-center align-items-center text-white text-center">
          <img src={Hotdeals} alt="about" className="about  w-100" />
        
       </div>

      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center">
            <img src={chef} alt="Chef" className="img-fluid hero-img" />
          </div>
          <div className="col-lg-6">
            <h2 className="title">
              <div className="title-line"></div>
              Enjoy An Exceptional <br /> Journey of Taste
              <div className="line"></div>
            </h2>
            <p className="sub-title">
              Are you ready for an exceptional journey of taste? Look <br />
              no further than us, where we take pride in offering a <br /> truly authentic dining experience.
            </p>
            <hr />
            <div className="row">
              <div className="col-6 mb-2 hero">
                <span className="text-warning">✔</span> Delicious And Innovative <br /> Culinary Creations
              </div>
              <div className="col-6 mb-2 hero">
                <span className="text-warning">✔</span> Exceptional Service With <br /> A Smile
              </div>
              <div className="col-6 mb-2 hero">
                <span className="text-warning">✔</span> An Ambiance That Sets The <br /> Mood
              </div>
              <div className="col-6 mb-2 hero">
                <span className="text-warning">✔</span> Conveniently Located, Always <br /> Within Reach
              </div>
            </div>
            <div className="mt-3">
              <button onClick={goToAbout} className="btn btn-warning fw-bold px-4">About Us</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5 feature-section text-white">
        <div className="text-center mb-5">
          <h2 className="main-title">Dine With Peace Of Mind At Our Restaurant</h2>
          <hr className="custom-hr" />
        </div>

        <div className="row justify-content-center text-center feature-card">
          <div className="col-md-3 mx-3 mb-4 p-0 card-dark">
            <div className="p-4">
              <div className="icon mb-3">
                <img src={ttt} alt='logo' className='logo1'/>
              </div>
              <h5 className="feature-title">Cleanliness & Hygiene</h5>
              <p className="subtitle">
                Dine in a spotless and sanitized environment, where cleanliness is our top priority.
              </p>
            </div>
            <img src={clean} alt="Cleanliness" className="img1" />
          </div>

          <div className="col-md-3 mx-3 mb-4 p-0 card-dark">
            <div className="p-4">
              <div className="icon mb-3">
                <img src={tt} alt='logo' className='logo2'/>
              </div>
              <h5 className="feature-title">Skilled Chefs</h5>
              <p className="subtitle">
                Savor the flavors of perfectly prepared dishes by our skilled<br></br> chefs.
              </p>
            </div>
            <img src={img} alt="Chefs" className="img2" />
          </div>

          <div className="col-md-3 mx-3 mb-4 p-0 card-dark">
            <div className="p-4">
              <div className="icon mb-3">
                <img src={cup} alt='logo' className='logo3'/>
              </div>
              <h5 className="feature-title">Fresh Ingredients</h5>
              <p className="subtitle">
                Our commitment to using fresh ingredients is what sets our restaurant apart.
              </p>
            </div>
            <img src={dish} alt="Fresh Ingredients" className="img2" />
          </div>
        </div>
      </div>

      <div className=' py-5 position-relative'>
        <div className='row justify-content-center'>
          <div className='col  text-center position-relative '>
            <img src={marbal} alt='marbal' className='marbalimg w-100' />
            <div className='position-absolute top-50 start-50 translate-middle text-white'>
              <div className='head-section'> 
              <h2 className='head-title'>- COME AND SEE -</h2>
              <h4 className='head-subtitle'>We create delicious experiences</h4>
 <button
        type="button"
        onClick={goToContact}
        className="button btn-warning mt-3 px-4 py-2"
      >
        Contact Us
      </button>              </div>
            </div>
          </div>
        </div>


            <div className='py  position-relative'>
        <div className='row justify-content-center container best-section '>
         <h1 className='best-title '>BEST FOR </h1>


        <div className="row justify-content-center text-center  best-card ">
         <div className='col-md-2 mx-4 mb-3'>
          <img src={birthday} alt='logo' className='best-img1'/>
          <h4 className='besttitle text-white'>BIRTHDAYS</h4>
          <p className='best-subtitle  text-center'>At our restaurant, we go above and 
            beyond to make your birthday celebration special, from decorating the venue to creating customized menus.</p>

        </div>
        <div className='col-md-2 mx-4'>
          <img src={meeting} alt='logo' className='best-img1'/>
          <h4 className='besttitle text-white'>MEETINGS</h4>
          <p className='best-subtitle text-center'>We are an ideal venue for your next corporate meeting, with
             state-of-the-art facilities and professional services.</p>
        </div>
        <div className='col-md-2 mx-4 '>
          <img src={party} alt='logo' className='best-img1'/>
          <h4 className='besttitle text-white'>PARTY</h4>
          <p className='best-subtitle text-center'>From intimate gatherings to grand celebrations, our restaurant's 
            ambiance, food, and drink will elevate your party.</p>
          </div>
        </div>
        </div>
        </div>
  <div className='py-5 position-relative'>
        <div className='row justify-content-center'>
          <div className='col text-center position-relative '>
            <img src={marbal} alt='marbal' className='marbal  w-100' />
            <div className='position-absolute top-50 start-50 translate-middle text-white'>
              <div className='head-section'> 
              <h2 className='head-title'>- now booking -</h2>
              <h4 className='head-subtitle'>Private Dinners & Happy Hours</h4>
               </div>
            </div>
          </div>
        </div> 
</div>
 <div className="py-5 position-relative carousel-container">

   <img src={sandwich} alt="sandwich" className="w-100 position-absolute sandwich " />

   <div id="demo" className="carousel slide" data-bs-ride="carousel">

     <h1 className="carousel-title text-white position-absolute">A taste you’ll remember</h1><br/>
  

    <div className="carousel-inner text-center text-white">
      <div className="carousel-item active">
        <p className="carousel-subtitle">VS Foodie Corner exceeded my expectations. The atmosphere was cozy and inviting, and the staff was friendly and attentive. The food was some of the best I've ever had.</p>
        <img src={ photo}  alt="pp" className="photo " />
        <p className="reviewer">Vidhi Mevawala</p>
      </div>
      <div className="carousel-item">
        <p class="carousel-subtitle">VS Foodie Corner exceeded my expectations. The atmosphere was cozy and inviting, and the staff was friendly and attentive. The food was some of the best I've ever had.</p>
        <img src={ photo}  alt="pp" className="photo  " />
        <p className="reviewer">Vidhi Mevawala</p>
      </div>
      <div className="carousel-item">
        <p className="carousel-subtitle">VS Foodie Corner exceeded my expectations. The atmosphere was cozy and inviting, and the staff was friendly and attentive. The food was some of the best I've ever had.</p>
        <img src={ photo} alt="pp" className="photo  " />
        <p className="reviewer">Vidhi Mevawala</p>
      </div>
    </div>

     <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
      <span class="carousel-control-next-icon"></span>
    </button>
  </div>
</div>
<div><Counter/></div>
  </div>
    </>
  );
}
export default Home; 
