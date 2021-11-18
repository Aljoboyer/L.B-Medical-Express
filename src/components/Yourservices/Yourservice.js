import React from 'react';
import { Col } from 'react-bootstrap';

const Yourservice = ({service,ServiceDeleteHandler}) => {
    return (
           <tr className="tablerow text-center">
           <td>{service.servicename}</td>
           <td>{service.postdate}</td>
           <td>{service.status}</td>
           <td><button onClick={() => ServiceDeleteHandler(service._id,true)} className="btn btn-warning text-dark fw-bold" >Cancel Service</button></td>
         </tr>
    );
};

export default Yourservice;