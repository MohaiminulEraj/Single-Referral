import React, { useState } from 'react'

const ForgotPassword = () => {
    return (
        <form className="container">
            <h1>Forgot Password</h1>
            <div className="form-group row my-4">
                <label htmlFor="fEmail" className="col-sm-4 col-form-label">Email:</label>
                <div className="col-sm-8">
                    <input type="email" className="form-control" id="fEmail" placeholder="Enter Register Verified Email" />
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary my-4 text-center">Submit</button>
            </div>
        </form>
    )
}

export default ForgotPassword