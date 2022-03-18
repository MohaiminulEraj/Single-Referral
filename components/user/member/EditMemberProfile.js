import React, { useState, useEffect } from 'react'
import { FaCaretDown } from "react-icons/fa";
import Multiselect from "react-widgets/Multiselect";

const EditMemberProfile = () => {
    let colors = ['Orange', 'Red', 'Blue', 'Purple'];
    const [value, setValue] = useState([])
    const [user, setUser] = useState({
        gender: '',
        age: 0,
        height: 1,
        ethnicity: '',
        relegion: '',
        city_of_living: '',
        country_of_living: '',
        country_of_origin: '',
        height_max: 2,
        marital_status: '',
        body_complexion: '',
        education: '',
        profession: '',
        native_language: '',
    })
    const {
        gender,
        age,
        ethnicity,
        relegion,
        city_of_living,
        country_of_living,
        country_of_origin,
        height,
        marital_status,
        body_complexion,
        education,
        profession,
        native_language,
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
                        <label className="col-sm-4 col-form-label">Height (cm):</label>
                        <div className="col-sm-8 col-10">
                            <input type="number" placeholder="Min. Height (cm)" name="height" value={height !== 1 && height} className="form-control" min={90} max={215} onChange={onChange} required />
                        </div>
                    </div>
                    <div className="form-group row my-2">
                        <label className="col-sm-4 col-form-label">Marital Status:</label>
                        <div className="col-sm-8">
                            <select className="form-control" name="marital_status" onChange={onChange} value={marital_status} required>
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
                        <label className="col-sm-4 col-form-label">Skin:</label>
                        <div className="col-sm-8">
                            <select className="form-control" name="body_complexion" onChange={onChange} value={body_complexion} required>
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
                        <label className="col-sm-4 col-form-label">Eyes:</label>
                        <div className="col-sm-8">
                            <select className="form-control" name="body_complexion" onChange={onChange} value={body_complexion} required>
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
                        <label className="col-sm-4 col-form-label">Hair:</label>
                        <div className="col-sm-8">
                            <select className="form-control" name="body_complexion" onChange={onChange} value={body_complexion} required>
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
                        <label className="col-sm-4 col-form-label">Interest:</label>
                        <div className="col-sm-8">
                            <Multiselect
                                data={colors}
                                value={value}
                                onChange={value => setValue(value)}
                            />
                        </div>
                    </div>
                    <div className="form-group row my-2">
                        <label className="col-sm-4 col-form-label">About Me:</label>
                        <div className="col-sm-8">
                            <Multiselect
                                data={colors}
                                value={value}
                                onChange={value => setValue(value)}
                            />
                        </div>
                    </div>
                    <div className="form-group row my-2">
                        <label className="col-sm-4 col-form-label">Ethnicity:</label>
                        <div className="col-sm-8">
                            <select className="form-control" name="ethnicity" onChange={onChange} value={ethnicity} required>
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
                        <label className="col-sm-4 col-form-label">Religion:</label>
                        <div className="col-sm-8">
                            <select className="form-control" name="relegion" onChange={onChange} value={relegion} required>
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
                        <label className="col-sm-4 col-form-label">Education:</label>
                        <div className="col-sm-8">
                            <select className="form-control" name="education" onChange={onChange} value={education} required>
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
                        <label className="col-sm-4 col-form-label">Profession:</label>
                        <div className="col-sm-8">
                            <select className="form-control" name="profession" onChange={onChange} value={profession} required>
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
                        <label className="col-sm-4 col-form-label">Native Language:</label>
                        <div className="col-sm-8">
                            <select className="form-control" name="native_language" onChange={onChange} value={native_language} required>
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
                    <div className="form-group row my-2">
                        <label className="col-sm-4 col-form-label">Country of Origin:</label>
                        <div className="col-sm-8">
                            <select className="form-control" name="country_of_origin" onChange={onChange} value={country_of_origin} required>
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

export default EditMemberProfile