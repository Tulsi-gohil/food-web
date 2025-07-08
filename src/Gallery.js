import * as React from "react";
import './App.css';
import g1 from './g1.png';
import g2 from './g2.png';
import g3 from './g3.png';
import g4 from './g4.png';
import g5 from './g5.png';
import g6 from './g6.png';
import g7 from './g7.png';
import g8 from './g8.png';
import g9 from './g9.png';
import g10 from './g10.png';
import g11 from './g11.png';
import g12 from './g12.png';
import v5 from './v5.png';
 import { useNavigate } from 'react-router-dom';

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function Gallery() {
  const [open, setOpen] = React.useState(false);

   const slides = [
    { src: g1 },
    { src: g2 },
    { src: g3 },
    { src: g4 },
    { src: g5 },
    { src: g6 },
    { src: g7 },
    { src: g8 },
    { src: g9 },
    { src: g10 },
    { src: g11 },
    { src: g12 }
  ];
  const navigate = useNavigate();

  const goToContact = () => {
    navigate('/contact');
   };
  

  return (
    <>
      <div className="gallery-section text-white text-center">
        <h1 className="gallery-title">Gallery</h1>
        <p className="gallery-ti text-center">Best of us</p>
      </div>

      <div className='container'>
        <div className='row position-relative Gallery'>
          <div className='col-lg-6'>
            <p className='gallery-subtitle text-white'>
 Experience the VS Foodie Corner like never before with our virtual Gallery tour. As you scroll through the pictures,
  you'll be transported to the world of mouthwatering flavors and the elegant ambiance that defines our restaurant. From the carefully
  designed decor to the expertly crafted dishes, every detail has been thoughtfully put together to create a memorable dining experience.            </p>
          </div>
          <div className='col-lg-6'>
            <p className='gallery-subtitle text-white'>
Discover our different branches all over India, take a sneak peek at our menu, and see the memories we've 
created hosting special events and parties. Your taste buds will be tantalized and your senses will be delighted. 
Get a taste of the VS Foodie Corner experience before visiting us, we can't wait to welcome you in person!            </p>
          </div>
        </div>

        <div className="row py-3">
          {[g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12].map((img, index) => (
            <div className="col-md-4 mb-3" key={index}>
              <img
                src={img}
                alt={`gallery-img-${index}`}
                className="gallery-img w-100"
                onClick={() => setOpen(true)}
                style={{ cursor: 'pointer' }}
              />
            </div>
          ))}
        </div>

     

        {/* ✅ Lightbox component */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={slides}
        />
      </div>
       <div className='container quality-section'>
          <div className='row position-relative py-5'>
              <div className='col-md-2'>
            <img src={v5} alt='img' className='quality end-50'/>
          </div>
               <div className='col-md-8'>
       <h3 className='quality-title text-white'>We are here to Give Better Quality Food</h3>   
       <p className='quality-subtitle text-white'>Satisfy your cravings for deliciousness at VS Foodie Corner - Where every dish is an exquisite skillful creation.</p>
        </div>
           <div className='col-md-2'>
                     <button type="button" onClick={goToContact} className='button btn-warning mt-3 px-4 py-2'>Contact Us</button>
      
        </div>
          </div>
      
        
        </div>
    </>
  );
}

export default Gallery;
