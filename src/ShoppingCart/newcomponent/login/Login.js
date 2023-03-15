import React, { useState } from 'react';
import { AiFillPhone, AiOutlineClose } from "react-icons/ai";


export function Login({ NextData, handleClose }) {
    // next button
    const [newdata, setnewdata] = useState("");
    const inputnewdata = (e) => {
        const regex = /^[0-9\b]+$/;
        if (e.target.value === "" || regex.test(e.target.value)) {
            setnewdata(e.target.value);
            // let num = e.target.value;
            // const newdata = num;
            // if (newdata.length === 10) {
            //     setnewdata(true);
            // }
            // else if (newdata.length > 10) {
            //     // alert("please enter only 10 digit number")
            // }
            // else {
            //     setnewdata(false);
        }

    }
    return (
        <>
            <div>

                <div onClick={handleClose}><button type="button" class="btn btn-primary"><AiOutlineClose /></button></div>
                <div className='text-center'><h4>Phone Number Verification</h4> </div>
                <div className='w-100 p-5 text-center'>
                    <p>Enter your phone number toLogin/Sign up</p>
                    <div className="input-group mb-3 d-block">
                        <div className='d-flex py-3'>
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1"><h5><AiFillPhone /></h5> 91+ </span>
                            </div>
                            <input
                                type="tel"
                                className="form-control"
                                pattern="[0-9]*"
                                value={newdata}
                                placeholder="Enter phone number"
                                onChange={inputnewdata}
                                maxLength={10}  
                                aria-describedby="basic-addon1"
                            />
                            {/* <input type="number" className="form-control" placeholder="Enter phone number" aria-label="Username" aria-describedby="basic-addon1" maxLength={10} pattern="[0-9]*" onChange={inputnewdata} /> */}
                        </div>
                        <div>{
                            newdata ? <button type="button" className="btn btn-success btn-lg w-100" onClick={NextData}>Send Otp</button> :
                                <button type="button" className="btn btn-danger btn-lg w-100">Next</button>
                        }
                        </div>
                    </div>
                    <p>By continuing, you agree to our <a href="https://blinkit.com/terms"> <span>Terms of service</span></a><br /><a href="https://blinkit.com/privacy"><span>Privacy policy</span></a></p>
                </div>
            </div>
        </>
    );
}
