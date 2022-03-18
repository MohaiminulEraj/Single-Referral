import React from 'react'

const ResetPassword = () => {
    return (
        <form className="container">
            <h1>Reset Password</h1>
            <div className="form-group row my-4">
                <label htmlFor="newPassword" className="col-sm-4 col-form-label">New Password:</label>
                <div className="col-sm-8">
                    <input type="password" className="form-control" id="newPassword" placeholder="New Password" />
                </div>
            </div>
            <div className="form-group row my-4">
                <label htmlFor="confirmPassword" className="col-sm-4 col-form-label">Confirm Password:</label>
                <div className="col-sm-8">
                    <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" />
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary my-4 text-center">Submit</button>
            </div>
        </form>
    )
}

export default ResetPassword