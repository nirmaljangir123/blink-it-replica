import React from "react";
import Form from 'react-bootstrap/Form';
import '../newcomponent.css'
import Button from 'react-bootstrap/Button';

function RedioButton() {
    return (
        <div className="buttonborder d-flex justify-content-around rounded my-4 w-100" >
            <div  className="align-self-center">
                <Form.Check type="radio" aria-label="radio 1" />
            </div>
            <div>
                <h5>2 x 380g</h5>
                <h6>₹ 276</h6>
            </div>

        </div>
    );
}

export default RedioButton;