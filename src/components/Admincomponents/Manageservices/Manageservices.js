import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import Deletemodal from '../../Commonpages/Deletemodal/Deletemodal';
import ServicesUse from '../../Hook/Hook';
import Manageservice from './Manageservice';
const Manageservices = () => {
    const {services,setDemo,totalpage,pageno,manages,setPageno} = ServicesUse()
    const [deleteshow, setDeleteshow] = useState(false);
    const [isdelete, setIsdelete] = useState(false)
    const [deleteid, setDeleteid] = useState(null)

    const ServiceDeleteHandler = (id, isshow) => {
        setDeleteshow(isshow)
        setIsdelete(true)
        setDeleteid(id)
        if(isdelete)
        {
            fetch(`http://localhost:5000/services/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                setIsdelete(false)
                setDeleteshow(false)
                setDemo(10)
            })
        }
    }
    return (
        <Row >
            <Row className="justify-content-center my-4">
                {
                    [...Array(totalpage).keys()].map(number =>     
                        <button onClick={() => setPageno(number)} className={number === pageno ? 'btn btn-primary w-25 mx-3' : 'btn btn-warning w-25 mx-3'}>{number}</button>
                    )
                }
            </Row>
           <Row className="justify-content-center g-2">
           {
               manages.map(service => <Manageservice ServiceDeleteHandler={ServiceDeleteHandler} key={service._id} service={service}></Manageservice>)
           }
           </Row>

           <Deletemodal setIsdelete={setIsdelete} ServiceDeleteHandler={ServiceDeleteHandler} setDeleteid={setDeleteid} deleteid={deleteid} deleteshow={deleteshow} setDeleteshow={setDeleteshow}></Deletemodal>

       </Row>
    );
};

export default Manageservices;