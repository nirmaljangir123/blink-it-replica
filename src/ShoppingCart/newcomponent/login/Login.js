import React, { useState } from 'react';
import { AiFillPhone } from "react-icons/ai";
export function Login(item) {

    // next button
    const [data, setdata] = useState(false);

    const inputdata = (e) => {
        let num = e.target.value;

        const data = num;
        const newData = data;
        console.log("------", newData);
        if (data.length === 10) {
            setdata(true);
        }
        else if (data.length > 10) {
            alert("please enter only 10 digit number")
        }
        else {
            setdata(false);
        }
    }
    return (
        <>
            <div className='text-center'><h4>Phone Number Verification</h4> </div>
            <div className='w-100 p-5 text-center'>
                <p>Enter your phone number toLogin/Sign up</p>
                <div className="input-group mb-3 d-block">
                    <div className='d-flex py-3'>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1"><h5><AiFillPhone /></h5> 91+ </span>
                        </div>
                        <input type="text" className="form-control" placeholder="Enter phone number" aria-label="Username" aria-describedby="basic-addon1" onChange={inputdata} />
                    </div>
                    <div>{
                        data ? <button type="button" className="btn btn-success btn-lg w-100">Next</button> :
                            <button type="button" className="btn btn-danger btn-lg w-100">Next</button>
                    }
                    </div>
                </div>
                <p>By continuing, you agree to our <a href="https://blinkit.com/terms"> <span>Terms of service</span></a><br /><a href="https://blinkit.com/privacy"><span>Privacy policy</span></a></p>
            </div>

        </>
    );
}
