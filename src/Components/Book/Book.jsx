import React, { useState } from 'react';
import './Book.css';
import Footer from '../Footer/Footer';

const BookNow = () => {
  const [formData, setFormData] = useState({
    destination: '',
    travelDate: '',
    numberOfPeople: 1,
    package: 'basic',
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
    alert('Your booking request has been submitted!');
    // You can integrate the form submission with your backend or payment gateway here.
  };

  return (
    
    <section className="book-now container section">
      <div className="secTitle">
        <h3 className="title">Book Your Dream Trip</h3>
        <p className="subtitle">Let's make your travel dreams a reality!</p>
      </div>

      <div className="secContent">
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="destination">Choose Your Destination</label>
            <select
              id="destination"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              required
            >
              <option value="">Select a destination</option>
              <option value="beach">Beach</option>
              <option value="mountain">Mountain</option>
              <option value="city">City Tour</option>
              <option value="adventure">Adventure</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="travelDate">Select Travel Date</label>
            <input
              type="date"
              id="travelDate"
              name="travelDate"
              value={formData.travelDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="numberOfPeople">Number of People</label>
            <input
              type="number"
              id="numberOfPeople"
              name="numberOfPeople"
              value={formData.numberOfPeople}
              onChange={handleChange}
              min="1"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="package">Choose Your Package</label>
            <select
              id="package"
              name="package"
              value={formData.package}
              onChange={handleChange}
              required
            >
              <option value="basic">Basic Package</option>
              <option value="premium">Premium Package</option>
              <option value="luxury">Luxury Package</option>
            </select>
          </div>

          <div className="form-group">
            <button type="submit" className="btn-submit">
              Book Now
            </button>
          </div>
        </form>
      </div>
   
    </section>
   
  );
};

export default BookNow;
