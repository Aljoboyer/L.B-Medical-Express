import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Dashboardlists from './Dashboardlists/Dashboardlists';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import Dashboardhome from './Dashboardhome';
import Addservice from '../Addservice/Addservice';
import Makeadmin from '../Makeadmin/Makeadmin';
import Managepatientservices from '../ManagePatientServices/Managepatientservices';
import Manageservices from '../Manageservices/Manageservices';
import Adminheader from '../Addminheader/Adminheader';
import Patientappointments from '../Patientappointments/Patientappointments';
const Admindashboard = () => {
    const { path, url } = useRouteMatch();
    return (
        <div className="container-fluid admindasboard">
            <Adminheader></Adminheader>
            <Row>
                <Col lg={2} md={3} sm={12} className="sidelist">
                     <Dashboardlists></Dashboardlists>
                </Col>
                <Col lg={10} md={9} sm={12}>
                    
                    <Switch>
                        <Route exact path={path}>
                            <Dashboardhome></Dashboardhome>
                        </Route>
                        <Route path={`${path}/manageservices`}>
                            <Manageservices></Manageservices>
                        </Route>
                        <Route path={`${path}/patientservices`}>
                            <Managepatientservices></Managepatientservices>
                        </Route>
                        <Route path={`${path}/addservices`}>
                            <Addservice></Addservice>
                        </Route>
                        <Route path={`${path}/makeadmin`}>
                            <Makeadmin></Makeadmin>
                        </Route>
                        <Route path={`${path}/patientappointments`}>
                            <Patientappointments></Patientappointments>
                        </Route>
                    </Switch>
                </Col>
            </Row>
        </div>
    );
};

export default Admindashboard;