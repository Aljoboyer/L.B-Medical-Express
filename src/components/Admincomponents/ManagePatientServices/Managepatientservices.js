import React, { useEffect, useState } from 'react';
import { Row, Spinner, Table } from 'react-bootstrap';
import useAuth from '../../../Context/useAuth';
import Deletemodal from '../../Commonpages/Deletemodal/Deletemodal'
import Manageservice from './Manageservice';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);
const Managepatientservices = () => {
    const {user} = useAuth()
    const [myservices,setMyservices] = useState([]);
    const [demo,setDemo] = useState([]);
    const [deleteshow, setDeleteshow] = useState(false);
    const [isdelete, setIsdelete] = useState(false)
    const [deleteid, setDeleteid] = useState(null)
    

    useEffect(() => {
        fetch('http://localhost:5000/allpatientservice')
        .then(res => res.json())
        .then(data => setMyservices(data))
    },[demo])

    const ServiceDeleteHandler = (id, isshow) => {
        setDeleteshow(isshow)
        setIsdelete(true)
        setDeleteid(id)
        if(isdelete)
        {
            fetch(`http://localhost:5000/patientdeleteservice/${id}`,{
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
        fetch(`http://localhost:5000/acceptpatinetservice/${id}`,{
            method: 'PUT'  
        })
        .then(res => res.json())
        .then(data => {
            setDemo(myservices)
            Swal.fire(
                'Services Accepted',
                '',
                'success'
              )
        })
    }
    return (
        <Row className="container-fluid justify-content-center">
        <h2 className="title fw-bold text-center my-4">Patient Requested Services</h2>
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
                    myservices.length === 0 ? <Spinner animation="border" variant="dark" /> : myservices.map(service => <Manageservice AcceptHanlder={AcceptHanlder} ServiceDeleteHandler={ServiceDeleteHandler} key={service._id} service={service}></Manageservice>)
                } </tbody>
            }
        </Table>
    
    <Deletemodal setIsdelete={setIsdelete} ServiceDeleteHandler={ServiceDeleteHandler} setDeleteid={setDeleteid} deleteid={deleteid} deleteshow={deleteshow} setDeleteshow={setDeleteshow}></Deletemodal>
    </Row>
    );
};

export default Managepatientservices;