 import './App.css';
 
const mainLocations = [
  { name: 'Jharkhand' },
  { name: 'Vadodara' },
  { name: 'Bhopal' }
];

const upcomingLocations = [
  'Indore',
  'Bengaluru',
  'Chennai',
  'Jamshedpur',
  'Patna'
];

const address = `58 Ralph Ave\nNew York, New York\nNew York 1111`;

export default function Locations() {
  return (
    <div className="locations-section text-white text-center">
      <h1 className="main-title">Our Locations</h1>
      <p className="subtitle text-center">Find Us Out</p>
      <h4 className="text-uppercase mt-4 mb-4">Locations Of Restaurants All Over India</h4>

         {/* Main Locations */}
        <div className="row justify-content-center mb-5">
          {mainLocations.map((loc, index) => (
            <div className="col-md-3 mb-3" key={index}>
              <div className="card bg-dark text-white p-3 location-card">
                <div className="pin text-warning display-6">📍</div>
                <h5>{loc.name}</h5>
                <p className="mb-0">{address}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Locations */}
        <h5 className="mb-3">Upcoming</h5>
        <div className="row justify-content-center">
          {upcomingLocations.map((city, index) => (
            <div className="col-md-2 col-sm-4 col-6 mb-3" key={index}>
              <div className="card bg-dark text-white p-2 location-card-small">
                <div className="pin text-warning">📍</div>
                <h6 className="mb-1">{city}</h6>
                <p className="mb-0 small">{address}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Embedded Google Map */}
        <div className="mt-5">
          <iframe
            title="Our Map"
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d59528.793664845354!2d72.7898609064842!3d21.170315151652794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m5!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!3m2!1d21.170240099999997!2d72.8310607!4m0!5e0!3m2!1sen!2sin!4v1749792307293!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
   );
}
