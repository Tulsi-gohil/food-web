import React, { useState } from 'react';
import './App.css';

function Franchise() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!\n' + JSON.stringify(formData, null, 2));

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
    });
  };

  return (
    <>
      <div className="franchise-section text-white text-center">
        <h1 className="franchise-title">
          Be Your Own Boss,<br />
          Be Our Franchisee
        </h1>
      </div>

      <div className='row position-relative form-container'>
        <h4 className='form-title'>
          VS Foodie Corner Franchise Application Form
          <div className='form-line'></div>
        </h4>
       <form onSubmit={handleSubmit}>
                <div className="form-wrapper container text-white ">

        {/* Personal Details */}
        <div className="section-title">Personal Details</div>
        <div className="row mb-3">
          <div className="col">
            <input type="text" name="firstName" placeholder="First Name" className="form-control input-box" onChange={handleChange} required />
          </div></div>
                  <div className="row mb-3">

          <div className="col">
            <input type="text" name="lastName" placeholder="Last Name" className="form-control input-box" onChange={handleChange} required />
          </div>
        </div>
        <div className="mb-3">
          <input type="text" name="nationality" placeholder="Nationality" className="form-control input-box" onChange={handleChange} required />
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <input type="tel" name="mobile" placeholder="Mobile" className="form-control input-box" onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <input type="email" name="email" placeholder="Enter Email" className="form-control input-box" onChange={handleChange} required />
          </div>
        </div>

        {/* Franchise Details */}
        <div className="section-title mt-4">Franchise Details</div>
        <div className="mb-3">
          <input type="text" name="franchiseName" placeholder="First Name" className="form-control input-box" onChange={handleChange} required />
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <input type="text" name="city" placeholder="City" className="form-control input-box" onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <input type="text" name="country" placeholder="Country" className="form-control input-box" onChange={handleChange} required />
          </div>
        </div>

        {/* VS Section */}
        <div className="section-title mt-4">FOR VS Foodie Corner</div>
        <div className="mb-4">
          <textarea name="notes" rows="4" placeholder="Notes" className="form-control input-box" onChange={handleChange}></textarea>
        </div>

        <button type="submit" className="submit-button">Submit Form</button>
           </div>
      </form>
 
 </div>
    </>
  );
}

export default Franchise;
