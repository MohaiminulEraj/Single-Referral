import React, { useState } from 'react';
import Image from 'next/image';

const UploadPhoto = () => {
    const [img1, setImg1] = useState('');
    const [img2, setImg2] = useState('');
    const [img3, setImg3] = useState('');
    const [img4, setImg4] = useState('');

    const onChangeImage = e => {
        console.log(e.target)
        if (e.target.files[0]) {
            if (e.target.name === 'img1') {
                setImg1(URL.createObjectURL(e.target.files[0]));
            } else if (e.target.name === 'img2') {
                setImg2(URL.createObjectURL(e.target.files[0]));
            }
            else if (e.target.name === 'img3') {
                setImg3(URL.createObjectURL(e.target.files[0]));
            }
            else if (e.target.name === 'img4') {
                setImg4(URL.createObjectURL(e.target.files[0]));
            }
        }
    };

    return (
        <div className="container">
            <h2 className="formTitle" >Upload Photos</h2>
            <form className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="previewProfilePic" >
                        <Image className="playerProfilePic_home_tile" alt="primary" src={img1 ? img1 : 'https://gravatar.com/avatar/1aedb8d9dc4751e229a335e371db8058?d=mm&r=pg&s=200'} height={300} width={300} />
                    </div>
                    <div className="register_profile_image">
                        <input name="img1" type="file" onChange={onChangeImage} />
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="previewProfilePic" >
                        <Image className="playerProfilePic_home_tile" alt="primary" src={img2 ? img2 : 'https://gravatar.com/avatar/1aedb8d9dc4751e229a335e371db8058?d=mm&r=pg&s=200'} height={300} width={300} />
                    </div>
                    <div className="register_profile_image">
                        <input name="img2" type="file" onChange={onChangeImage} />
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="previewProfilePic" >
                        <Image className="playerProfilePic_home_tile" alt="primary" src={img3 ? img3 : 'https://gravatar.com/avatar/1aedb8d9dc4751e229a335e371db8058?d=mm&r=pg&s=200'} height={300} width={300} />
                    </div>
                    <div className="register_profile_image">
                        <input name="img3" type="file" onChange={onChangeImage} />
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="previewProfilePic" >
                        <Image className="playerProfilePic_home_tile" alt="primary" src={img4 ? img4 : 'https://gravatar.com/avatar/1aedb8d9dc4751e229a335e371db8058?d=mm&r=pg&s=200'} height={300} width={300} />
                    </div>
                    <div className="register_profile_image">
                        <input name="img4" type="file" onChange={onChangeImage} />
                    </div>
                </div>
                <button className="btn btn-primary my-2">Submit</button>
            </form>
        </div>
    );
}

export default UploadPhoto