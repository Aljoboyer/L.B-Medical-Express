import React from 'react';
import {Link} from 'react-router-dom'
const Yourappoinment = ({service,ServiceDeleteHandler}) => {
    return (
        <tr className="tablerow text-center">
           <td>{service.appoinmentName}</td>
           <td>{service.date}</td>
           <td>{service.time}</td>
           <td>{service.status}</td>
           <td>{service.payment ? <p><b>Paid</b></p> : <> <Link to={`/payments/${service._id}`}><button className="btn btn-dark text-warning">Pay Bill</button></Link> <button onClick={() => ServiceDeleteHandler(service._id,true)} className="btn btn-warning text-dark fw-bold" >Cancel Service</button> </>}</td>
         </tr>
    );
};

export default Yourappoinment;