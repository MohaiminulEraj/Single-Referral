import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { FaUser } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import ButtonLoader from '../layout/ButtonLoader'
import styles from '@/styles/AuthForm.module.css'
// import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link'
// import Image from 'next/image'

const EditMemberProfile = () => {
    // const dispatch = useDispatch()
    const router = useRouter()
    const [user, setUser] = useState({
        conclusion_word_count: 0,
        update_user_id: '',
        email: '',
        userID: '',
        first_name: '',
        last_name: '',
        cell_no: '',
        phone_no: '',
        current_address: '',
        zip_or_postal_code: '',
        create_by: '',
        gender: '',
        looking_for: '',
        intention: '',
        registering_for: '',
        age: '',
        height_fit: '',
        height_inch: '',
        marital_status: '',
        want_children: '',
        have_children: '',
        have_pets: '',
        best_interest: '',
        favorite_music: '',
        favorite_music_value: '',
        favorite_music_value_show: false,
        body_type: '',
        body_complexion: '',
        eye_color: '',
        hair_color: '',
        personality: '',
        disabilities: '',
        diabetics: '',
        physical_illness: '',
        blood_group: '',
        ethnicity: '',
        star_sign: '',
        religion: '',
        religion_value: '',
        religion_value_show: false,
        sect: '',
        sect_value: '',
        sect_value_show: false,
        religiousness: '',
        practice_of_prayer: '',
        drug_habit: '',
        food_habit: '',
        food_habit_value: '',
        food_habit_value_show: false,
        drink: '',
        smoke: '',
        education: '',
        education_value: '',
        education_value_show: false,
        subject_studied: '',
        subject_studied_value: '',
        subject_studied_value_show: false,
        employment_type: '',
        profession: '',
        profession_value: '',
        profession_value_show: false,
        family_status: '',
        family_size: '',
        living_status: '',
        living_status_value: '',
        living_status_value_show: false,
        living_at: '',
        living_at_value: '',
        living_at_value_show: false,
        have_a_car: '',
        relocation: '',
        native_language: '',
        native_language_value: '',
        native_language_value_show: false,
        second_language: '',
        second_language_value: '',
        second_language_value_show: false,
        country_of_origin: '',
        country_of_living: '',
        region: '',
        city: '',
        citizenship: '',
        citizenship_value: '',
        citizenship_value_show: false,
        online_availabe_day_mon: false,
        online_availabe_day_tues: false,
        online_availabe_day_wed: false,
        online_availabe_day_thurs: false,
        online_availabe_day_fri: false,
        online_availabe_day_sat: false,
        online_availabe_day_sun: false,
        online_availability_from_time: '',
        online_availability_to_time: '',
        conclusion_about_me: '',
        browse_one_selfie_path: null,
        browse_two_image_path: null,
        browse_three_image_path: null,
        browse_four_image_path: null,
        browse_five_image_path: null,
        browse_six_image_path: null,
        browse_seven_image_path: null,
        browse_eight_image_path: null,
        redirectToReferrer: false,
        message: '',
        messageDisplay: false,
        message_class: '',
        required_field: false,
        countries_dropdown: [], //set all countries dropdown
        dropdown_parameter: [], //set all dropdown parameter
    })
    const {
        conclusion_word_count,
        update_user_id,
        email,
        userID,
        first_name,
        last_name,
        cell_no,
        phone_no,
        current_address,
        zip_or_postal_code,
        create_by,
        gender,
        looking_for,
        intention,
        registering_for,
        age,
        height_fit,
        height_inch,
        marital_status,
        want_children,
        have_children,
        have_pets,
        best_interest,
        favorite_music,
        favorite_music_value,
        favorite_music_value_show,
        body_type,
        body_complexion,
        eye_color,
        hair_color,
        personality,
        disabilities,
        diabetics,
        physical_illness,
        blood_group,
        ethnicity,
        star_sign,
        religion,
        religion_value,
        religion_value_show,
        sect,
        sect_value,
        sect_value_show,
        religiousness,
        practice_of_prayer,
        drug_habit,
        food_habit,
        food_habit_value,
        food_habit_value_show,
        drink,
        smoke,
        education,
        education_value,
        education_value_show,
        subject_studied,
        subject_studied_value,
        subject_studied_value_show,
        employment_type,
        profession,
        profession_value,
        profession_value_show,
        family_status,
        family_size,
        living_status,
        living_status_value,
        living_status_value_show,
        living_at,
        living_at_value,
        living_at_value_show,
        have_a_car,
        relocation,
        native_language,
        native_language_value,
        native_language_value_show,
        second_language,
        second_language_value,
        second_language_value_show,
        country_of_origin,
        country_of_living,
        region,
        city,
        citizenship,
        citizenship_value,
        citizenship_value_show,
        online_availabe_day_mon,
        online_availabe_day_tues,
        online_availabe_day_wed,
        online_availabe_day_thurs,
        online_availabe_day_fri,
        online_availabe_day_sat,
        online_availabe_day_sun,
        online_availability_from_time,
        online_availability_to_time,
        conclusion_about_me,
        browse_one_selfie_path,
        browse_two_image_path,
        browse_three_image_path,
        browse_four_image_path,
        browse_five_image_path,
        browse_six_image_path,
        browse_seven_image_path,
        browse_eight_image_path,
        redirectToReferrer,
        message,
        messageDisplay,
        message_class,
        required_field,
        countries_dropdown,
        dropdown_parameter,
    } = user

    // const [avatar, setAvatar] = useState('/images/default_avatar.jpg');
    // const [avatarPrevew, setAvatarPrevew] = useState('/images/default_avatar.jpg');
    // const { success, error, loading } = useSelector(state => state.auth)

    // useEffect(() => {

    //     if (success) {
    //         router.push('/account/login')
    //     }

    //     if (error) {
    //         toast.error(error);
    //         dispatch(clearErrors())
    //     }

    // }, [dispatch, success, error])

    // const [fullname, setFullname] = useState('')
    // const [username, setUsername] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        // setLoading(true);
        if (password !== passwordConfirm) {
            toast.error('Password do not match!')
            return;
        }
        const userData = {
            fullname, username, email, password
        }
        dispatch(registerUser(userData))
    }

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="app-main" id="main">
                <form onSubmit={onSubmit} method="post">
                    {/* begin container-fluid */}
                    <div className="container-fluid">
                        <div className="row tabs-contant">
                            <div className="col-lg-12 mb-30">
                                <div className="card card-statistics">
                                    <div className="card-header">
                                        <div className="card-heading">
                                            <h4 className="card-title"> Edit Profile</h4>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <input type="hidden" disabled value={userID} name="userID" className="form-control" id="userID" />
                                            <div className="form-group col-md-4">
                                                <label className="text-dark">First Name*</label>
                                                <input type="text"
                                                    name="first_name" className="form-control"
                                                    id="first_name"
                                                    placeholder="First Name" onChange={onChange}
                                                    value={first_name}
                                                    required={required_field} maxLength="255" />
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label className="text-dark">Last Name*</label>
                                                <input type="text" name="last_name" className="form-control"
                                                    id="last_name" placeholder="Last Name" onChange={onChange}
                                                    value={last_name}
                                                    required={required_field} maxLength="255" />
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label className="text-dark">Cell no*</label>
                                                <input type="text"
                                                    name="cell_no"
                                                    className="form-control"
                                                    id="cell_no" placeholder="Cell no"
                                                    onChange={onChange}
                                                    value={cell_no}
                                                    required={required_field} maxLength="30" />
                                            </div>
                                            <div className="form-group col-md-4 col-4">
                                                <label className="text-dark">Phone No*</label>
                                                <input type="text" name="phone_no" className="form-control" id="phone_no" placeholder="Phone No" onChange={onChange}
                                                    value={phone_no}
                                                    required={required_field} maxLength="30" />
                                            </div>
                                            <div className="form-group col-md-8 col-4">
                                                <label className="text-dark">Current Address*</label>
                                                <input type="text" name="current_address" className="form-control" id="current_address" placeholder="Current Address" onChange={onChange} value={current_address} required={required_field} maxLength="255" />
                                            </div>
                                            <div className="form-group col-md-4 col-4">
                                                <label className="text-dark"> Zip / Postal Code*</label>
                                                <input type="text" name="zip_or_postal_code" className="form-control" id="zip_or_postal_code" placeholder="Zip / Postal Code" onChange={onChange} value={zip_or_postal_code} required={required_field} maxLength="50" />
                                            </div>
                                            <div className="form-group col-md-4 col-lg-4 ">
                                                <label htmlFor="inputState" className="text-dark">Profile Create*</label>
                                                <select id="create_by"
                                                    name="create_by"
                                                    className="form-control"
                                                    onChange={onChange}
                                                    value={create_by}
                                                    required={required_field}>
                                                    <option value=''>--Select--</option>
                                                    {
                                                        dropdown_parameter.map((data) =>
                                                        (
                                                            data.for_customer === '1' && data.type === "profile_create_and_operated_by" ?
                                                                <option key={data.parameter_id} value={data.parameter_id} >{data.title}</option> : ''
                                                        )
                                                        )
                                                    }
                                                </select>
                                            </div>
                                            <div className="form-group col-md-4 col-lg-4 ">
                                                <label htmlFor="inputState" className="text-dark">Gender*</label>
                                                <select id="gender" className="form-control"
                                                    name="gender"
                                                    value={gender}
                                                    onChange={onChange}
                                                    required={required_field}>
                                                    <option value="">-- Select --</option>
                                                    {
                                                        dropdown_parameter.map((data) =>
                                                        (
                                                            data.for_customer === '1' && data.type === "gender" ?
                                                                <option key={data.parameter_id} value={data.parameter_id} >{data.title}</option> : ''
                                                        )
                                                        )
                                                    }
                                                </select>
                                            </div>
                                            <div className="form-group col-md-4 col-lg-4 col-12">
                                                <label htmlFor="inputState" className="text-dark">Looking For*</label>
                                                <select
                                                    id="looking_for"
                                                    className="form-control"
                                                    name="looking_for"
                                                    onChange={onChange}
                                                    value={looking_for}
                                                    required={required_field}
                                                >
                                                    <option value="">-- Select --</option>
                                                    {
                                                        dropdown_parameter.map((data) =>
                                                        (
                                                            data.for_customer === '1' && data.type === "looking_for" ?
                                                                <option key={data.parameter_id} value={data.parameter_id} >{data.title}</option> : ''
                                                        )
                                                        )
                                                    }

                                                </select>
                                            </div>
                                            <div className="form-group col-md-4 col-lg-4 col-12">
                                                <label htmlFor="inputState" className="text-dark">Intention*</label>
                                                <select
                                                    id="intention"
                                                    name="intention"
                                                    onChange={onChange}
                                                    value={intention}
                                                    className="form-control"
                                                    required={required_field}
                                                >
                                                    <option value="">-- Select --</option>
                                                    {
                                                        dropdown_parameter.map((data) =>
                                                        (
                                                            data.for_customer === '1' && data.type === "intention" ?
                                                                <option key={data.parameter_id} value={data.parameter_id} >{data.title}</option> : ''
                                                        )
                                                        )
                                                    }
                                                </select>
                                            </div>
                                            <div className="form-group col-md-4 col-lg-4 col-12">
                                                <label htmlFor="inputState" className="text-dark">Registering For*</label>
                                                <select
                                                    id="registering_for"
                                                    name="registering_for"
                                                    onChange={onChange}
                                                    value={registering_for}
                                                    className="form-control"
                                                    required={required_field}
                                                >
                                                    <option value="">-- Select --</option>
                                                    {
                                                        dropdown_parameter.map((data) =>
                                                        (
                                                            data.for_customer === '1' && data.type === "registering_for" ?
                                                                <option key={data.parameter_id} value={data.parameter_id} >{data.title}</option> : ''
                                                        )
                                                        )
                                                    }
                                                </select>
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label htmlFor="forage" className="text-dark">Age*</label>
                                                <input type="number" name="age" className="form-control" id="age" placeholder="age"
                                                    onChange={onChange}
                                                    value={age} required={required_field} min="18"
                                                    readOnly />
                                            </div>
                                            <div className="form-group col-md-2">
                                                <label htmlFor="forage" className="text-dark">Height fit*</label>
                                                <input type="number"
                                                    className="form-control" id="height_fit" name="height_fit"
                                                    placeholder="Example : 4, 5, 0"
                                                    onChange={onChange}
                                                    value={height_fit}
                                                    required={required_field} min="1" />
                                            </div>
                                            <div className="form-group col-md-2">
                                                <label htmlFor="forage" className="text-dark">Height inch*</label>
                                                <input type="number" className="form-control" id="height_inch" name="height_inch" placeholder="Example : 4, 5, 0"
                                                    onChange={onChange}
                                                    value={height_inch}
                                                    required={required_field} min="0" />
                                            </div>
                                            <div className="form-group col-md-4 col-lg-4 col-12">
                                                <label htmlFor="inputState" className="text-dark">Marital Status*</label>
                                                <select
                                                    id="marital_status"
                                                    name="marital_status"
                                                    onChange={onChange}
                                                    className="form-control"
                                                    value={marital_status}
                                                    required={required_field}
                                                >
                                                    <option value="">-- Select --</option>
                                                    {
                                                        dropdown_parameter.map((data) =>
                                                        (
                                                            data.for_customer === '1' && data.type === "marital_status" ?
                                                                <option key={data.parameter_id} value={data.parameter_id} >{data.title}</option> : ''
                                                        )
                                                        )
                                                    }
                                                </select>
                                            </div>
                                            <div className="form-group col-md-4 col-lg-4 col-12">
                                                <label htmlFor="inputState" className="text-dark">Want Children*</label>
                                                <select
                                                    id="want_children"
                                                    name="want_children"
                                                    onChange={onChange}
                                                    className="form-control"
                                                    value={want_children}
                                                    required={required_field}
                                                >
                                                    <option value="">-- Select --</option>
                                                    {
                                                        dropdown_parameter.map((data) =>
                                                        (
                                                            data.for_customer === '1' && data.type === "want_children" ?
                                                                <option key={data.parameter_id} value={data.parameter_id} >{data.title}</option> : ''
                                                        )
                                                        )
                                                    }
                                                </select>
                                            </div>
                                            <div className="form-group col-md-4 col-lg-4 col-12">
                                                <label htmlFor="inputState" className="text-dark">Have Children*</label>
                                                <select
                                                    id="have_children"
                                                    name="have_children"
                                                    onChange={onChange}
                                                    className="form-control"
                                                    value={have_children}
                                                    required={required_field}
                                                >
                                                    <option value="">-- Select --</option>
                                                    {
                                                        dropdown_parameter.map((data) =>
                                                        (
                                                            data.for_customer === '1' && data.type === "have_children" ?
                                                                <option key={data.parameter_id} value={data.parameter_id} >{data.title}</option> : ''
                                                        )
                                                        )
                                                    }
                                                </select>
                                            </div>
                                            <div className="form-group col-md-4 col-lg-4 col-12">
                                                <label htmlFor="inputState" className="text-dark">Have Pets*</label>
                                                <select
                                                    id="have_pets"
                                                    name="have_pets"
                                                    onChange={onChange}
                                                    value={have_pets}
                                                    className="form-control"
                                                    required={required_field}
                                                >
                                                    <option value="">-- Select --</option>
                                                    {
                                                        dropdown_parameter.map((data) =>
                                                        (
                                                            data.for_customer === '1' && data.type === "have_pets" ?
                                                                <option key={data.parameter_id} value={data.parameter_id} >{data.title}</option> : ''
                                                        )
                                                        )
                                                    }
                                                </select>
                                            </div>

                                            <div className="form-group col-md-4 col-lg-4 col-12">
                                                <label htmlFor="inputState" className="text-dark">Best Interest*</label>
                                                <select
                                                    id="best_interest"
                                                    name="best_interest"
                                                    onChange={onChange}
                                                    value={best_interest}
                                                    className="form-control"
                                                    required={required_field}
                                                >
                                                    <option value="">-- Select --</option>
                                                    {
                                                        dropdown_parameter.map((data) =>
                                                        (
                                                            data.for_customer === '1' && data.type === "best_interest" ?
                                                                <option key={data.parameter_id} value={data.parameter_id} >{data.title}</option> : ''
                                                        )
                                                        )
                                                    }
                                                </select>
                                            </div>
                                            <div className="form-group col-md-4 col-lg-4 col-12">
                                                <label htmlFor="inputState" className="text-dark">Favorite Music*</label>
                                                <select
                                                    id="favorite_music"
                                                    name="favorite_music"
                                                    onChange={e => { onChange(e); onfavoritemusicShow(e) }}
                                                    value={favorite_music}
                                                    className="form-control"
                                                    required={required_field}
                                                >
                                                    <option value="">-- Select --</option>
                                                    {
                                                        dropdown_parameter.map((data) =>
                                                        (
                                                            data.for_customer === '1' && data.type === "favorite_music" ?
                                                                <option key={data.parameter_id} value={data.parameter_id} >{data.title}</option> : ''
                                                        )
                                                        )
                                                    }
                                                    <option value="0" >Others (Specify Please)</option>
                                                </select>
                                            </div>
                                            <div className={favorite_music_value_show ? "form-group col-md-4" : "hidden"} >
                                                <label htmlFor="" className="text-dark">Enter Favorite Music*</label>
                                                <input type="text"
                                                    name="favorite_music_value" className="form-control" id="favorite_music_value"
                                                    placeholder="Favorite Music" onChange={onChange}
                                                    value={favorite_music_value}
                                                    required={favorite_music_value_show ? true : false} />
                                            </div>
                                            <div className="form-group col-md-4 col-lg-4 col-12">
                                                <label htmlFor="inputState">Body Type*</label>
                                                <select
                                                    id="body_type"
                                                    name="body_type"
                                                    onChange={onChange}
                                                    value={body_type}
                                                    className="form-control"
                                                    required={required_field}
                                                >
                                                    <option value="">-- Select --</option>
                                                    {
                                                        dropdown_parameter.map((data) =>
                                                        (
                                                            data.for_customer === '1' && data.type === "body_type" ?
                                                                <option key={data.parameter_id} value={data.parameter_id} >{data.title}</option> : ''
                                                        )
                                                        )
                                                    }
                                                </select>
                                            </div>
                                            <div className="form-group col-md-4 col-lg-4 col-12">
                                                <label htmlFor="inputState" className="text-dark">Body Complexion *</label>
                                                <select
                                                    id="body_complexion"
                                                    name="body_complexion"
                                                    onChange={onChange}
                                                    value={body_complexion}
                                                    className="form-control"
                                                    required={required_field}
                                                >
                                                    <option value="">-- Select --</option>
                                                    {
                                                        dropdown_parameter.map((data) =>
                                                        (
                                                            data.for_customer === '1' && data.type === "body_complexion" ?
                                                                <option key={data.parameter_id} value={data.parameter_id} >{data.title}</option> : ''
                                                        )
                                                        )
                                                    }
                                                </select>
                                            </div>
                                            {/* </div> row end */}

                                            {/* <div className="form-row"> */}
                                            <div className="form-group col-md-4 col-lg-4 col-12">
                                                <label htmlFor="inputState" className="text-dark">Eye Color*</label>
                                                <select
                                                    id="eye_color"
                                                    name="eye_color"
                                                    onChange={onChange}
                                                    value={eye_color}
                                                    className="form-control"
                                                    required={required_field}
                                                >
                                                    <option value="">-- Select --</option>
                                                    {
                                                        dropdown_parameter.map((data) =>
                                                        (
                                                            data.for_customer === '1' && data.type === "eye_color" ?
                                                                <option key={data.parameter_id} value={data.parameter_id} >{data.title}</option> : ''
                                                        )
                                                        )
                                                    }
                                                </select>
                                            </div>
                                            <div className="form-group col-md-4 col-lg-4 col-12">
                                                <label htmlFor="inputState" className="text-dark">Hair Color*</label>
                                                <select
                                                    id="hair_color"
                                                    name="hair_color"
                                                    onChange={onChange}
                                                    value={hair_color}
                                                    className="form-control"
                                                    required={required_field}
                                                >
                                                    <option value="">-- Select --</option>
                                                    {
                                                        dropdown_parameter.map((data) =>
                                                        (
                                                            data.for_customer === '1' && data.type === "hair_color" ?
                                                                <option key={data.parameter_id} value={data.parameter_id} >{data.title}</option> : ''
                                                        )
                                                        )
                                                    }
                                                </select>
                                            </div>
                                            <div className="form-group col-md-4 col-lg-4 col-12">
                                                <label htmlFor="inputState" className="text-dark">Personality*</label>
                                                <select
                                                    id="personality"
                                                    name="personality"
                                                    onChange={onChange}
                                                    value={personality}
                                                    className="form-control"
                                                    required={required_field}
                                                >
                                                    <option value="">-- Select --</option>
                                                    {
                                                        dropdown_parameter.map((data) =>
                                                        (
                                                            data.for_customer === '1' && data.type === "personality" ?
                                                                <option key={data.parameter_id} value={data.parameter_id} >{data.title}</option> : ''
                                                        )
                                                        )
                                                    }
                                                </select>
                                            </div>
                                            {/* </div>row end */}
                                            {/* <div className="form-row"> */}
                                            <div className="form-group col-md-4 col-lg-4 col-12">
                                                <label htmlFor="inputState" className="text-dark">Disabilities*</label>
                                                <select
                                                    id="disabilities"
                                                    name="disabilities"
                                                    onChange={onChange}
                                                    value={disabilities}
                                                    className="form-control"
                                                    required={required_field}
                                                >
                                                    <option value="">-- Select --</option>
                                                    {
                                                        dropdown_parameter.map((data) =>
                                                        (
                                                            data.for_customer === '1' && data.type === "disabilities" ?
                                                                <option key={data.parameter_id} value={data.parameter_id} >{data.title}</option> : ''
                                                        )
                                                        )
                                                    }
                                                </select>
                                            </div>

                                            <div className="form-group col-md-4 col-lg-4 col-12">
                                                <label htmlFor="inputState" className="text-dark">Diabetics*</label>
                                                <select
                                                    id="diabetics"
                                                    name="diabetics"
                                                    onChange={onChange}
                                                    value={diabetics}
                                                    className="form-control"
                                                    required={required_field}
                                                >
                                                    <option value="">-- Select --</option>
                                                    {
                                                        dropdown_parameter.map((data) =>
                                                        (
                                                            data.for_customer === '1' && data.type === "diabetics" ?
                                                                <option key={data.parameter_id} value={data.parameter_id} >{data.title}</option> : ''
                                                        )
                                                        )
                                                    }
                                                </select>
                                            </div>
                                            <div className="form-group col-md-4 col-lg-4 col-12">
                                                <label htmlFor="inputState" className="text-dark">Physical illness*</label>
                                                <select
                                                    id="physical_illness"
                                                    name="physical_illness"
                                                    onChange={onChange}
                                                    value={physical_illness}
                                                    className="form-control"
                                                    required={required_field}
                                                >
                                                    <option value="">-- Select --</option>
                                                    {
                                                        dropdown_parameter.map((data) =>
                                                        (
                                                            data.for_customer === '1' && data.type === "physical_illness" ?
                                                                <option key={data.parameter_id} value={data.parameter_id} >{data.title}</option> : ''
                                                        )
                                                        )
                                                    }
                                                </select>
                                            </div>
                                            {/* </div> row end */}
                                            {/* <div className="form-row"> */}
                                            <div className="form-group col-md-4 col-lg-4 col-12">
                                                <label htmlFor="inputState" className="text-dark">Blood Group*</label>
                                                <select
                                                    id="blood_group"
                                                    name="blood_group"
                                                    onChange={onChange}
                                                    value={blood_group}
                                                    className="form-control"
                                                    required={required_field}
                                                >
                                                    <option value="">-- Select --</option>
                                                    {
                                                        dropdown_parameter.map((data) =>
                                                        (
                                                            data.for_customer === '1' && data.type === "blood_group" ?
                                                                <option key={data.parameter_id} value={data.parameter_id} >{data.title}</option> : ''
                                                        )
                                                        )
                                                    }
                                                </select>
                                            </div>

                                            <div className="form-group col-md-4 col-lg-4 col-12">
                                                <label htmlFor="inputState" className="text-dark">Ethnicity*</label>
                                                <select
                                                    id="ethnicity"
                                                    name="ethnicity"
                                                    onChange={onChange}
                                                    value={ethnicity}
                                                    className="form-control"
                                                    required={required_field}
                                                >
                                                    <option value="">-- Select --</option>
                                                    {
                                                        dropdown_parameter.map((data) =>
                                                        (
                                                            data.for_customer === '1' && data.type === "ethnicity" ?
                                                                <option key={data.parameter_id} value={data.parameter_id} >{data.title}</option> : ''
                                                        )
                                                        )
                                                    }
                                                </select>
                                            </div>

                                            <div className="form-group col-md-4 col-lg-4 col-12">
                                                <label htmlFor="inputState" className="text-dark">Star Sign*</label>
                                                <select
                                                    id="star_sign"
                                                    name="star_sign"
                                                    onChange={onChange}
                                                    value={star_sign}
                                                    className="form-control"
                                                    required={required_field}
                                                >
                                                    <option value="">-- Select --</option>
                                                    {
                                                        dropdown_parameter.map((data) =>
                                                        (
                                                            data.for_customer === '1' && data.type === "star_sign" ?
                                                                <option key={data.parameter_id} value={data.parameter_id} >{data.title}</option> : ''
                                                        )
                                                        )
                                                    }
                                                </select>
                                            </div>
                                            {/* </div> row end */}
                                            {/* <div className="form-row"> */}
                                            <div className="form-group col-md-4 col-lg-4 col-12">
                                                <label htmlFor="inputState" className="text-dark">Select Religion*</label>
                                                <select
                                                    id="religion"
                                                    name="religion"
                                                    onChange={e => { onChange(e); onreligionShow(e) }}
                                                    value={religion}
                                                    className="form-control"
                                                    required={required_field}
                                                >
                                                    <option value="">-- Select --</option>
                                                    {
                                                        dropdown_parameter.map((data) =>
                                                        (
                                                            data.for_customer === '1' && data.type === "religion" ?
                                                                <option key={data.parameter_id} value={data.parameter_id} >{data.title}</option> : ''
                                                        )
                                                        )
                                                    }
                                                    <option value="0" >Others (Please Specify)</option>
                                                </select>
                                            </div>
                                            <div className={religion_value_show ? "form-group col-md-4" : "hidden"} >
                                                <label htmlFor="forrelationenter" className="text-dark">Enter Religion*</label>
                                                <input type="text"
                                                    name="religion_value" className="form-control"
                                                    id="religion_value"
                                                    placeholder="Enter Religion"
                                                    onChange={onChange}
                                                    value={religion_value}
                                                    required={religion_value_show ? true : false} />
                                            </div>

                                            <div className="form-group col-md-4 col-lg-4 col-12">
                                                <label htmlFor="inputState" className="text-dark">Sect*</label>
                                                <select
                                                    id="sect"
                                                    name="sect"
                                                    onChange={e => { onChange(e); onsectShow(e) }}
                                                    className="form-control"
                                                    value={sect}
                                                    required={required_field}
                                                >
                                                    <option value="">-- Select --</option>
                                                    {
                                                        dropdown_parameter.map((data) =>
                                                        (
                                                            data.for_customer === '1' && data.type === "sect" ?
                                                                <option key={data.parameter_id} value={data.parameter_id} >{data.title}</option> : ''
                                                        )
                                                        )
                                                    }
                                                    <option value="0" >Others (Please Specify)</option>
                                                </select>
                                            </div>
                                            <div className={sect_value_show ? "form-group col-md-4" : "hidden"} >
                                                <label htmlFor="forentersect" className="text-dark">Enter Sect*</label>
                                                <input type="text"
                                                    name="sect_value" className="form-control" id="sect_value" placeholder="Enter Sect"
                                                    onChange={onChange}
                                                    value={sect_value}
                                                    required={sect_value_show ? true : false} />
                                            </div>
                                            <div className="form-group col-md-4 col-lg-4 col-12">
                                                <label htmlFor="inputState" className="text-dark">Religiousness*</label>
                                                <select
                                                    id="religiousness"
                                                    name="religiousness"
                                                    onChange={onChange}
                                                    value={religiousness}
                                                    className="form-control"
                                                    required={required_field}
                                                >
                                                    <option value="">-- Select --</option>
                                                    {
                                                        dropdown_parameter.map((data) =>
                                                        (
                                                            data.for_customer === '1' && data.type === "religiousness" ?
                                                                <option key={data.parameter_id} value={data.parameter_id} >{data.title}</option> : ''
                                                        )
                                                        )
                                                    }
                                                </select>
                                            </div>
                                            {/* </div> row end */}
                                            {/* <div className="form-row"> */}
                                            <div className="form-group col-md-4 col-lg-4 col-12">
                                                <label htmlFor="inputState" className="text-dark">Practice of Prayer  *</label>
                                                <select
                                                    id="practice_of_prayer"
                                                    name="practice_of_prayer"
                                                    onChange={onChange}
                                                    value={practice_of_prayer}
                                                    className="form-control"
                                                    required={required_field}
                                                >
                                                    <option value="">-- Select --</option>
                                                    {
                                                        dropdown_parameter.map((data) =>
                                                        (
                                                            data.for_customer === '1' && data.type === "practice_of_prayer" ?
                                                                <option key={data.parameter_id} value={data.parameter_id} >{data.title}</option> : ''
                                                        )
                                                        )
                                                    }
                                                </select>
                                            </div>
                                            <div className="form-group col-md-4 col-lg-4 col-12">
                                                <label htmlFor="inputState" className="text-dark">Drug Habit*</label>
                                                <select
                                                    id="drug_habit"
                                                    name="drug_habit"
                                                    onChange={onChange}
                                                    value={drug_habit}
                                                    className="form-control"
                                                    required={required_field}
                                                >
                                                    <option value="">-- Select --</option>
                                                    {
                                                        dropdown_parameter.map((data) =>
                                                        (
                                                            data.for_customer === '1' && data.type === "drug_habit" ?
                                                                <option key={data.parameter_id} value={data.parameter_id} >{data.title}</option> : ''
                                                        )
                                                        )
                                                    }
                                                </select>
                                            </div>

                                            <div className="form-group col-md-4 col-lg-4 col-12">
                                                <label htmlFor="inputState" className="text-dark">Food Habit  *</label>
                                                <select
                                                    id="food_habit"
                                                    name="food_habit"
                                                    onChange={e => { onChange(e); onfoodhabitShow(e) }}
                                                    className="form-control"
                                                    value={food_habit}
                                                    required={required_field}
                                                >
                                                    <option value="">-- Select --</option>
                                                    {
                                                        dropdown_parameter.map((data) =>
                                                        (
                                                            data.for_customer === '1' && data.type === "food_habit" ?
                                                                <option key={data.parameter_id} value={data.parameter_id} >{data.title}</option> : ''
                                                        )
                                                        )
                                                    }
                                                    <option value="0" >Others (Please Specify)</option>
                                                </select>
                                            </div>
                                            <div className={food_habit_value_show ? "form-group col-md-4" : "hidden"} >
                                                <label htmlFor="forenterfoodhabit" className="text-dark">Enter Food Habit*</label>
                                                <input type="text"
                                                    name="food_habit_value" className="form-control" id="food_habit_value"
                                                    placeholder="Enter Food Habit"
                                                    onChange={onChange}
                                                    value={food_habit_value}
                                                    required={food_habit_value_show ? true : false} />
                                            </div>
                                            {/* </div>row end */}
                                            {/* <div className="form-row"> */}
                                            <div className="form-group col-md-4 col-lg-4 col-12">
                                                <label htmlFor="inputState" className="text-dark">Drink*</label>
                                                <select
                                                    id="drink"
                                                    name="drink"
                                                    onChange={onChange}
                                                    value={drink}
                                                    className="form-control"
                                                    required={required_field}
                                                >
                                                    <option value="">-- Select --</option>
                                                    {
                                                        dropdown_parameter.map((data) =>
                                                        (
                                                            data.for_customer === '1' && data.type === "drink" ?
                                                                <option key={data.parameter_id} value={data.parameter_id} >{data.title}</option> : ''
                                                        )
                                                        )
                                                    }
                                                </select>
                                            </div>
                                            <div className="form-group col-md-4 col-lg-4 col-12">
                                                <label htmlFor="inputState" className="text-dark">Smoke*</label>
                                                <select
                                                    id="smoke"
                                                    name="smoke"
                                                    onChange={onChange}
                                                    value={smoke}
                                                    className="form-control"
                                                    required={required_field}
                                                >
                                                    <option value="">-- Select --</option>
                                                    {
                                                        dropdown_parameter.map((data) =>
                                                        (
                                                            data.for_customer === '1' && data.type === "smoke" ?
                                                                <option key={data.parameter_id} value={data.parameter_id} >{data.title}</option> : ''
                                                        )
                                                        )
                                                    }
                                                </select>
                                            </div>
                                            <div className="form-group col-md-4 col-lg-4 col-12">
                                                <label htmlFor="inputState" className="text-dark">Education*</label>
                                                <select
                                                    id="education"
                                                    name="education"
                                                    onChange={e => { onChange(e); oneducationShow(e) }}
                                                    value={education}
                                                    className="form-control"
                                                    required={required_field}
                                                >
                                                    <option value="">-- Select --</option>
                                                    {
                                                        dropdown_parameter.map((data) =>
                                                        (
                                                            data.for_customer === '1' && data.type === "education" ?
                                                                <option key={data.parameter_id} value={data.parameter_id} >{data.title}</option> : ''
                                                        )
                                                        )
                                                    }
                                                    <option value="0" >Others (Please Specify)</option>
                                                </select>
                                            </div>
                                            <div className={education_value_show ? "form-group col-md-4" : "hidden"} >
                                                <label htmlFor="forentereducation" className="text-dark">Enter Education*</label>
                                                <input type="text"
                                                    name="education_value" className="form-control"
                                                    id="education_value"
                                                    placeholder="Enter Education"
                                                    onChange={onChange}
                                                    value={education_value} required={education_value_show ? true : false} />
                                            </div>
                                            {/* </div>row end */}
                                            {/* <div className="form-row"> */}
                                            <div className="form-group col-md-4 col-lg-4 col-12">
                                                <label htmlFor="inputState" className="text-dark">Subject Studied*</label>
                                                <select
                                                    id="subject_studied"
                                                    name="subject_studied"
                                                    onChange={e => { onChange(e); onsubjectstudiedShow(e) }}
                                                    className="form-control"
                                                    value={subject_studied}
                                                    required={required_field}
                                                >
                                                    <option value="">-- Select --</option>
                                                    {
                                                        dropdown_parameter.map((data) =>
                                                        (
                                                            data.for_customer === '1' && data.type === "subject_studied" ?
                                                                <option key={data.parameter_id} value={data.parameter_id} >{data.title}</option> : ''
                                                        )
                                                        )
                                                    }
                                                    <option value="0" >Others (Please Specify)</option>
                                                </select>
                                            </div>
                                            <div className={subject_studied_value_show ? "form-group col-md-4" : "hidden"} >
                                                <label htmlFor="forentersubjectstudied" className="text-dark">Enter Subject Studied*</label>
                                                <input type="text"
                                                    name="subject_studied_value" className="form-control" id="subject_studied_value" placeholder="Enter Subject Studied" onChange={onChange}
                                                    value={subject_studied_value} required={subject_studied_value_show ? true : false} />
                                            </div>
                                            <div className="form-group col-md-4 col-lg-4 col-12">
                                                <label htmlFor="inputState" className="text-dark">Employment Type*</label>
                                                <select
                                                    id="employment_type"
                                                    name="employment_type"
                                                    onChange={onChange}
                                                    className="form-control"
                                                    value={employment_type}
                                                    required={required_field}
                                                >
                                                    <option value="">-- Select --</option>
                                                    {
                                                        dropdown_parameter.map((data) =>
                                                        (
                                                            data.for_customer === '1' && data.type === "employment_type" ?
                                                                <option key={data.parameter_id} value={data.parameter_id} >{data.title}</option> : ''
                                                        )
                                                        )
                                                    }
                                                </select>
                                            </div>
                                            <div className="form-group col-md-4 col-lg-4 col-12">
                                                <label htmlFor="inputState" className="text-dark">Profession*</label>
                                                <select
                                                    id="profession"
                                                    name="profession"
                                                    onChange={e => { onChange(e); onprofessionShow(e) }}
                                                    value={profession}
                                                    className="form-control"
                                                    required={required_field}
                                                >
                                                    <option value="">-- Select --</option>
                                                    {
                                                        dropdown_parameter.map((data) =>
                                                        (
                                                            data.for_customer === '1' && data.type === "profession" ?
                                                                <option key={data.parameter_id} value={data.parameter_id} >{data.title}</option> : ''
                                                        )
                                                        )
                                                    }
                                                    <option value="0" >Others (Please Specify)</option>
                                                </select>
                                            </div>
                                            <div className={profession_value_show ? "form-group col-md-4" : "hidden"} >
                                                <label htmlFor="forenterprofession" className="text-dark">Enter Profession*</label>
                                                <input type="text"
                                                    name="profession_value" className="form-control" id="profession_value"
                                                    placeholder="Enter Profession"
                                                    onChange={onChange}
                                                    value={profession_value} required={profession_value_show ? true : false} maxLength="100" />
                                            </div>

                                            {/* </div> row end */}
                                            {/* <div className="form-row"> */}
                                            <div className="form-group col-md-4 col-lg-4 col-12">
                                                <label htmlFor="inputState" className="text-dark">Family Status*</label>
                                                <select
                                                    id="family_status"
                                                    name="family_status"
                                                    onChange={onChange}
                                                    value={family_status}
                                                    className="form-control"
                                                    required={required_field}
                                                >
                                                    <option value="">-- Select --</option>
                                                    {
                                                        dropdown_parameter.map((data) =>
                                                        (
                                                            data.for_customer === '1' && data.type === "family_status" ?
                                                                <option key={data.parameter_id} value={data.parameter_id} >{data.title}</option> : ''
                                                        )
                                                        )
                                                    }
                                                </select>
                                            </div>

                                            <div className="form-group col-md-4 col-lg-4 col-12">
                                                <label htmlFor="inputState" className="text-dark">Family Size*</label>
                                                <select
                                                    id="family_size"
                                                    name="family_size"
                                                    onChange={onChange}
                                                    value={family_size}
                                                    className="form-control"
                                                    required={required_field}
                                                >
                                                    <option value="">-- Select --</option>
                                                    {
                                                        dropdown_parameter.map((data) =>
                                                        (
                                                            data.for_customer === '1' && data.type === "family_size" ?
                                                                <option key={data.parameter_id} value={data.parameter_id} >{data.title}</option> : ''
                                                        )
                                                        )
                                                    }
                                                </select>
                                            </div>
                                            <div className="form-group col-md-4 col-lg-4 col-12">
                                                <label htmlFor="inputState" className="text-dark">Living Status *</label>
                                                <select
                                                    id="living_status"
                                                    name="living_status"
                                                    onChange={e => { onChange(e); onlivingstatusShow(e) }}
                                                    value={living_status}
                                                    className="form-control"
                                                    required={required_field}
                                                >
                                                    <option value="">-- Select --</option>
                                                    {
                                                        dropdown_parameter.map((data) =>
                                                        (
                                                            data.for_customer === '1' && data.type === "living_status" ?
                                                                <option key={data.parameter_id} value={data.parameter_id} >{data.title}</option> : ''
                                                        )
                                                        )
                                                    }
                                                    <option value="0" >Others (Please Specify)</option>
                                                </select>
                                            </div>
                                            <div className={living_status_value_show ? "form-group col-md-4" : "hidden"} >
                                                <label htmlFor="forenterprofession" className="text-dark">Enter Living Status*</label>
                                                <input type="text"
                                                    name="living_status_value" className="form-control" id="living_status_value"
                                                    placeholder="Enter Living Status"
                                                    onChange={onChange}
                                                    value={living_status_value} required={living_status_value_show ? true : false} />
                                            </div>
                                            {/* </div> row end */}
                                            {/* <div className="form-row"> */}
                                            <div className="form-group col-md-4 col-lg-4 col-12">
                                                <label htmlFor="inputState" className="text-dark">Living At*</label>
                                                <select
                                                    id="living_at"
                                                    name="living_at"
                                                    onChange={e => { onChange(e); onlivingatShow(e) }}
                                                    value={living_at}
                                                    className="form-control"
                                                    required={required_field}
                                                >
                                                    <option value="">-- Select --</option>
                                                    {
                                                        dropdown_parameter.map((data) =>
                                                        (
                                                            data.for_customer === '1' && data.type === "living_at" ?
                                                                <option key={data.parameter_id} value={data.parameter_id} >{data.title}</option> : ''
                                                        )
                                                        )
                                                    }
                                                    <option value="0" >Others (Please Specify)</option>
                                                </select>
                                            </div>
                                            <div className={living_at_value_show ? "form-group col-md-4" : "hidden"} >
                                                <label htmlFor="forenterlivingat" className="text-dark">Enter Living at*</label>
                                                <input type="text"
                                                    name="living_at_value" className="form-control" id="living_at_value"
                                                    placeholder="Enter Living at"
                                                    onChange={onChange}
                                                    value={living_at_value} required={living_at_value_show ? true : false} />
                                            </div>
                                            <div className="form-group col-md-4 col-lg-4 col-12">
                                                <label htmlFor="inputState" className="text-dark">Have a Car  *</label>
                                                <select
                                                    id="have_a_car"
                                                    name="have_a_car"
                                                    onChange={onChange}
                                                    value={have_a_car}
                                                    className="form-control"
                                                    required={required_field}
                                                >
                                                    <option value="">-- Select --</option>
                                                    {
                                                        dropdown_parameter.map((data) =>
                                                        (
                                                            data.for_customer === '1' && data.type === "have_a_car" ?
                                                                <option key={data.parameter_id} value={data.parameter_id} >{data.title}</option> : ''
                                                        )
                                                        )
                                                    }
                                                </select>
                                            </div>

                                            <div className="form-group col-md-4 col-lg-4 col-12">
                                                <label htmlFor="inputState" className="text-dark">Relocation*</label>
                                                <select
                                                    id="relocation"
                                                    name="relocation"
                                                    onChange={onChange}
                                                    className="form-control"
                                                    value={relocation}
                                                    required={required_field}
                                                >
                                                    <option value="">-- Select --</option>
                                                    {
                                                        dropdown_parameter.map((data) =>
                                                        (
                                                            data.for_customer === '1' && data.type === "relocation" ?
                                                                <option key={data.parameter_id} value={data.parameter_id} >{data.title}</option> : ''
                                                        )
                                                        )
                                                    }
                                                </select>
                                            </div>
                                            {/* </div> row end */}
                                            {/* <div className="form-row"> */}
                                            <div className="form-group col-md-4 col-lg-4 col-12">
                                                <label htmlFor="inputState" className="text-dark">Native Language *</label>
                                                <select
                                                    id="native_language"
                                                    name="native_language"
                                                    onChange={e => { onChange(e); onnativelanguageShow(e) }}
                                                    className="form-control"
                                                    value={native_language}
                                                    required={required_field}
                                                >
                                                    <option value="">-- Select --</option>
                                                    {
                                                        dropdown_parameter.map((data) =>
                                                        (
                                                            data.for_customer === '1' && data.type === "language" ?
                                                                <option key={data.parameter_id} value={data.parameter_id} >{data.title}</option> : ''
                                                        )
                                                        )
                                                    }
                                                    <option value="0" >Others (Please Specify)</option>
                                                </select>
                                            </div>
                                            <div className={native_language_value_show ? "form-group col-md-4" : "hidden"} >
                                                <label htmlFor="forenternativelanguage" className="text-dark">Enter Native Language*</label>
                                                <input type="text"
                                                    name="native_language_value" className="form-control" id="native_language_value" placeholder="Enter Native Language"
                                                    onChange={onChange}
                                                    value={native_language_value} required={native_language_value_show ? true : false} />
                                            </div>

                                            <div className="form-group col-md-4 col-lg-4 col-12">
                                                <label htmlFor="inputState" className="text-dark">Second Language*</label>
                                                <select
                                                    id="second_language"
                                                    name="second_language"
                                                    onChange={e => { onChange(e); onsecondlanguageShow(e) }}
                                                    className="form-control"
                                                    value={second_language}
                                                    required={required_field}
                                                >
                                                    <option value="">-- Select --</option>
                                                    {
                                                        dropdown_parameter.map((data) =>
                                                        (
                                                            data.for_customer === '1' && data.type === "language" ?
                                                                <option key={data.parameter_id} value={data.parameter_id} >{data.title}</option> : ''
                                                        )
                                                        )
                                                    }
                                                    <option value="0" >Others (Please Specify)</option>
                                                </select>
                                            </div>
                                            <div className={second_language_value_show ? "form-group col-md-4" : "hidden"} >
                                                <label htmlFor="forentersecondlanguage" className="text-dark">Enter Second Language*</label>
                                                <input type="text"
                                                    name="second_language_value" className="form-control" id="second_language_value"
                                                    placeholder="Enter Second Language"
                                                    onChange={onChange}
                                                    value={second_language_value}
                                                    required={second_language_value_show ? true : false} />
                                            </div>

                                            <div className="form-group col-md-4 col-lg-4 col-12">
                                                <label htmlFor="inputState">Country of Origin*</label>
                                                <select
                                                    id="country_of_origin"
                                                    name="country_of_origin"
                                                    onChange={onChange}
                                                    className="form-control"
                                                    value={country_of_origin}
                                                    required={required_field}
                                                >
                                                    <option value="">Select Country of Origin</option>
                                                    {
                                                        // countries_dropdown is me tamam data fetch kar ke hold kia hua ha jaise hi map ka function use karte hain to wo loop ka kam karta ha or data ka object bana kar ham usay column name de kar options create kar lete hain
                                                        countries_dropdown.map((data) =>
                                                        (
                                                            <option key={data.id} value={data.id} >{data.name}</option>
                                                        )
                                                        )
                                                    }
                                                </select>
                                            </div>
                                            {/* </div> row end */}
                                            {/* <div className="form-row"> */}
                                            <div className="form-group col-md-4 col-lg-4 col-12">
                                                <label htmlFor="inputState" className="text-dark">Country of Living*</label>
                                                <select
                                                    id="country_of_living"
                                                    name="country_of_living"
                                                    onChange={onChange}
                                                    className="form-control"
                                                    value={country_of_living}
                                                    required={required_field}
                                                >
                                                    <option value="">Select Country of Living</option>
                                                    {
                                                        // countries_dropdown is me tamam data fetch kar ke hold kia hua ha jaise hi map ka function use karte hain to wo loop ka kam karta ha or data ka object bana kar ham usay column name de kar options create kar lete hain
                                                        countries_dropdown.map((data) =>
                                                        (
                                                            <option key={data.id} value={data.id} >{data.name}</option>
                                                        )
                                                        )
                                                    }
                                                </select>
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label htmlFor="region" className="text-dark">Region*</label>
                                                <input type="text"
                                                    name="region" className="form-control" id="region"
                                                    placeholder="Region"
                                                    onChange={onChange}
                                                    required={required_field}
                                                    value={region} />
                                            </div>

                                            <div className="form-group col-md-4">
                                                <label htmlFor="city">City*</label>
                                                <input type="text" name="city" className="form-control" id="city" placeholder="City" onChange={onChange} value={city} required={required_field} />
                                            </div>
                                            {/* </div> row end */}
                                            {/* <div className="form-row"> */}
                                            <div className="form-group col-md-4 col-lg-4 col-12">
                                                <label htmlFor="inputState" className="text-dark">Citizenship*</label>
                                                <select
                                                    id="citizenship"
                                                    name="citizenship"
                                                    onChange={e => { onChange(e); oncitizenshipShow(e) }}
                                                    className="form-control"
                                                    value={citizenship}
                                                    required={required_field}
                                                >
                                                    <option value="">-- Select --</option>
                                                    {
                                                        dropdown_parameter.map((data) =>
                                                        (
                                                            data.for_customer === '1' && data.type === "citizenship" ?
                                                                <option key={data.parameter_id} value={data.parameter_id} >{data.title}</option> : ''
                                                        )
                                                        )
                                                    }
                                                    <option value="0" >Others (Please Specify)</option>
                                                </select>
                                            </div>
                                            <div className={citizenship_value_show ? "form-group col-md-4" : "hidden"} >
                                                <label htmlFor="forentersecondlanguage" className="text-dark">Enter Citizenship*</label>
                                                <input type="text"
                                                    name="citizenship_value" className="form-control" id="citizenship_value"
                                                    placeholder="Enter Citizenship"
                                                    onChange={onChange}
                                                    value={citizenship_value} required={citizenship_value_show ? true : false} maxLength="100" />
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label htmlFor="forage" className="text-dark">Online Availability From Time (Eastern Time)*</label>
                                                <input type="time"
                                                    className="form-control" id="online_availability_from_time" name="online_availability_from_time" onChange={onChange}
                                                    value={online_availability_from_time}
                                                    required={required_field} />
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label htmlFor="forage" className="text-dark">Online Availability To Time (Eastern Time)*</label>
                                                <input type="time"
                                                    className="form-control" id="online_availability_to_time" name="online_availability_to_time"
                                                    onChange={onChange}
                                                    value={online_availability_to_time}
                                                    required={required_field} />
                                            </div>

                                            <div className="form-group col-md-12">
                                                <label htmlFor="conclusion" className="text-dark">Conclusion* total word type is {conclusion_word_count} / 300</label>
                                                <textarea className="form-control" rows="3" name="conclusion_about_me"
                                                    id="conclusion_about_me"
                                                    onChange={onChange}
                                                    value={conclusion_about_me}
                                                    required={required_field} maxLength="300"></textarea>
                                            </div>

                                            {/* <div className="form-group col-md-12">
                                                <p className="text-dark">Online Availability Days*</p>
                                                <div className="form-check-inline">
                                                    <input type="checkbox"
                                                        className="form-check-input" id="online_availabe_day_mon" name="online_availabe_day_mon" checked={online_availabe_day_mon}
                                                        value={online_availabe_day_mon}
                                                        onChange={onCheckbox_mon} />
                                                    {online_availabe_day_mon}
                                                    <label className="form-check-label text-dark" htmlFor="online_availabe_day_mon">Mon</label>
                                                </div>
                                                <div className="form-check-inline">
                                                    <input className="form-check-input" type="checkbox" id="online_availabe_day_tues" name="online_availabe_day_tues"
                                                        value={online_availabe_day_tues}
                                                        checked={online_availabe_day_tues}
                                                        onChange={onCheckbox_tue} />
                                                    {online_availabe_day_tues}
                                                    <label className="form-check-label text-dark" htmlFor="online_availabe_day_tues">Tue</label>
                                                </div>

                                                <div className=" form-check-inline">
                                                    <input type="checkbox"
                                                        className="form-check-input"
                                                        id="online_availabe_day_wed" name="online_availabe_day_wed" value={online_availabe_day_wed}
                                                        checked={online_availabe_day_wed}
                                                        onChange={onCheckbox_wed} />
                                                    {online_availabe_day_wed}
                                                    <label className="form-check-label text-dark" htmlFor="online_availabe_day_wed">Wed</label>
                                                </div>

                                                <div className=" form-check-inline">
                                                    <input className="form-check-input" type="checkbox" id="online_availabe_day_thurs" name="online_availabe_day_thurs" value={online_availabe_day_thurs}
                                                        checked={online_availabe_day_thurs}
                                                        onChange={onCheckbox_thurs} />
                                                    <label className="form-check-label text-dark" htmlFor="online_availabe_day_thurs">Thurs</label>
                                                </div>

                                                <div className=" form-check-inline">
                                                    <input className="form-check-input" type="checkbox" id="online_availabe_day_fri" name="online_availabe_day_fri"
                                                        value={online_availabe_day_fri}
                                                        checked={online_availabe_day_fri}
                                                        onChange={onCheckbox_fri} />{online_availabe_day_fri}
                                                    <label className="form-check-label text-dark" htmlFor="online_availabe_day_fri">Fri</label>
                                                </div>

                                                <div className=" form-check-inline">
                                                    <input className="form-check-input" type="checkbox" id="online_availabe_day_sat" name="online_availabe_day_sat"
                                                        value={online_availabe_day_sat}
                                                        checked={online_availabe_day_sat}
                                                        onChange={onCheckbox_sat} />
                                                    {online_availabe_day_sat}
                                                    <label className="form-check-label text-dark" htmlFor="online_availabe_day_sat">Sat</label>
                                                </div>

                                                <div className="form-check-inline">
                                                    <input className="form-check-input" type="checkbox" id="online_availabe_day_sun" name="online_availabe_day_sun"
                                                        checked={online_availabe_day_sun}
                                                        value={online_availabe_day_sun}
                                                        onChange={onCheckbox_sun} />
                                                    {online_availabe_day_sun}
                                                    <label className="form-check-label text-dark" htmlFor="online_availabe_day_sun">Sun</label>
                                                </div>
                                            </div> */}

                                            <div className="col-12 d-none">
                                                <table className="table">
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>View Images</th>
                                                        <th>Choose file</th>
                                                        <th>Action</th>
                                                    </tr>
                                                    <tr> {/* first image */}
                                                        <td>Selfie Image / Image one</td>
                                                        <td>
                                                            {/* <Link to={browse_one_selfie_path} alt="user3" target="_blank">View Image</Link> */}
                                                        </td>
                                                        <td>
                                                            Choose file
                                                        </td>
                                                        <td>
                                                            Action
                                                        </td>
                                                    </tr>{/* first image end */}
                                                    <tr> {/* two image */}
                                                        <td>Image Two</td>
                                                        <td>
                                                            {/* <Link to={browse_two_image_path} alt="user3" target="_blank">View Image</Link> */}
                                                        </td>
                                                        <td>
                                                            Choose file
                                                        </td>
                                                        <td>
                                                            Action
                                                        </td>
                                                    </tr>{/* two image end */}
                                                    <tr> {/* three image */}
                                                        <td>Image Three</td>
                                                        <td>
                                                            {/* <Link to={browse_three_image_path} alt="user3" target="_blank">View Image</Link> */}
                                                        </td>
                                                        <td>
                                                            Choose file
                                                        </td>
                                                        <td>
                                                            Action
                                                        </td>
                                                    </tr>{/* three image end */}
                                                    <tr> {/* four image */}
                                                        <td>Image Four</td>
                                                        <td>
                                                            {/* <Link to={browse_four_image_path} alt="user3" target="_blank">View Image</Link> */}
                                                        </td>
                                                        <td>
                                                            Choose file
                                                        </td>
                                                        <td>
                                                            Action
                                                        </td>
                                                    </tr>{/* four image end */}
                                                    <tr> {/* five image */}
                                                        <td>Image Five</td>
                                                        <td>
                                                            {/* <Link to={browse_five_image_path} alt="user3" target="_blank">View Image</Link> */}
                                                        </td>
                                                        <td>
                                                            Choose file
                                                        </td>
                                                        <td>
                                                            Action
                                                        </td>
                                                    </tr>{/* five image end */}
                                                    <tr> {/* six image */}
                                                        <td>Image Six</td>
                                                        <td>
                                                            {/* <Link to={browse_six_image_path} alt="user3" target="_blank">View Image</Link> */}
                                                        </td>
                                                        <td>
                                                            Choose file
                                                        </td>
                                                        <td>
                                                            Action
                                                        </td>
                                                    </tr>{/* six image end */}
                                                    <tr> {/* seven image */}
                                                        <td>Image Seven</td>
                                                        <td>
                                                            {/* <Link to={browse_seven_image_path} alt="user3" target="_blank">View Image</Link> */}
                                                        </td>
                                                        <td>
                                                            Choose file
                                                        </td>
                                                        <td>
                                                            Action
                                                        </td>
                                                    </tr>{/* seven image end */}
                                                    <tr> {/* eight image */}
                                                        <td>Image Eight</td>
                                                        <td>
                                                            {/* <Link to={browse_eight_image_path} alt="user3" target="_blank">View Image</Link> */}
                                                        </td>
                                                        <td>
                                                            Choose file
                                                        </td>
                                                        <td>
                                                            Action
                                                        </td>
                                                    </tr>{/* eight image end */}

                                                </table>
                                            </div>
                                            <div className="col-12 mt-3">
                                                {/* <a href="auth-login.html" className="btn btn-primary text-uppercase" data-toggle="modal" data-target="#verticalCenter">Sign up</a> */}
                                                <button type="submit" className="pull-right btn btn-primary text-uppercase">Update</button>
                                                <div id="myElem" className={messageDisplay ? message_class + ' mt-5' : 'hidden'}>
                                                    {message}
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditMemberProfile