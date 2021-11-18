import React from 'react';

const Manageservice = ({service,ServiceDeleteHandler,AcceptHanlder}) => {
    return (
        <tr className="tablerow text-center">
        <td>{service.servicename}</td>
        <td>{service.email}/ PN: {service.number}</td>
        <td>{service.location}</td>
        <td>{service.postdate}</td>
        <td><button onClick={() => AcceptHanlder(service._id)} className="btn btn-primary text-dark fw-bold" >Accept Service</button><button onClick={() => ServiceDeleteHandler(service._id,true)} className="btn btn-dark text-light fw-bold my-2" >Cancel Service</button></td>
      </tr>
    );
};

export default Manageservice;