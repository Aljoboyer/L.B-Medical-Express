import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Card,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import blogo1 from '../../../asset/image/blog1.jpg'
import blog2 from '../../../asset/image/blog2.jpg';
import blog3 from '../../../asset/image/blog3.jpg'
import blog4 from '../../../asset/image/blog4.png';
import blog5 from '../../../asset/image/blog5.jpg'
import blog6 from '../../../asset/image/blog6.jpg'
const Ourblog = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    return (
      <div className="container-fluid blog">
      <h2 className="fw-bold fs-1"> LB. Stories </h2>
      <Slider {...settings}>
        <div>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={blogo1} />
  <Card.Body>
    <Card.Title className="text-primary"><p  className="text-dark"><small>Awards, Rankings and Recognitions </small></p><Link>L.B Hospitals Tops in Class for Patient Safety</Link></Card.Title>
    <Card.Text>
    All three hospitals again receive ‘A’ grades from The Leapfrog...
    </Card.Text>
  </Card.Body>
</Card>
        </div>
        <div>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={blog2} />
  <Card.Body>

    <Card.Title className="text-primary"><p  className="text-dark"><small>Cancer</small></p><Link>Lung Cancer Screening Saves Lives</Link></Card.Title>
    <Card.Text>
    Recommended for people with 20-pack-per-year history of smoking
    </Card.Text>
  </Card.Body>
</Card>
        </div>
        <div>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={blog3} />
  <Card.Body>
    <Card.Title className="text-primary"><p  className="text-dark"><small>Covid-19 </small></p><Link>5 Tips for a Safer Holiday Celebration</Link></Card.Title>
    <Card.Text>
    With a few precautions, we can celebrate the holidays together
    </Card.Text>
  </Card.Body>
</Card>
        </div>
        <div>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={blog4} />
  <Card.Body>
    <Card.Title className="text-primary"><p  className="text-dark"><small>Cancer </small></p><Link>4 Facts About Pancreatic Cancer</Link></Card.Title>
    <Card.Text>
    Signs, risk factors and improving treatment options for one of...
    </Card.Text>
  </Card.Body>
</Card>
        </div>
        <div>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={blog5} />
  <Card.Body>
    
    <Card.Title className="text-primary"><p  className="text-dark"><small>Public Help</small></p><Link>Rush Keeps Shelves Stocked Amid Drug, Medical Supply Shortages</Link></Card.Title>
    <Card.Text>
    Through effective management, Rush has enough supplies to even...
    </Card.Text>
  </Card.Body>
</Card>
        </div>
        <div>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={blog6} />
  <Card.Body>
    
    <Card.Title className="text-primary"><p  className="text-dark"><small>Health Equity </small></p><Link>Rush Helps Bring Food to Neighbors of Closed Grocer</Link></Card.Title>
    <Card.Text>
    Staff jumps in to support West Garfield Park residents...
    </Card.Text>
  </Card.Body>
</Card>
        </div>
      </Slider>
    </div>
    );
};

export default Ourblog;