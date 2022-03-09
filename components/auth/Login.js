import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

const onChange = () => {
    console.log('onChange')
}

const Login = () => {
    return (
        <div className="container">
            {/* begin app-wrap */}
            <div className="app-wrap">
                {/* begin pre-loader */}
                {/* <div className="loader">
                <div className="h-100 d-flex justify-content-center">
                    <div className="align-self-center">
                        <img src={require("../../assets/img/loader/loader.svg")} alt="loader" />
                    </div>
                </div>
            </div> */}
                {/* end pre-loader */}

                {/*start login contant*/}
                <div className="app-contant">
                    <div className="bg-white">
                        <div className="container-fluid p-0">
                            <div className="row no-gutters">
                                <div className="col-sm-6 col-lg-6 col-xxl-6 align-self-center order-2 order-sm-1" style={{ minHeight: '100vh' }} >
                                    <div className="d-flex align-items-center">
                                        <div className="register p-5">
                                            <h1 className="mb-2">Registration | Step 1 </h1>
                                            <p>Welcome, Please complete the following form to join Single Referral Inc. True and accurate information is required to pass your account verification as well as withdrawal money under referral program. </p>
                                            <div className="row mt-2 mt-sm-5">
                                                <div className="col-12 col-md-6">
                                                    <div className="form-group">
                                                        <label className="control-label">Full Name*</label>
                                                        <input type="text" className="form-control" placeholder="Full Name" name="fullname" onChange={onChange} required />
                                                    </div>
                                                </div>
                                                <div className="form-group col-12 col-md-6">
                                                    <label htmlFor="inputState">Gender*</label>
                                                    <select id="gender" className="form-control" name="gender" onChange={onChange} required>
                                                        <option value="">Select Gender</option>
                                                        <option value="male">Male</option>
                                                        <option value="female">Female</option>
                                                    </select>
                                                </div>
                                                <div className="form-group col-12 col-md-6 ">
                                                    <label htmlFor="inputState">Date of Birth*</label>
                                                    <input type="date" placeholder="__/__/____" data-mask="99/99/9999" max="99-99-9999" className="form-control inputmask" name="date_of_birth" required onChange={onChange} />
                                                    <span className="font-14 text-muted">dd/mm/yyyy</span>
                                                </div>
                                                <div className="form-group col-12 col-md-6">
                                                    <label htmlFor="inputState">Age*</label>
                                                    <input type="number" placeholder="" className="form-control inputmask" name="age" onChange={onChange} required />
                                                    <span className="font-14 text-muted">Example : 20</span>
                                                </div>
                                                <div className="form-group col-12 col-md-6">
                                                    <label htmlFor="inputState">Country of Origin*</label>
                                                    <select id="" className="form-control" name="country_of_origin" onChange={onChange} required >
                                                        <option value="">Select Country of Origin</option>
                                                        <option value="switzerland">Switzerland</option>
                                                        <option value="togo">Togo</option>
                                                        <option value="new_zealand">New Zealand</option>
                                                        <option value="nepal">Nepal</option>
                                                        <option value="mexico">Mexico</option>
                                                        <option value="liberia">Liberia</option>
                                                        <option value="japan">Japan</option>
                                                        <option value="pakistan">Pakistan</option>
                                                    </select>
                                                </div>
                                                <div className="form-group col-12 col-md-6">
                                                    <label htmlFor="inputState">Country of Living*</label>
                                                    <select id="inputState" className="form-control" name="country_of_living" onChange={onChange} required >
                                                        <option value="">Select Country of Living</option>
                                                        <option value="switzerland">Switzerland</option>
                                                        <option value="togo">Togo</option>
                                                        <option value="new_zealand">New Zealand</option>
                                                        <option value="nepal">Nepal</option>
                                                        <option value="mexico">Mexico</option>
                                                        <option value="liberia">Liberia</option>
                                                        <option value="japan">Japan</option>
                                                        <option value="pakistan">Pakistan</option>
                                                    </select>
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    <label htmlFor="validationCustom04">State/Provence*</label>
                                                    <input type="text" className="form-control" id="validationCustom04" placeholder="State" required
                                                        name="state_or_province" onChange={onChange} />
                                                    <div className="invalid-feedback">
                                                        Please provide a valid state.
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    <div className="form-group">
                                                        <label className="control-label">City*</label>
                                                        <input type="text" className="form-control" placeholder="City"
                                                            name="city" onChange={onChange} />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    <div className="form-group">
                                                        <label className="control-label">Email*</label>
                                                        <input type="email"
                                                            className="form-control"
                                                            placeholder="Email"
                                                            name="email"
                                                            onChange={onChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    <div className="form-group">
                                                        <label className="control-label">Password*</label>
                                                        <input type="password" className="form-control" placeholder="Password" name="password" onChange={onChange} required />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="gridCheck" onChange={onChange} checked />
                                                        <label className="form-check-label" htmlFor="gridCheck" >
                                                            I accept terms and conditions for membership.
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-12 mt-3">
                                                    {/* <a href="auth-login.html" className="btn btn-primary text-uppercase" data-toggle="modal" data-target="#verticalCenter">Sign up</a> */}
                                                    <input type="submit" className="btn btn-primary text-uppercase" value="Sign Up" />
                                                </div>
                                                <div className="col-12  mt-3">
                                                    <p>Already have an account ?
                                                        <Link href="/"> Sign In</Link>
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-xxl-6 col-lg-6 bg-gradient o-hidden order-1 order-sm-2" style={{ background: 'cover' }}>
                                    <div className="row align-items-center h-100">
                                        <div className="col-7 mx-auto">
                                            <Image className="img-fluid" src={require("../../assets/img/login.svg")} alt="img" layout="fixed" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end app-wrap */}
        </div>
    )
}

export default Login