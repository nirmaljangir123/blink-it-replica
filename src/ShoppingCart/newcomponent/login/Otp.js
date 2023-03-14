import Button from 'react-bootstrap/Button';
export function Otp() {

    return (
        <>
        
        <div className='text-center'>Phone Number Verification</div>
                    <p>Enter 4 digit code sent to your phone </p>
                    <div className="input-group p-3 ">
                        <div className='d-flex'>
                            <input type="tel" className='w-25 m-2 p-2 rounded' />
                            <input type="tel" className='w-25 m-2 p-2 rounded' />
                            <input type="tel" className='w-25 m-2 p-2 rounded' />
                            <input type="tel" className='w-25 m-2 p-2 rounded' />
                        </div>
                    </div>
                    <div>
                        <button type="button" className="btn btn-success btn-lg w-100">Next</button> :
                    </div>
                    <div>
                            <h5 className='text-danger' >Resend Code</h5>
                    </div>
        </>
    );
}
