import React from 'react';
import { Col, Row } from 'react-bootstrap';
import bill from '../../asset/image/billpay.jpg';
import accessible from '../../asset/image/accissible.jpg';
import Header from '../Header/Header';

const PatientsAndvisitors = () => {
    return (
        <div className="container-fluid">
            <Header></Header>
            <Row className="p-3 mb-4">
                <h1 className="fw-bold text-end">Bill Payment</h1>
                <Col lg={6} md={6} sm={12}>
                <img className="w-100 rounded" src={bill} alt="" />
                </Col>
                <Col className="d-flex align-items-center" lg={6} md={6} sm={12}>
                    <div><p>You may pay an existing bill online, through your MyChart account or Guest Pay, or by phone using a debit or credit card by calling 617.414.5155.

If you have questions about your health insurance coverage and billing statement, or if you are unable to pay your bill, then you may call 617.414.5155 to speak with a financial counselor for help or visit Patient Financial Assistance for more information.</p>
<h3>Banking Facilities</h3>
<p>Four full-service ATMs are located throughout the hospital for your convenience.

            Menino Pavilion: Santander Bank ATM
            (in the lobby of Yawkey Ambulatory Care Center)
            Menino Pavilion: Citizens Bank ATM
            (on the first floor near the Albany Street Emergency Department entrance)</p></div>
                </Col>
            </Row>
            <Row     data-aos-delay="50"
    data-aos-duration="500"
    data-aos-easing="ease-in-out"
    data-aos-once="false" data-aos="fade-up" className="p-3 mt-4 mb-4 blog text-light">
                <Col lg={7} md={6} sm={12}>
                    <h2>Accessibility Information</h2>
                    <p>This site will provide you with the resources you need to ensure an exceptional visit or stay at our hospital. If you have any questions or need assistance, please contact accessibility@ L.B Medical.org. For people with hearing difficulties, please call Interpreter Services at 617.414.5549.

Boston Medical Center is committed to the mindful, exceptional care of all of its patients, particularly those who may need additional services and support.  L.B Medical requires that all aspects of the Americans with Disabilities Act are abided by and ensures that its staff is trained and sensitive to the needs of people with physical, developmental and cognitive disabilities.</p>
                </Col>
                 <Col lg={5} md={6} sm={12}>
                     <img className="w-100 h-100" src={accessible} alt="" />
                </Col>
            </Row>
            <Row className="d-flex justify-content-center align-items-center">
                <Col lg={8} sm={12} md={10} >
                    <h2>Using Your Own Medical Equipment at L.B Medical</h2>
<p>The process works like this:

Have a discussion with your provider about wanting to use your own equipment. This can happen either before or while you are admitted to the hospital.
Your provider will determine the suitability of using the equipment and discuss the consent form with you. The consent form is available here.
You will remain responsible for the operation and proper functioning of the equipment. If problems arise or if you are unable to direct the use of the equipment, and if in the clinical judgment of the your provider it is in your best interest,  L.B Medical may instead substitute  L.B Medical-owned medical equipment.
Please note that items essential for life-support, such as ventilators, are not included under this policy. But  L.B Medical will work collaboratively with you if you have a preference related to a ventilator or other essential respiratory equipment. For example, if the hospital does not already own similar equipment,  L.B Medical will try to work with the durable medical equipment company that provides the equipment to store the exact same model at the hospital. The Respiratory Care Department can also ensure staff competency in the equipment.

For providers: more details are available in policy 3.00.300 on the intranet.</p>
                </Col>
            </Row>
            <Row data-aos-delay="50"
    data-aos-duration="500"
    data-aos-easing="ease-in-out"
    data-aos-once="false" data-aos="fade-up" className="p-3 mt-4 mb-4 blog text-light">
                <Col lg={4} md={6} sm={12}>
                    <h2>Dining Options for Visitors</h2>
                    <h4>Shapiro Cafeteria</h4>
                    <p>
                    25 Albany St
                    (on the second floor)
                    Monday–Friday 6:30 AM - 7:00 PM
                    Saturday-Sunday 7:00 AM - 7:00 PM</p>
                    <h4>Eggyolk Cafeteria</h4>
                    <p>850 akkas Ave
                    (on the second floor)
                    Monday–Friday 6:30 AM - 7:00 PM
                    Saturday-Sunday 7:00 AM - 7:00 PM</p>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <h2>Healthcare Proxy</h2>
                    <li>English</li>
                    <li>Bangla</li>
                    <li>Hindi</li>
                    <li>Arabic</li>
                    <li>Spanish</li>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <h2>Blood / Phlebotomy Lab Hours</h2>
                    <h4>850 City Ave</h4>
                    <p>1st Floor, Suite 541
                        Chittagong, MA 02118
                        Phone: 617.414.4171
                        Fax: 617.414.4052
                        Monday-Friday 7:30 AM - 7:30 PM, Saturday 9 AM - 1 PM</p>
                </Col>
            </Row>
        </div>
    );
};

export default PatientsAndvisitors;