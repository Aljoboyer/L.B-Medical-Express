import React, { useEffect, useState } from 'react';
import { Row, Spinner, Table } from 'react-bootstrap';
import Deletemodal from '../../Commonpages/Deletemodal/Deletemodal';
import Patientappointment from './Patientappointment';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import useAuth from '../../../Context/useAuth';

const MySwal = withReactContent(Swal);
const Patientappointments = () => {
    const {user} = useAuth()
    const [myservices,setMyservices] = useState([]);
    const [demo,setDemo] = useState([]);
    const [deleteshow, setDeleteshow] = useState(false);
    const [isdelete, setIsdelete] = useState(false)
    const [deleteid, setDeleteid] = useState(null)
    

    useEffect(() => {
        fetch('https://obscure-caverns-42480.herokuapp.com/admingetappointment')
        .then(res => res.json())
        .then(data => setMyservices(data))
    },[demo])

    const ServiceDeleteHandler = (id, isshow) => {
        setDeleteshow(isshow)
        setIsdelete(true)
        setDeleteid(id)
        if(isdelete)
        {
            fetch(`https://obscure-caverns-42480.herokuapp.com/admingetappointment/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data)
                {
                    
                    setIsdelete(false)
                    setDeleteshow(false)
                    setDemo(myservices)
                }
            })
        }
    }

    const AcceptHanlder = id => {
        fetch(`https://obscure-caverns-42480.herokuapp.com/admingetappointment/${id}`,{
            method: 'PUT'  
        })
        .then(res => res.json())
        .then(data => {
            setDemo(myservices)
            Swal.fire(
                'Appointment Accepted',
                '',
                'success'
              )
        })
    }
    return (
        <Row className="container-fluid justify-content-center">
        <h2 className="title fw-bold text-center my-4">All Patient Appointment</h2>
        <Table striped bordered hover responsive>
        <thead className="text-primary fs-6 text-center">
            <tr>
            <th>Service Name</th>
            <th>Patient Phone-No And Email</th>
            <th>Patient Loction</th>
            <th>Request Date</th>
            <th>Action</th>
            </tr>
        </thead>
            {
                myservices.message === 'User Not Authorised' ?  <Spinner animation="border" variant="dark" /> : <tbody> {
                    myservices.length === 0 ? <Spinner animation="border" variant="dark" /> : myservices.map(service => <Patientappointment AcceptHanlder={AcceptHanlder} ServiceDeleteHandler={ServiceDeleteHandler} key={service._id} service={service}></Patientappointment>)
                } </tbody>
            }
        </Table>
    
    <Deletemodal setIsdelete={setIsdelete} ServiceDeleteHandler={ServiceDeleteHandler} setDeleteid={setDeleteid} deleteid={deleteid} deleteshow={deleteshow} setDeleteshow={setDeleteshow}></Deletemodal>
    </Row>
    );
};

export default Patientappointments;