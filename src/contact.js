 import './App.css';

function Contact() {
  

 

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!\n' + JSON.stringify(  2));

 
  };

  return (
    <>
      <div className="contact-section text-white text-center">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-ti">We're Easy To Get In Touch With</p>
      </div>

      <div className="touch-section">
        <div className="container py-5">
          <div className="row text-white">
            {/* Left Side */}
            <div className="col-md-5 mb-4">
              <h4 className="title">Get Into Touch</h4>
              <div className="line mb-4"></div>
              <p>Address: <br /> 4<br /> New York, New York 1111</p>
              <p>Phone: +1 800 000 111</p>
              <p>Email: Contact@Example.Com</p>
            </div>

            {/* Right Side */}
            <div className="col-md-7">
              <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control custom-input"
                      name="firstName"
                      placeholder="Enter Your First Name"
                       required
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control custom-input"
                      name="lastName"
                      placeholder="Enter Your Last Name"
                            
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col">
                    <input
                      type="tel"
                      className="form-control custom-input"
                      name="phone"
                      placeholder="Phone Number"
                       required
                    />
                  </div>
                  <div className="col">
                    <input
                      type="email"
                      className="form-control custom-input"
                      name="email"
                      placeholder="Email Address"
                       required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <textarea
                    className="form-control custom-textarea"
                    name="message"
                    rows="5"
                    placeholder="Your Message"
                     required
                  ></textarea>
                </div>

                <button type="submit" className="btn send-button">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

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
    </>
  );
}

export default Contact;
