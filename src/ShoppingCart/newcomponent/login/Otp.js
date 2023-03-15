export function Otp({ SubmitData, handleClose, showAlert, BackOnClick }) {
    return (
        <>
            <div className='p-4'>
                <div><button type="button" class="btn btn-outline-warning" onClick={BackOnClick}>Back</button></div>
                <div className='text-center fs-4 p-2'>Phone Number Verification</div>
                <p className='text-center fs-6'>Enter 4 digit code sent to your phone </p>
                <div className="input-group p-3 ">
                    <div className='d-flex'>
                        <input
                            type="tel"
                            name="otp_value"
                            autoComplete="false"
                            maxLength={1}
                            className='w-25 m-2 rounded fs-1 text-center'
                        />
                        <input
                            type="tel"
                            name="otp_value"
                            autoComplete="false"
                            maxLength={1}
                            className='w-25 m-2 rounded fs-1 text-center'
                        />
                        <input
                            type="tel"
                            name="otp_value"
                            autoComplete="false"
                            maxLength={1}
                            className='w-25 m-2 rounded fs-1 text-center'
                        />
                        <input
                            type="tel"
                            name="otp_value"
                            autoComplete="false"
                            maxLength={1}
                            className='w-25 m-2 rounded fs-1 text-center'
                        />
                    </div>
                </div>
                <div className='w-100 text-center'>
                    <button type="button" className="btn btn-success btn-lg w-50 " onClick={() => { showAlert(); SubmitData(); handleClose() }}>Submit</button> :
                </div>
                <div>
                    <h5 className='text-danger text-center pt-4' onClick={SubmitData}>Resend Code</h5>
                </div>
             
            </div>

        </>
    );
}

