import React, {useState} from 'react';
import { Row,FloatingLabel,Form ,Col} from 'react-bootstrap';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);
const Addservice = () => {
    const [servicedata, setServicedata] = useState({})

    const [img, setImg] = useState(null)


    const imageHanlder = e => {
        setImg(e.target.files[0])
    }
    const onBlurHandler = e => {
        const fieldtext = e.target.name;
        const fieldvalue = e.target.value;

        const newdata = {...servicedata}
        newdata[fieldtext] = fieldvalue;
        setServicedata(newdata)
    }
    const AddserviceHandler = e => {
        e.preventDefault()
        if(!img)
        {
            return
        }

        const fd = new FormData();

        fd.append('name',servicedata.name);
        fd.append('img', img);
        fd.append('short', servicedata.short);
        fd.append('details', servicedata.details);

        fetch('https://obscure-caverns-42480.herokuapp.com/services',{
            method: 'POST',
            body: fd
        })
        .then(res => res.json())
        .then(data => {
            Swal.fire(
                'Your Request Sended',
                'Please Wait We will Response',
                'success'
              )
            e.target.reset()
        })
        .catch(error => {
              
            console.error('Error:', error);
          });
    }
    return (
    <Row className="justify-content-center">
        <h2 className="my-3 text-center">Add a New Services</h2>
       <Col lg={8} md={12} sm={12}>
       <form onSubmit={AddserviceHandler}>
            <FloatingLabel
            controlId="floatingInput"
            label="Service Name"
            
            >
         <Form.Control name="name" onBlur={onBlurHandler} type="text" placeholder="Service Name" />
        </FloatingLabel>

            
        <Form.Group className="mb-3 fw-bold text-primary">
            <Form.Label>Choose image</Form.Label>
            <Form.Control
            accept="image/*"
              type="file"
              required
              name="img"
              onChange={imageHanlder}
              
            />
            <Form.Control.Feedback type="invalid" tooltip>
              
            </Form.Control.Feedback>
          </Form.Group>

        <FloatingLabel   controlId="floatingPassword" label="Short Description Of Service">
        <Form.Control name="short"
            onBlur={onBlurHandler} as="textarea" type="text" placeholder="Short Description Of Service" />
        </FloatingLabel>

        <FloatingLabel  className="my-3"  controlId="floatingPassword" label="Details Of Service">
        <Form.Control name="details"
            onBlur={onBlurHandler} as="textarea" type="text" placeholder="Details Of Service" />
        </FloatingLabel>
        <button type="submit" className="btn btn-primary">Add Service</button>
        </form>
       </Col>

    </Row>
    );
};

export default Addservice;