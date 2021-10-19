import { Button, Col } from 'react-bootstrap';
import React from 'react';
import {Link} from 'react-router-dom';
const Service = (props) => {
  const {id,img,name,short} = props.service
    return (
        <Col lg={4} md={6} sm={12} className="container cards">
            <div className="card">
              <div className="card-header">
                <img src={img} alt="rover" />
              </div>
              <div className="card-body">
                <span className="tag tag-teal">Popular</span>
                <h4>
                 {name}
                </h4>
                <p>
                  {short}
                </p>
                <div className="user">
                  <img src={img} alt="user" />
                  <div className="user-info">
                  <Link to={`/details/${id}`} > <Button className="service-btn" >Details</Button></Link>
                  </div>
                </div>
              </div>
            </div>
  
    </Col>
    );
};

export default Service;