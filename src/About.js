import './App.css';
import about from './about.jpg';
import chef2 from './chef2.png';
import v3 from  './v3.png';
import v2 from  './v2.png';
import v1 from  './v1.png';
import v5 from './v5.png';
 import sandwich from './sandwich.png'
 import photo from './photo.png';
  import { useNavigate } from 'react-router-dom';

function About(){
     const navigate = useNavigate();

  const goToContact = () => {
    navigate('/contact');
   };
return (
  <>
<div className="py-5 position-relative">
  <img src={about} alt="about" className="about  w-100" />
  <div className="position-absolute top-50  translate-middle text-white w-100  ">
    <div className="about-section  ">
      <h1 className="about-title">Who We Are</h1>
      <h3 className="about-subtitle">Experienced Professional</h3>
    </div>
  </div>
</div>


      <div className="my-5">
  <div className="row align-items-center chef-section">
    {/* Left Image */}
    <div className="col-lg-6 text-center mb-4 mb-lg-0">
      <img src={chef2} alt="Chef" className="chef-img  " />
    </div>

    {/* Right Content */}
    <div className="col-lg-6">
      <h2 className="chef-title">From Kitchen to Table: Our Story</h2>
      <div className="chef-line my-3"></div>
 <div className='chef'> 
      <p className="chef-subtitle text-justify">
        Welcome to VS Foodie Corner, a place where culinary creativity meets satisfaction. Our menu reflects our love for food,
        featuring a variety of dishes from different cuisines. We use only the freshest ingredients to create flavorful,
        mouth-watering dishes that will tantalize your taste buds. Our chefs are skilled and dedicated, using their expertise to
        create delicious meals that will leave you wanting more.
      </p>

      <p className="chef-subtitle">
        We are proud to say we started the brand in the year 2022 and in such a short span we have managed to open 3 active
        franchisee outlets all over India. We are currently in communication with 5 more franchises, and many queries are being
        received. Our aim is to open around 20 company-owned and franchise outlets by the end of 2023. Our economical capex and
        affordable franchise model make it possible to achieve this growth in a short time.
      </p>

      <p className="chef-subtitle">
        Whether you're looking for a quick bite during your lunch break, a romantic dinner for two, or a place to host a special
        event, VS Foodie Corner is the perfect choice. We look forward to serving you soon!
      </p>
    </div>
  </div>
</div>
</div>

<div className='row py-5 position-relative corner-section'>
  <div className='col'>
    <h1 className='corner-title text-white text-center'>
      Why VS Foodie Corner
            <div className="corner-line text-center "></div>
    </h1>
<div className='col-lg-8 mx-auto'>
  <div className='corner '>
  <p className='corner-subtitle text-white'>
    Under The Hashtag #Bhealthy. The Restaurant Adds Its Own Desi Touch To The Cuisines Of The World In Fast Food Style We Aim To Provide  Our
     Customers An Experience Of A Life Time . Our Menu Boasts Of Cuisines Fast foods, Chinese, Burmese , Thai , Malaysian, Burgers, Pizzas Etc.)</p>
<p className='corner-subtitle text-white'> 
The Concept Of Modifying And Giving A Desi Touch To The Food And to Make People Fall In Love With The Taste Of ItAs We All Know We Indians Believe In Adding More Spices To Make Food More Tasty And Spice full And The Name “V’s Multi Fast Food Corner Comes From The Modification Of Real Taste Of Dish To The New Form Of it. V’s Never Fails With The Innovation On cuisines Also Keeping this In The Mind About The Taste Buds Of Indian
 People Because We Are Here To Serve Our People Best And As Per Their Likes The Taste Is To Make Their Soul Happy with                      Our Cuisines
  </p>
</div>
</div>
 
      <div className="container-fluid py-5 mission-vision-section">
      <div className="row justify-content-center">
        <div className="col-md-5 mx-0 box mission-box text-white p-4">
          <h2 className="mission-title text-warning">Mission            
            <div className="box-line text-center "></div>
</h2>

          <p className="mt-3">
          Our mission is to offer a diverse and flavorful dining experience to our guests. We believe in serving a variety of 
          cuisines from different cultures and regions, providing our customers with an extensive menu to choose from. Our focus 
          is on using fresh, high-quality ingredients to create dishes that are both delicious and authentic. We are committed to
           providing excellent service in a welcoming and comfortable atmosphere, ensuring every visit to our restaurant is enjoyable and memorable. 
          Our goal is to bring a taste of the world to our community and provide a dining experience that exceeds expectations.
          </p>
        </div>

        <div className="col-md-5 mx-0 box vision-box text-white p-4">
          <h2 className=" mission-title text-warning">Vision
                        <div className="box-line text-center "></div>

          </h2>
          <p className="mt-3">
            Our vision is to become the premier destination for diverse and authentic cuisine in our community.
             We aspire to create a vibrant atmosphere where customers can enjoy a range of flavorful dishes from different
              cultures and regions. We aim to be known for our exceptional food, service, and experience. We want to be recognized 
              as a hub for food lovers, where people can gather to savor and share memorable meals. 
            Our commitment is to strive for excellence and innovation, constantly improving our menu, service, and overall dining experience.
          </p>
        </div>
      </div>
    </div>
     </div>
</div>
 
         <div className="row justify-content-center text-center p-4 skilled-section ">
          <div className='col-md-2 mx-4 mb-3'>
           <img src={v3} alt='logo' className='skilled-img'/>
           <h4 className='skilled-title text-white'>BEST CHEFS</h4>
           <p className='skilled-subtitle  text-center'>Experience the art of cooking with our skilled chefs.</p>
 
         </div>
         <div className='col-md-2 mx-4'>
           <img src={v2} alt='logo' className='skilled-img'/>
           <h4 className='skilled-title text-white'>EXOTIC FLAVORS  </h4>
           <p className='skilled-subtitle text-center'>Embark on a culinary adventure and discover the true essence of exotic flavors.</p>
         </div>
         <div className='col-md-2 mx-4 '>
           <img src={v1} alt='logo' className='skilled-img'/>
           <h4 className='skilled-title text-white'>Beverages</h4>
           <p className='skilled-subtitle text-center'>Where every sip of our signature beverages is a taste sensation.</p>
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
 <button
        type="button"
        onClick={goToContact}
        className="button btn-warning mt-3 px-4 py-2"
      >
        Contact Us
      </button> 
  </div>
    </div>

  
  </div>
   </>
);
}
export default About; 