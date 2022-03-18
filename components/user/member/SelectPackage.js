import React, { useState } from 'react'

const SelectPackage = () => {

    const [free, setFree] = useState(false);
    const [trail, setTrail] = useState(false);
    const [vip, setVip] = useState(true);
    const [referralCode, setReferralCode] = useState('');
    const [duration, setDuration] = useState(300);
    const [paypal, setPaypal] = useState(false);
    const [interac, setInterac] = useState(true);
    const [bkash, setBkash] = useState(false);
    const [paypalAddr, setPaypalAddr] = useState('');
    const [interacAddr, setInteracAddr] = useState('');
    const [bkashAddr, setBkashAddr] = useState('');
    const [cart, setCart] = useState(300);
    const [txID, setTxID] = useState('');
    const [email, setEmail] = useState('');

    const checkReferralCode = (e) => {
        if (e.target.name === 'referralCode') {
            setReferralCode(e.target.value);
            if (e.target.value.length >= 1) {
                setDuration(360);
            }
            else {
                setDuration(300);
            }
        }
    }

    const checkRadio = (e) => {
        if (e.target.name === 'free') {
            setFree(true);
            setTrail(false);
            setVip(false);
            setDuration(0);
            setCart(0);
            setReferralCode('');
        } else if (e.target.name === 'trail') {
            setFree(false);
            setTrail(true);
            setVip(false);
            setDuration(3);
            setCart(30);
            setReferralCode('');
        } else if (e.target.name === 'vip') {
            setFree(false);
            setTrail(false);
            setVip(true);
            setDuration(300);
            setCart(300);
        }

        if (e.target.name === 'paypal') {
            setPaypal(true);
            setInterac(false);
            setBkash(false);
        } else if (e.target.name === 'interac') {
            setPaypal(false);
            setInterac(true);
            setBkash(false);
        } else if (e.target.name === 'bkash') {
            setPaypal(false);
            setInterac(false);
            setBkash(true);
        }
        setPaypalAddr('');
        setInteracAddr('');
        setBkashAddr('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(duration, paypal, interac, bkash);
    }
    return (
        <form className="container" onSubmit={handleSubmit}>
            <h1>Select Package</h1>
            <div className="form-group row my-2">
                <div className="form-check form-check-inline my-2">
                    <input className="form-check-input" type="radio" onChange={checkRadio} checked={free} name="free" id="freeRadio" />
                    <label style={{ fontWeight: "bold" }} className="form-check-label" htmlFor="freeRadio">Free (CAD $0)</label>
                </div>
                <div className="form-check form-check-inline my-2">
                    <input className="form-check-input" type="radio" onChange={checkRadio} checked={trail} name="trail" id="trailRadio" />
                    <label style={{ fontWeight: "bold" }} className="form-check-label" htmlFor="trailRadio">Trail (CAD $30)</label>
                </div>
                <div className="form-check form-check-inline my-2">
                    <input className="form-check-input" type="radio" onChange={checkRadio} checked={vip} name="vip" id="vipRadio" />
                    <label style={{ fontWeight: "bold" }} className="form-check-label" htmlFor="vipRadio">VIP (CAD $300)</label>
                </div>
            </div>
            <div className="form-group row my-2">
                <label className="col-sm-4 col-form-label">Referral Code:</label>
                <div className="col-sm-8">
                    <input type="text" name="referralCode" value={referralCode} onChange={checkReferralCode} placeholder={vip ? 'Use valid code for bonus' : 'N/A'} className="form-control" required={vip} disabled={!vip} />
                </div>
            </div>
            <div className="form-group row my-2">
                <label className="col-sm-4 col-form-label">Duration (Days):</label>
                <div className="col-sm-8">
                    <input type="number" min={0} value={duration !== -1 && duration} onChange={(e) => setDuration(e.target.value)} className="form-control" disabled />
                </div>
            </div>
            <div className={free && `d-none`}>
                <div className="d-flex justify-content-center">
                    <button type="button" className="btn btn-outline-info my-4">Invoice</button>
                </div>
                <div className="form-group row my-2">
                    <label className="col-sm-4 col-form-label">Your Cart:</label>
                    <div className="col-sm-8">
                        <input type="text" min={0} value={`C$ ${cart}`} onChange={(e) => setCart(e.target.value)} className="form-control" disabled />
                    </div>
                </div>

                <div className="form-group row my-2">
                    <label className="col-sm-4 col-form-label">Date:</label>
                    <div className="col-sm-8">
                        <input type="text" name="referralCode" value={new Date().toLocaleDateString()} onChange={checkReferralCode} placeholder="Use valid code for bonus" className="form-control" disabled />
                    </div>
                </div>

                <div className="form-group row my-2">
                    <label className="col-sm-4 col-form-label">Email:</label>
                    <div className="col-sm-8">
                        <input type="email" name="referralCode" value={email} onChange={checkReferralCode} placeholder="name@example.com" className="form-control" disabled />
                    </div>
                </div>
                <h3 className="my-4">Select Payment Method:</h3>
                <div className="form-group row my-2">
                    <div className="col-sm-4">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" onChange={checkRadio} checked={paypal} name="paypal" id="paypalRadio" />
                            <label htmlFor="paypalRadio" className="form-check-label">Paypal Account (pay@singlereferral.com):</label>
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
                            <label htmlFor="interacRadio" className="form-check-label">Interac e-Transfer (pay@singlereferral.com):</label>
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
                            <label htmlFor="bkashRadio" className="form-check-label">bKash Account (+88012345678):</label>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <input type="text" className="form-control" value={bkashAddr} onChange={(e) => setBkashAddr(e.target.value)} placeholder="Print Your bKash Number" disabled={!bkash} required={bkash} />
                    </div>
                </div>
                <div className="form-group row my-2">
                    <div className="col-sm-4">
                        <label htmlFor="txID" className="form-check-label">Transaction ID/Reference No:</label>
                    </div>
                    <div className="col-sm-8">
                        <input type="text" id="txID" className="form-control" value={txID} onChange={(e) => setTxID(e.target.value)} placeholder="CvC103EnVTD" required />
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary my-4 text-center">Submit</button>
            </div>
        </form>
    )
}

export default SelectPackage