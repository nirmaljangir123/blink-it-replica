import React from "react";
import Form from 'react-bootstrap/Form';
import '../newcomponent.css'
import Button from 'react-bootstrap/Button';

function RedioButton() {
    return (
        <div className="buttonborder d-flex bg-secondary rounded my-4 pl-2 " >
            <div  className="align-self-center">
                <Form.Check type="radio" aria-label="radio 1" className="px-3"/>
            </div>
            <div className="px-4">
                <h5>2 x 380g</h5>
                <h6>₹ 276</h6>
            </div>

        </div>
    );
}

export default RedioButton;