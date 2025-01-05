import React, { useEffect, useState } from 'react';
import './home.css';
import video from '../../Assets/video.mp4';
import { GrLocation } from 'react-icons/gr';
import { HiFilter } from 'react-icons/hi';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaTripadvisor } from 'react-icons/fa';
import { BsListTask } from 'react-icons/bs';
import { TbApps } from 'react-icons/tb';
import Main from '../Main/Main';

import MasonryImagesGallery from '../Image-gallery/MasonryImagesGallery';
import { Container, Row, Col, CardSubtitle } from 'reactstrap'

import Subtitle from "../../shared/subtitle"
import SearchBar from '../../shared/SearchBar';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  // State for price range
  const [maxPrice, setMaxPrice] = useState(5000);

  // Initialize Aos for scroll animations
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <section className="home">
        <div className="overlay"></div>
        <video src={video} muted autoPlay loop type="video/mp4"></video>

        <div className="homeContent container">
          <div className="textDiv">
            <span data-aos="fade-up" className="smallText">
              Our Packages
            </span>
            <h1 data-aos="fade-up" className="homeTitle">
              Search Your Holidays
            </h1>
          </div>

          <div data-aos="fade-up" className="cardDiv grid">
            {/* Destination Input */}
            <div className="destinationInput">
              <label htmlFor="city">Search your destination:</label>
              <div className="input flex">
                <input type="text" placeholder="Enter name here..." />
                <GrLocation className="icon" />
              </div>
            </div>

            {/* Date Input */}
            <div className="dateInput">
              <label htmlFor="date">Search your date:</label>
              <div className="input flex">
                <input type="date" />
              </div>
            </div>

            {/* Price Range Input */}
            <div className="destinationInput">
              <div className="label_total flex">
                <label htmlFor="price">Max Price:</label>
                <h3 className="total">${maxPrice}</h3>
              </div>
              <div className="input flex">
                <input
                  type="range"
                  max="5000"
                  min="1000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>
            </div>

            {/* Search Options */}
            <div className="searchOptions flex">
              <HiFilter className="icon" />
              <span>MORE FILTERS</span>
            </div>
          </div>

          {/* Social Media and Other Icons */}
          <div data-aos="fade-up" className="homeFooterIcons flex">
            <div className="rightIcons">
              <FiFacebook className="icon" />
              <AiOutlineInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
            <div className="leftIcons">
              <BsListTask className="icon" />
              <TbApps className="icon" />
            </div>
          </div>
        </div>
      </section>

      <section>
         <Container>
            <Row>
               <Col lg='12'>
                  <div className='secTitle'>
        <h3 data-aos="fade-right" className='title titles'>
        Visit our customers tour gallery
        </h3>
      </div>
               </Col>
               <Col lg='12'>
                  <MasonryImagesGallery />
               </Col>
            </Row>
         </Container>
      </section>

    </>
  );
};

export default Home;
