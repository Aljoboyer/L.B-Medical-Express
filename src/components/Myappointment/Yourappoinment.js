import React from 'react';

const Yourappoinment = ({service,ServiceDeleteHandler}) => {
    return (
        <tr className="tablerow text-center">
           <td>{service.appoinmentName}</td>
           <td>{service.date}</td>
           <td>{service.time}</td>
           <td>{service.status}</td>
           <td><button onClick={() => ServiceDeleteHandler(service._id,true)} className="btn btn-warning text-dark fw-bold" >Cancel Service</button></td>
         </tr>
    );
};

export default Yourappoinment;