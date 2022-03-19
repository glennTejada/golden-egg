import React, {useState} from 'react';
import Footer from "./Footer";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import ReCAPTCHA from "react-google-recaptcha";

function Entry(props) {

    // new state to store form data
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        suburb: '',
        number: '',
        product: '',
        receipt: '',
        email: '',
        transactionId: '',
        age: false,
        proof: false,
        affiliates: false,
    });

    const [recaptchaState, setRecaptcha] = useState(false);

    // todo: add form input validation
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState, [name]: value
        }));
    };

    // handle file upload
    const handleFileUpload = (e) => {
        const {name, files} = e.target;

        document.getElementById("receipt_image_name_holder").innerHTML = files[0]?.name ? files[0]?.name : 'Upload Receipt*';

        setFormData(prevState => ({
            ...prevState, [name]: files[0]
        }));
    };

    // handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // check any of state values are empty
        // todo: add form validation
        if (formData.firstname === '' || formData.lastname === '' || formData.suburb === '' || formData.number === '' || formData.product === '' || formData.receipt === '' || formData.receipt === undefined || formData.transactionId === '' || formData.email === '' || formData.age === false || formData.proof === false) {
            toast.warn('Please fill in all required fields');
            return;
        }
        toast.info("Submitting Information...");

        let formDataToSubmit = new FormData();
        for (let key in formData) {
            formDataToSubmit.append(key, formData[key]);
        }
        axios.post('/api/entry', formDataToSubmit)
            .then(res => {
                toast.dismiss();

                switch (res.data.code) {
                    case 0:
                        // todo: maybe promotion ended, show result
                        break;
                    case 1:
                        // go to winner page : todo: use react history
                        window.location.href = '/winner';
                        break;
                    case 2:
                        // go to good-crack page
                        window.location.href = '/good-crack';
                        break;
                    default:
                        toast.error("Something went wrong");
                        break;
                }
            })
            .catch(err => {
                toast.dismiss();

                if (err.response.hasOwnProperty('data') && err.response.data.hasOwnProperty('errors')) {
                    // if status code is 422 show type error, otherwise show error message
                    switch (err.response.status) {
                        case 422:
                            toast.error(`The ${Object.keys(err.response.data.errors)[0]} was invalid.`);
                            break;
                        case 400:
                        case 404:
                            toast.error(err.response.data.errors);
                            break;
                    }
                } else {
                    toast.error("Unknown error occurred!");
                }
            });
    };

    return (<div className="entry">
        <ToastContainer/>

        <section className="banner-main-area entry-page">
            <img className="mobile-hide" src="img/golden-egg/entry.png" alt=""/>
            <img className="mobile-show" src="img/golden-egg/home-mobile.png" alt=""/>
        </section>
        <section className="about-main-area-wrap entry-page">
            <div className="container">
                <div className="about-inner-wrap entry-page">
                    <h2>
                        WIN 1 of 10 x $1000 <br/>
                        Digital Visa Gift Cards*
                    </h2>
                    <h4>
                        To enter, purchase any TEMPTATIONS™ or SCHMACKOS™ product from any
                        participating Woolworths store before 19/04/2022 and complete the
                        entry form below to discover if you are an instant winner.
                    </h4>

                    <div className="form-input-area text-start">
                        <form>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="input-single-form-item">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="firstname"
                                                name='firstname'
                                                placeholder="First Name*"
                                                required
                                                onChange={(e) => setFormData({
                                                    ...formData, firstname: e.target.value
                                                })}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-single-form-item">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="lastname"
                                                name='lastname'
                                                placeholder="Last Name*"
                                                required
                                                onChange={(e) => setFormData({
                                                    ...formData, lastname: e.target.value
                                                })}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="input-single-form-item">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="suburb"
                                                name='suburb'
                                                placeholder="Suburb*"
                                                required
                                                onChange={(e) => setFormData({...formData, suburb: e.target.value})}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-single-form-item">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="number"
                                                name='number'
                                                placeholder="Phone Number*"
                                                required
                                                onChange={(e) => setFormData({...formData, number: e.target.value})}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-single-form-item">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="product"
                                                name='product'
                                                placeholder="Product*"
                                                required
                                                onChange={(e) => setFormData({
                                                    ...formData, product: e.target.value
                                                })}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-single-form-item">
                                        <div className="form-group-input-image">
                                            <label htmlFor="form-control-image" className="form-control">
                                                <span id="receipt_image_name_holder">Upload Receipt*</span>
                                                <img src="img/golden-egg/camera.png" alt=""/>
                                            </label>
                                            <input
                                                type="file"
                                                className="form-control-image"
                                                id="form-control-image"
                                                name='receipt'
                                                required
                                                onChange={handleFileUpload}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-single-form-item">
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                name='email'
                                                aria-describedby="emailHelp"
                                                placeholder="Enter email*"
                                                required
                                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-single-form-item">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="transactionId"
                                                name='transactionId'
                                                aria-describedby="transactionIdHelp"
                                                placeholder="Enter Transaction Id*"
                                                required
                                                onChange={(e) => setFormData({...formData, transactionId: e.target.value})}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="input-single-form-item">
                                    <small className="form-text text-muted">* Mandatory Fields</small>
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="age"
                                            name='age'
                                            required
                                            onChange={(e) => setFormData({...formData, age: e.target.checked})}
                                        />
                                        <label className="form-check-label" htmlFor="age"
                                        >I am 18 years of age or older, and I have read and accept
                                            the <a href="terms" target="_blank"><u>Terms & Conditions</u></a> and the <a href="https://www.mars.com/privacy" target="_blank"><u>Privacy
                                                Policy</u></a>.
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="proof"
                                            name='proof'
                                            required
                                            onChange={(e) => setFormData({...formData, proof: e.target.checked})}
                                        />
                                        <label className="form-check-label" htmlFor="proof">
                                            I understand that I must retain receipt(s) as proof of purchase.
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="affiliates"
                                            name='affiliates'
                                            onChange={(e) => {
                                                setFormData({...formData, affiliates: e.target.checked})
                                            }}
                                        />
                                        <label className="form-check-label" htmlFor="affiliates"
                                        >We’d like to keep you and your pet up to date with
                                            exciting promotions, pet care tips and info & new product
                                            developments from Mars Petcare and its affiliates. <br/>

                                            I am over 18+ years old and I consent to receive marketing and promotional
                                            materials from Mars Petcare and its affiliates. <br/>

                                            I understand that I may change these preferences at any
                                            time by clicking the unsubscribe link in any communication
                                            I receive. <br/>

                                            We may use your personal information for research to enhance our product and
                                            service offerings. You can find out how and for what purposes Mars Petcare
                                            and its affiliates collects, uses and may disclose your personal
                                            information.
                                            You can also discover how to contact us with your privacy questions, and
                                            exercise your privacy rights, via the <a href="https://www.mars.com/privacy" target="_blank"><u>Mars Privacy
                                                Statement</u></a>.
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <button disabled={!recaptchaState} onClick={handleSubmit}>Submit</button>
                            <div id="captcha">
                                <ReCAPTCHA
                                    sitekey="6Lce4fEeAAAAAASrWGOTC3i2m23kI7UHxRuvzz3F"
                                    onChange={() => setRecaptcha(!recaptchaState)}
                                />
                            </div>

                        </form>
                        <p className="text-center">
                            *T&Cs apply, schmackos.com.au/goldenegg. Open to AU residents 18+. Starts 12:01am AEST 23.03.22.
                            Ends 11:59pm AEST 19.04.22. To enter, purchase qualifying product, complete entry form &
                            upload receipt for your chance to win. Max 2 entries per day. 10 x $1000 Digital VISA Gift
                            Cards. Total prize pool up to $10,000. Winners listed on website on the 26.04.22. Mars Australia
                            Pty Ltd trading as Mars Petcare Australia (ABN 48 008 454 313) of Petcare Place, Wodonga VIC
                            3690. NSW; TP/01302 ACT; TP 21/02279 SA; T21/2053
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </div>);
}

export default Entry;
