import './App.css';
import f1 from './f1.png';
import marbal from './marbal.png';
import t1 from './t1.png';
import t2 from './t2.png';
import t3 from './t3.png';
import t4 from './t4.png';
import v5 from './v5.png';
 import { useNavigate } from 'react-router-dom';

function FounderDesk(){
   const navigate = useNavigate();

  const goToContact = () => {
    navigate('/contact');
   };
  
    return(
    <>
    <div className="founder-section text-white text-center">
        <h1 className="founder-title">Founder Desk</h1>
              <div className="founder-line  my-3"></div>
      </div>

            <div className=" container">
        <div className="row align-items-center founder-section">
          {/* Left Image */}
     
      
          {/* Right Content */}
          <div className="col-lg-5 mx-auto">
            <h2 className="foundertitle">Passion & Commitment</h2>
            <div className="founderline my-3"></div>
       <div className='founder'> 
            <p className="founder-subtitle text-justify">
First Outlet Of V’s Foodie Corner - Surat (Gujarat)
Owns – V’s Foodie Corner, Chalu Chinese, Chalu Momo, Chalu Multi Cuisine In Total 40+ Restaurants Across Pan- India

            </p>
      
            <p className="founder-subtitle">
   Vibhanshu’S  Aim Is To Provide His Customers with An  Experience Of A Life Time. 
   He Says That The Most And  Foremost Important Thing For Him Is To Provide Good  Customer Service.<br/>
   He Treats Customers In A Friendly Manner, Attends To  Their Needs Promptly, And Ensure They Get Exactly What  They Ordered In A Timely Fashion.
            </p>
      
            <p className="founder-subtitle">
            According To Him The Type Of Food, Quality Of  Ingredients
            , And Meal Presentation Are All Equally  Important Before He Serves To The Customer. To Make  Them Happy Is His First Job.
            </p>
               <p className="founder-subtitle">
“A Happy Customer Is One Whose Problem  Was Solved Quickly And Satisfactorily.” - Vibhanshu             </p>
          </div>
        </div>
                <div className="col-lg-5   mx-auto">
            <img src={f1} alt="Chef" className="founder-img" />
          </div>
      </div>
   
      </div>
           <div className=' py-5 position-relative'>
              <div className='row justify-content-center'>
                <div className='col  text-center position-relative '>
                  <img src={marbal} alt='marbal' className='marbal-img w-100' />
                  <div className='row container position-absolute team start-50  mb-5 translate-middle text-white'>
                  
          <div className="col-md-4">
            <h5 className="text-warning fw-bold team-title">- TEAM -</h5>
            <h2 className="  fw-bold team-subtitle">Our Members</h2>
          </div>
          <div className="col-md-7">
            <p className="team-desc ">
             At VS Foodie Corner, we are more than just a team - we are a family. Our dedicated and passionate staff members 
             are the heart and soul of our restaurant. From our skilled chefs who create mouth-watering dishes, 
             to our friendly servers who provide exceptional service, We ensure that your dining experience is unforgettable.
            </p>
          </div> 
          </div>
 <div className="row container position-absolute start-50 team-section mb-5 translate-middle">
  <div className="col-sm-12 col-md-6 col-lg-2 mx-auto mb-4  text-center">
    <img src={t1} alt="team-1" className="teamimg" />
    <h4 className="img-title text-white mt-3">Anna Smith</h4>
    <p className="img-subtitle mt-3">Totam rem aperiam. Et iusto odio digniss ducimus qui blandi
     praesentium voluptatum deleniti atque. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</p>
  </div>

  <div className="col-sm-12 col-md-6 col-lg-2 mx-auto mb-4 text-center">
    <img src={t2} alt="team-2" className="teamimg" />
    <h4 className="img-title text-white mt-3">Michel Carter</h4>
    <p className="img-subtitle mt-3">Totam rem aperiam. Et iusto odio digniss ducimus qui blandi praesentium 
    voluptatum deleniti atque. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</p>
  </div>

  <div className="col-sm-12 col-md-6 col-lg-2 mx-auto mb-4 text-center">
    <img src={t3} alt="team-3" className="teamimg" />
    <h4 className="img-title text-white mt-3">Sara Burton</h4>
    <p className="img-subtitle mt-3">Totam rem aperiam. Et iusto odio digniss ducimus qui blandi praesentium voluptatum 
    deleniti atque. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</p>
  </div>

  <div className="col-sm-12 col-md-6 col-lg-2 mx-auto mb-4 text-center">
    <img src={t4} alt="team-4" className="teamimg" />
    <h4 className="img-title text-white mt-3">Tyler Hart</h4>
    <p className="img-subtitle mt-3">Totam rem aperiam. Et iusto odio digniss ducimus qui blandi praesentium voluptatum
     deleniti atque. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</p>
  </div>
</div>

                  </div>
                </div>
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
               <button type="button" onClick={goToContact}  className='button btn-warning mt-3 px-4 py-2'>Contact Us</button>

  </div>
    </div>

  
  </div>  
    </>
    );

}
export default FounderDesk;