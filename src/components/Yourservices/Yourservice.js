import React from 'react';
import { Link } from 'react-router-dom';

const Yourservice = ({service,ServiceDeleteHandler}) => {
    return (
           <tr className="tablerow text-center">
           <td>{service.servicename}</td>
           <td>{service.postdate}</td>
           <td>{service.status}</td>
           <td>{service.payment ? <p>PAID</p> : <><Link to={`/payments/${service._id}`}><button className="btn btn-dark text-warning fw-bold mx-2">Pay Bill</button></Link><button onClick={() => ServiceDeleteHandler(service._id,true)} className="btn btn-warning text-dark fw-bold" >Cancel Service</button></>}</td>
         </tr>
    );
};

export default Yourservice;