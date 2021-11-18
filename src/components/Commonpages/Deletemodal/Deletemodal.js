import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const Deletemodal = ({setIsdelete,ServiceDeleteHandler,deleteid,setDeleteid,deleteshow,setDeleteshow,handleClose}) => {
    return (
        <Modal
        show={deleteshow}
        onHide={() => setDeleteshow(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure .! You Want to delete this item ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {
              setIsdelete(false)
              setDeleteshow(false)
          }}>
            No
          </Button>
          <Button variant="primary" onClick={() => {
              ServiceDeleteHandler(deleteid)
              setDeleteshow(false)
          }}>Yes Sure</Button>
        </Modal.Footer>
      </Modal>
    );
};

export default Deletemodal;