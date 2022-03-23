import React, { useState, useEffect } from 'react'
import { FaCaretDown } from "react-icons/fa";
import Multiselect from "react-widgets/Multiselect";

const EditAffiliateProfile = () => {
    let colors = ['Orange', 'Red', 'Blue', 'Purple'];
    const [value, setValue] = useState([])
    const [user, setUser] = useState({
        gender: '',
        age: 0,
        city_of_living: '',
        country_of_living: '',
    })
    const {
        gender,
        age,
        city_of_living,
        country_of_living,
    } = user
    const handleSubmit = (e) => {
        e.preventDefault();
        // if (looking_for_val === '') {
        //     toast.error('Please enter all the required fields!')
        // }
        console.log('handleSubmit!');
    };

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    };

    return (
        <form className="container" onSubmit={handleSubmit}>
            <h1>Create My Profile</h1>
            <div className="form-group row">
                <div className="col-md-12 my-2">
                    <div className="form-group row my-2">
                        <label htmlFor="gender" className="col-sm-4 col-form-label">Gender:</label>
                        <div className="col-sm-8">

                            <select className="form-control" name="gender" onChange={onChange} value={gender} required>
                                <option value="" disabled>Select</option>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="shundori">Shundori</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                            <FaCaretDown style={{
                                float: 'right',
                                marginRight: '6px',
                                marginTop: '-28px',
                                position: 'relative',
                                zIndex: 2,
                                color: 'red',
                            }} />
                        </div>
                    </div>
                    <div className="form-group row my-2">
                        <label className="col-sm-4 col-form-label">Age:</label>
                        <div className="col-sm-8 col-10">
                            <input type="number" name="age" value={age !== 0 && age} placeholder="18" className="form-control" min={18} max={100} onChange={onChange} required />
                        </div>
                    </div>
                    <div className="form-group row my-2">
                        <label className="col-sm-4 col-form-label">City of Living:</label>
                        <div className="col-sm-8">
                            <input type="text" name="city_of_living" value={city_of_living} className="form-control" onChange={onChange} required />
                        </div>
                    </div>
                    <div className="form-group row my-2">
                        <label className="col-sm-4 col-form-label">Country of Living:</label>
                        <div className="col-sm-8">
                            <select className="form-control" name="country_of_living" onChange={onChange} value={country_of_living} required>
                                <option value="" disabled>Select</option>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="shundori">Shundori</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                            <FaCaretDown style={{
                                float: 'right',
                                marginRight: '6px',
                                marginTop: '-28px',
                                position: 'relative',
                                zIndex: 2,
                                color: 'red',
                            }} />
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mb-2">Submit</button>
            </div>
        </form >
    )
}

export default EditAffiliateProfile