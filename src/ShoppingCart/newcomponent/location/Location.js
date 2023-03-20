import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AiFillCaretDown } from 'react-icons/ai';

export function Location() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <h3>Delivery Time</h3>
            <div className='d-flex' onClick={handleShow}>
                <p variant="primary" className='rounded px-3 w-100'>Jaipur, Rajasthan 302021, India</p>
                <h6><AiFillCaretDown /></h6>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Change Location</Modal.Title>
                </Modal.Header>
                <Modal.Body className='d-flex justify-content-around ' >
                    <div>
                        <button type="button" class="btn btn-success">Detect my location</button>
                    </div>
                    <div>
                        <p className='align-self-center '>--<span className='border border-dark px-2 py-1 rounded-pill'>or</span>--</p>
                    </div>
                    <div>
                        <input type="text" placeholder='Type your city Society/Colony/Area ' className='border border border-success form-control rounded py-1' />
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
