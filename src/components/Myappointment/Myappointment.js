import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import useAuth from '../../Context/useAuth';
import Header from '../Header/Header';
import Yourappoinment from './Yourappoinment';
import Deletemodal from '../Commonpages/Deletemodal/Deletemodal'
const Myappointment = () => {
    const {user} = useAuth()
    const [myservices,setMyservices] = useState([]);
    const [demo,setDemo] = useState([]);
    const [deleteshow, setDeleteshow] = useState(false);
    const [isdelete, setIsdelete] = useState(false)
    const [deleteid, setDeleteid] = useState(null)
console.log(myservices)
    useEffect(() => {
        fetch(`http://localhost:5000/patientappointment?email=${user.email}`,{
            headers:{
                'authorization':`Bearer ${localStorage.getItem('idtoken')}`
            }
        })
        .then(res => res.json())
        .then(data => setMyservices(data))
    },[user.email,demo]);

    const ServiceDeleteHandler = (id, isshow) => {
        setDeleteshow(isshow)
        setIsdelete(true)
        setDeleteid(id)
        if(isdelete)
        {
            fetch(`http://localhost:5000/deleteappointment/${id}`,{
                method: 'DELETE'
            })
            .then(res => res)
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
    return (
        <div className="container-fluid">
            <Header></Header>
            <h2 className="title fw-bold text-center my-4">Your Appointments</h2>
            <Table striped bordered hover responsive>
            <thead className="text-primary fs-5 text-center">
                <tr>
                <th>Appointment Name</th>
                <th>Post Date</th>
                <th>Time</th>
                <th>Status</th>
                <th>Action</th>
                </tr>
            </thead>
                {
                    myservices.message === 'User Not Authorised' ?  <Spinner animation="border" variant="dark" /> : <tbody> {
                        myservices.length === 0 ? <Spinner animation="border" variant="dark" /> : myservices.map(service => <Yourappoinment ServiceDeleteHandler={ServiceDeleteHandler} key={service._id} service={service}></Yourappoinment>)
                    } </tbody>
                }
            </Table>
        
        <Deletemodal setIsdelete={setIsdelete} ServiceDeleteHandler={ServiceDeleteHandler} setDeleteid={setDeleteid} deleteid={deleteid} deleteshow={deleteshow} setDeleteshow={setDeleteshow}></Deletemodal>
        </div>
    );
};

export default Myappointment;