import React, { useState } from 'react';

const MatchPreferences = () => {

    const [random, setRandom] = useState(true);
    const [custom, setCustom] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [disabledRandom, setDisabledRandom] = useState(false);

    const [match, setMatch] = useState({
        // Random 
        looking_for_rand: '',
        ageMin_rand: 0,
        ageMax_rand: 200,
        ethnicity_rand: '',
        relegion_rand: '',
        country_of_living_rand: '',
        // Custom 
        looking_for: '',
        ageMin: 0,
        ageMax: 200,
        ethnicity: '',
        relegion: '',
        city_of_living: '',
        country_of_living: '',
        country_of_origin: '',
        height_min: 1,
        height_max: 2,
        marital_status: '',
        body_complexion: '',
        education: '',
        profession: '',
        native_language: '',
    })
    const {
        // Random 
        looking_for_rand,
        ageMin_rand,
        ageMax_rand,
        ethnicity_rand,
        relegion_rand,
        country_of_living_rand,
        // Custom 
        looking_for,
        ageMin,
        ageMax,
        ethnicity,
        relegion,
        city_of_living,
        country_of_living,
        country_of_origin,
        height_min,
        height_max,
        marital_status,
        body_complexion,
        education,
        profession,
        native_language,
    } = match
    const handleSubmit = (e) => {
        e.preventDefault();
        // if (looking_for_val === '') {
        //     toast.error('Please enter all the required fields!')
        // }
        console.log('handleSubmit!');
    };

    const onChange = (e) => {
        setMatch({ ...match, [e.target.name]: e.target.value })
    };
    const checkRadio = (e) => {
        if (e.target.name === 'random') {
            setRandom(true);
            setCustom(false);
            setDisabled(true);
            setDisabledRandom(false);
            setMatch({
                looking_for: '',
                ageMin: 0,
                ageMax: 200,
                ethnicity: '',
                relegion: '',
                city_of_living: '',
                country_of_living: '',
                country_of_origin: '',
                height_min: 1,
                height_max: 2,
                marital_status: '',
                body_complexion: '',
                education: '',
                profession: '',
                native_language: '',
            });
        } else {
            setRandom(false);
            setCustom(true);
            setDisabled(false);
            setDisabledRandom(true);
            setMatch({
                looking_for_rand: '',
                ageMin_rand: 0,
                ageMax_rand: 200,
                ethnicity_rand: '',
                relegion_rand: '',
                country_of_living_rand: ''
            });
        }
    };
    return (
        <form className="container" onSubmit={handleSubmit}>
            <h1>Match Preferences</h1>
            <div className="form-group row">
                <div className="col-md-12 my-2">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" onChange={checkRadio} checked={random} name="random" id="matchPrefInlineRadio1" />
                        <label style={{ fontWeight: "bold" }} className="form-check-label" htmlFor="matchPrefInlineRadio1">Random Match</label>
                    </div>
                    <div className="form-group row my-2">
                        <label className="col-sm-4 col-form-label">Looking for:</label>
                        <div className="col-sm-8">
                            <select className="form-control" name="looking_for_rand" onChange={onChange} value={looking_for_rand} disabled={disabledRandom} required>
                                <option value="" disabled>Select</option>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="shundori">Shundori</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                            <i style={{
                                float: 'right',
                                marginRight: '6px',
                                marginTop: '-28px',
                                position: 'relative',
                                zIndex: 2,
                                color: 'red',
                            }} className="fa fa-caret-down" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="form-group row my-2">
                        <label className="col-sm-4 col-form-label">Age Range:</label>
                        <div className="col-sm-4 col-6">
                            <input type="number" className="form-control" name="ageMin_rand" min={18} max={99} onChange={onChange} value={ageMin_rand !== 0 && ageMin_rand} disabled={disabledRandom} placeholder="Min. Age" required />
                        </div>
                        <div className="col-sm-4 col-6">
                            <input type="number" className="form-control" name="ageMax_rand" min={parseInt(ageMin_rand) + 1} max={100} onChange={onChange} value={ageMax_rand !== 200 && ageMax_rand} placeholder="Max. Age" disabled={disabledRandom} required />
                        </div>
                    </div>
                    <div className="form-group row my-2">
                        <label className="col-sm-4 col-form-label">Ethnicity:</label>
                        <div className="col-sm-8">
                            <select className="form-control" name="ethnicity_rand" onChange={onChange} value={ethnicity_rand} disabled={disabledRandom} required>
                                <option value="" disabled>Select</option>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="shundori">Shundori</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                            <i style={{
                                float: 'right',
                                marginRight: '6px',
                                marginTop: '-28px',
                                position: 'relative',
                                zIndex: 2,
                                color: 'red',
                            }} className="fa fa-caret-down" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="form-group row my-2">
                        <label className="col-sm-4 col-form-label">Religion:</label>
                        <div className="col-sm-8">
                            <select className="form-control" name="relegion_rand" onChange={onChange} value={relegion_rand} disabled={disabledRandom} required>
                                <option value="" disabled>Select</option>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="shundori">Shundori</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                            <i style={{
                                float: 'right',
                                marginRight: '6px',
                                marginTop: '-28px',
                                position: 'relative',
                                zIndex: 2,
                                color: 'red',
                            }} className="fa fa-caret-down" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="form-group row my-2">
                        <label className="col-sm-4 col-form-label">Country of Living:</label>
                        <div className="col-sm-8">
                            <select className="form-control" name="country_of_living_rand" onChange={onChange} value={country_of_living_rand} disabled={disabledRandom} required>
                                <option value="" disabled>Select</option>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="shundori">Shundori</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                            <i style={{
                                float: 'right',
                                marginRight: '6px',
                                marginTop: '-28px',
                                position: 'relative',
                                zIndex: 2,
                                color: 'red',
                            }} className="fa fa-caret-down" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
                {/* CUSTOM MATHC */}
                <div className="col-md-12 my-2">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" onChange={checkRadio} name="custom" id="matchPrefInlineRadio2" checked={custom} />
                        <label style={{ fontWeight: "bold" }} className="form-check-label" htmlFor="matchPrefInlineRadio2">Custom Match</label>
                        <br />
                    </div>
                    <div className="form-group row my-2">
                        <label htmlFor="looking_for" className="col-sm-4 col-form-label">Looking for:</label>
                        <div className="col-sm-8">

                            <select className="form-control" name="looking_for" onChange={onChange} value={looking_for} required disabled={disabled}>
                                <option value="" disabled>Select</option>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="shundori">Shundori</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                            <i style={{
                                float: 'right',
                                marginRight: '6px',
                                marginTop: '-28px',
                                position: 'relative',
                                zIndex: 2,
                                color: 'red',
                            }} className="fa fa-caret-down" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="form-group row my-2">
                        <label className="col-sm-4 col-form-label">Age Range:</label>
                        <div className="col-sm-4 col-6">
                            <input type="number" name="ageMin" value={ageMin !== 0 && ageMin} placeholder="Min. Age" className="form-control" min={18} max={99} onChange={onChange} disabled={disabled} required />
                        </div>
                        <div className="col-sm-4 col-6">
                            <input type="number" name="ageMax" value={ageMax !== 200 && ageMax} max={100} placeholder="Max. Age" className="form-control" min={parseInt(ageMin) + 1} onChange={onChange} disabled={disabled} required />
                        </div>
                    </div>
                    <div className="form-group row my-2">
                        <label className="col-sm-4 col-form-label">Height Range (cm):</label>
                        <div className="col-sm-4 col-6">
                            <input type="number" placeholder="Min. Height (cm)" name="height_min" value={height_min !== 1 && height_min} className="form-control" min={90} max={214} onChange={onChange} disabled={disabled} required />
                        </div>
                        <div className="col-sm-4 col-6">
                            <input type="number" placeholder="Max. Height (cm)" name="height_max" value={height_max !== 2 && height_max} className="form-control" min={parseInt(height_min) + 1} max={215} onChange={onChange} disabled={disabled} required />
                        </div>
                    </div>
                    <div className="form-group row my-2">
                        <label className="col-sm-4 col-form-label">Marital Status:</label>
                        <div className="col-sm-8">
                            <select className="form-control" name="marital_status" onChange={onChange} value={marital_status} disabled={disabled} required>
                                <option value="" disabled>Select</option>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="shundori">Shundori</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                            <i style={{
                                float: 'right',
                                marginRight: '6px',
                                marginTop: '-28px',
                                position: 'relative',
                                zIndex: 2,
                                color: 'red',
                            }} className="fa fa-caret-down" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="form-group row my-2">
                        <label className="col-sm-4 col-form-label">Body Complexsion:</label>
                        <div className="col-sm-8">
                            <select className="form-control" name="body_complexion" onChange={onChange} value={body_complexion} disabled={disabled} required>
                                <option value="" disabled>Select</option>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="shundori">Shundori</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                            <i style={{
                                float: 'right',
                                marginRight: '6px',
                                marginTop: '-28px',
                                position: 'relative',
                                zIndex: 2,
                                color: 'red',
                            }} className="fa fa-caret-down" aria-hidden="true"></i>
                        </div>
                    </div>
                    {/* ----- */}
                    <div className="form-group row my-2">
                        <label className="col-sm-4 col-form-label">Ethnicity:</label>
                        <div className="col-sm-8">
                            <select className="form-control" name="ethnicity" onChange={onChange} value={ethnicity} disabled={disabled} required>
                                <option value="" disabled>Select</option>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="shundori">Shundori</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                            <i style={{
                                float: 'right',
                                marginRight: '6px',
                                marginTop: '-28px',
                                position: 'relative',
                                zIndex: 2,
                                color: 'red',
                            }} className="fa fa-caret-down" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="form-group row my-2">
                        <label className="col-sm-4 col-form-label">Religion:</label>
                        <div className="col-sm-8">
                            <select className="form-control" name="relegion" onChange={onChange} value={relegion} disabled={disabled} required>
                                <option value="" disabled>Select</option>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="shundori">Shundori</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                            <i style={{
                                float: 'right',
                                marginRight: '6px',
                                marginTop: '-28px',
                                position: 'relative',
                                zIndex: 2,
                                color: 'red',
                            }} className="fa fa-caret-down" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="form-group row my-2">
                        <label className="col-sm-4 col-form-label">Education:</label>
                        <div className="col-sm-8">
                            <select className="form-control" name="education" onChange={onChange} value={education} disabled={disabled} required>
                                <option value="" disabled>Select</option>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="shundori">Shundori</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                            <i style={{
                                float: 'right',
                                marginRight: '6px',
                                marginTop: '-28px',
                                position: 'relative',
                                zIndex: 2,
                                color: 'red',
                            }} className="fa fa-caret-down" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="form-group row my-2">
                        <label className="col-sm-4 col-form-label">Profession:</label>
                        <div className="col-sm-8">
                            <select className="form-control" name="profession" onChange={onChange} value={profession} disabled={disabled} required>
                                <option value="" disabled>Select</option>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="shundori">Shundori</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                            <i style={{
                                float: 'right',
                                marginRight: '6px',
                                marginTop: '-28px',
                                position: 'relative',
                                zIndex: 2,
                                color: 'red',
                            }} className="fa fa-caret-down" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="form-group row my-2">
                        <label className="col-sm-4 col-form-label">Native Language:</label>
                        <div className="col-sm-8">
                            <select className="form-control" name="native_language" onChange={onChange} value={native_language} disabled={disabled} required>
                                <option value="" disabled>Select</option>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="shundori">Shundori</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                            <i style={{
                                float: 'right',
                                marginRight: '6px',
                                marginTop: '-28px',
                                position: 'relative',
                                zIndex: 2,
                                color: 'red',
                            }} className="fa fa-caret-down" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="form-group row my-2">
                        <label className="col-sm-4 col-form-label">City of Living:</label>
                        <div className="col-sm-8">
                            <input type="text" name="city_of_living" value={city_of_living} className="form-control" onChange={onChange} disabled={disabled} required />
                        </div>
                    </div>
                    <div className="form-group row my-2">
                        <label className="col-sm-4 col-form-label">Country of Living:</label>
                        <div className="col-sm-8">
                            <select className="form-control" name="country_of_living" onChange={onChange} value={country_of_living} disabled={disabled} required>
                                <option value="" disabled>Select</option>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="shundori">Shundori</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                            <i style={{
                                float: 'right',
                                marginRight: '6px',
                                marginTop: '-28px',
                                position: 'relative',
                                zIndex: 2,
                                color: 'red',
                            }} className="fa fa-caret-down" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="form-group row my-2">
                        <label className="col-sm-4 col-form-label">Country of Origin:</label>
                        <div className="col-sm-8">
                            <select className="form-control" name="country_of_origin" onChange={onChange} value={country_of_origin} disabled={disabled} required>
                                <option value="" disabled>Select</option>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="shundori">Shundori</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                            <i style={{
                                float: 'right',
                                marginRight: '6px',
                                marginTop: '-28px',
                                position: 'relative',
                                zIndex: 2,
                                color: 'red',
                            }} className="fa fa-caret-down" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mb-2">Submit</button>
            </div>
        </form >
    )
}

export default MatchPreferences