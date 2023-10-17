import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

function BreedingDetails({data}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <button className="secondary" onClick={handleShow}>
          View
        </button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton style={{backgroundColor: "#00828c", color: "#fff"}}>
            <Modal.Title>Pair Details</Modal.Title>
          </Modal.Header>
          <Modal.Body className='d-flex'>
            <div className='w-50'>
                <p>Pair Id</p>
                <p>Buck</p>
                <p>Doe</p>
                <p>Pairing Date</p>
            </div>
            <div>
                <p>: {data.buck_id}</p>
                <p>: {data.doe_id}</p>
                <p>: {data.id}</p>
                <p>: {data.pairing_date}</p>
            </div>
          </Modal.Body>
          <Modal.Footer >
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }


export default BreedingDetails