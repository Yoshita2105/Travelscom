import React from 'react';
import './About.css';
import video from '../../Assets/video.mp4';


const About = () => {
  return (
    <section className="about container section">
      <div className="secTitles">
        <h3 className="title">About Us</h3>
        <p className="subtitle">We make your travel dreams come true!</p>
      </div>

      <div className="secContents grid">
        <div className="textDivs">
          <h2>Who We Are</h2>
          <p>
            We are a travel agency committed to providing you with the most memorable and
            affordable trips. Whether you are looking for a relaxing beach vacation or an
            adventurous mountain getaway, we have something for everyone.
          </p>
          <p>
            Our expert team has years of experience in the travel industry, helping people like
            you discover new places, cultures, and experiences.
          </p>
        </div>

        <div className="imageDiv">
           <video src={video} muted autoPlay loop type="video/mp4"></video>
        </div>
      </div>

      <div className="ourMission">
        <h3>Our Mission</h3>
        <p>
          Our mission is to offer a wide variety of travel packages at competitive prices, ensuring
          our customers have a memorable and stress-free vacation. We believe in responsible
          tourism and strive to make every trip an opportunity for growth and connection.
        </p>
      </div>

      {/* New Section: Customer Testimonials */}
      <div className="testimonials">
        <h3>What Our Customers Say</h3>
        <div className="testimonialItems grid">
          <div className="testimonialItem">
            <p className="testimonialText">
              "This was the best vacation I've ever had! The team at [Agency Name] made everything
              so easy, from booking to planning. Highly recommend!"
            </p>
            <h4>- Sarah Williams</h4>
            <p>Happy Traveler</p>
          </div>

          <div className="testimonialItem">
            <p className="testimonialText">
              "A truly unforgettable experience! We were able to explore beautiful locations
              without any worries. The whole trip was perfectly organized."
            </p>
            <h4>- David Lee</h4>
            <p>Adventure Seeker</p>
          </div>

          <div className="testimonialItem">
            <p className="testimonialText">
              "The best decision I made was choosing this agency for my honeymoon. Everything was
              flawless and beyond my expectations. Thank you!"
            </p>
            <h4>- Emily and John</h4>
            <p>Newlyweds</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
