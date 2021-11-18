import React from 'react';

const Patientappointment = ({service,ServiceDeleteHandler,AcceptHanlder}) => {
    return (
        <tr className="tablerow text-center">
        <td>{service.appoinmentName}</td>
        <td>{service.email}</td>
        <td>{service.patientname}</td>
        <td>{service.date}</td>
        <td>{service.time}</td>
        <td><button onClick={() => AcceptHanlder(service._id)} className="btn btn-primary text-dark fw-bold" >Accept Service</button><button onClick={() => ServiceDeleteHandler(service._id,true)} className="btn btn-dark text-light fw-bold my-2" >Cancel Service</button></td>
      </tr>
    );
};

export default Patientappointment;