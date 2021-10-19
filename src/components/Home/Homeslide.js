import React from 'react';
import { Carousel } from 'react-bootstrap';
import firsts from '../../asset/image/first.jpg';
import second from '../../asset/image/second.jpg';
import third from '../../asset/image/third.jpg';
const Homeslide = () => {
    return (
        <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={firsts}
            alt="First slide"
          />
      
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={second}
            alt="Second slide"
          />
    
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={third}
            alt="Third slide"
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Homeslide;