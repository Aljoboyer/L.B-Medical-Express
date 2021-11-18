import React, { useEffect, useState } from 'react';
import { Col, Row, Spinner, Table } from 'react-bootstrap';
import useAuth from '../../Context/useAuth';
import Deletemodal from '../Commonpages/Deletemodal/Deletemodal';
import Header from '../Header/Header';
import Yourservice from './Yourservice';
const Yourservices = () => {
    const {user} = useAuth()
    const [myservices,setMyservices] = useState([]);
    const [demo,setDemo] = useState([]);
    const [deleteshow, setDeleteshow] = useState(false);
    const [isdelete, setIsdelete] = useState(false)
    const [deleteid, setDeleteid] = useState(null)
    

    useEffect(() => {
        fetch(`http://localhost:5000/patientservice?email=${user.email}`,{
            headers:{
                'authorization':`Bearer ${localStorage.getItem('idtoken')}`
            }
        })
        .then(res => res.json())
        .then(data => setMyservices(data))
    },[user.email,demo])

    const ServiceDeleteHandler = (id, isshow) => {
        setDeleteshow(isshow)
        setIsdelete(true)
        setDeleteid(id)
        if(isdelete)
        {
            fetch(`http://localhost:5000/deleteservice/${id}`,{
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
        <div className="container-fluid justify-content-center">
            <Header></Header>
            <h2 className="title fw-bold text-center my-4">Your Services</h2>
            <Table striped bordered hover responsive>
            <thead className="text-primary fs-5 text-center">
                <tr>
                <th>Service Name</th>
                <th>Post Date</th>
                <th>Status</th>
                <th>Action</th>
                </tr>
            </thead>
                {
                    myservices.message === 'User Not Authorised' ?  <Spinner animation="border" variant="dark" /> : <tbody> {
                        myservices.length === 0 ? <Spinner animation="border" variant="dark" /> : myservices.map(service => <Yourservice ServiceDeleteHandler={ServiceDeleteHandler} key={service._id} service={service}></Yourservice>)
                    } </tbody>
                }
            </Table>
        
        <Deletemodal setIsdelete={setIsdelete} ServiceDeleteHandler={ServiceDeleteHandler} setDeleteid={setDeleteid} deleteid={deleteid} deleteshow={deleteshow} setDeleteshow={setDeleteshow}></Deletemodal>
        </div>
    );
};

export default Yourservices;