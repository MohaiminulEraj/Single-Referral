import React, { useState } from 'react'

const ManageMyAccount = () => {

    const [name, setName] = useState('');
    const [number, setNumber] = useState(-1);
    const [paypal, setPaypal] = useState(false);
    const [interac, setInterac] = useState(true);
    const [bkash, setBkash] = useState(false);
    const [paypalAddr, setPaypalAddr] = useState('');
    const [interacAddr, setInteracAddr] = useState('');
    const [bkashAddr, setBkashAddr] = useState('');

    const checkRadio = (e) => {
        if (e.target.name === 'paypal') {
            setPaypal(true);
            setInterac(false);
            setBkash(false);
            setInteracAddr('');
            setBkashAddr('');
        } else if (e.target.name === 'interac') {
            setPaypal(false);
            setInterac(true);
            setBkash(false);
            setPaypalAddr('');
            setBkashAddr('');
        } else if (e.target.name === 'bkash') {
            setPaypal(false);
            setInterac(false);
            setBkash(true);
            setPaypalAddr('');
            setInteracAddr('');
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, number, paypal, interac, bkash);
    }
    return (
        <form className="container" onSubmit={handleSubmit}>
            <h1>Manage My Account</h1>
            <div className="form-group row my-2">
                <label className="col-sm-4 col-form-label">Name:</label>
                <div className="col-sm-8">
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Please provide your legal name" className="form-control" required />
                </div>
            </div>
            <div className="form-group row my-2">
                <label className="col-sm-4 col-form-label">Mobile No:</label>
                <div className="col-sm-8">
                    <input type="number" min={0} value={number !== -1 && number} onChange={(e) => setNumber(e.target.value)} className="form-control" required />
                </div>
            </div>
            <div className="form-group row my-2">
                <div className="col-sm-4">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" onChange={checkRadio} checked={paypal} name="paypal" id="paypalRadio" />
                        <label htmlFor="paypalRadio" className="form-check-label">Paypal Account:</label>
                    </div>
                </div>
                <div className="col-sm-8">
                    <input type="text" className="form-control" placeholder="Print Your Paypal Account" disabled={!paypal} value={paypalAddr} onChange={(e) => setPaypalAddr(e.target.value)} required={paypal} />
                </div>
            </div>
            <div className="form-group row my-2">
                <div className="col-sm-4">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" onChange={checkRadio} checked={interac} name="interac" id="interacRadio" />
                        <label htmlFor="interacRadio" className="form-check-label">Interac e-Transfer:</label>
                    </div>
                </div>
                <div className="col-sm-8">
                    <input type="text" className="form-control" value={interacAddr} onChange={(e) => setInteracAddr(e.target.value)} placeholder="Print Your Auto Deposit Email" disabled={!interac} required={interac} />
                </div>
            </div>
            <div className="form-group row my-2">
                <div className="col-sm-4">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" onChange={checkRadio} checked={bkash} name="bkash" id="bkashRadio" />
                        <label htmlFor="bkashRadio" className="form-check-label">bKash Account:</label>
                    </div>
                </div>
                <div className="col-sm-8">
                    <input type="text" className="form-control" value={bkashAddr} onChange={(e) => setBkashAddr(e.target.value)} placeholder="Print Your bKash Number" disabled={!bkash} required={bkash} />
                </div>
                <button type="submit" className="btn btn-primary my-4">Submit</button>
            </div>
        </form>
    )
}

export default ManageMyAccount