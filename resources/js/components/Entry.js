import React from 'react';
import Footer from "./Footer";
import {Link} from "react-router-dom";

function Entry(props) {
    return (
        <div className="entry">
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
                                                    id=""
                                                    placeholder="First Name*"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-single-form-item">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id=""
                                                placeholder="Last Name*"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="input-single-form-item">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id=""
                                                    placeholder="Suburb*"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-single-form-item">
                                            <div className="form-group">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id=""
                                                    placeholder="Phone Number*"
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
                                                    id=""
                                                    placeholder="Product*"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-single-form-item">
                                            <div className="form-group-input-image">
                                                <label htmlFor="form-control-image" className="form-control">
                                                    <span> Receipt Upload*</span>
                                                    <img src="img/golden-egg/camera.png" alt=""
                                                    /></label>
                                                <input
                                                    type="file"
                                                    className="form-control-image"
                                                    id="form-control-image"
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
                                                    id="exampleInputEmail1"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Enter email*"
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
                                                id="exampleCheck1"
                                            />
                                            <label className="form-check-label" htmlFor="exampleCheck1"
                                            >I am 18 years of age or older, and I have read and accept
                                                the Terms & Conditions and the Privacy Policy.
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                id="exampleCheck2"
                                            />
                                            <label className="form-check-label" htmlFor="exampleCheck2"
                                            >I understand that I must retain receipt(s) as proof of
                                                purchase.</label
                                            >
                                        </div>
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                id="exampleCheck3"
                                            />
                                            <label className="form-check-label" htmlFor="exampleCheck3"
                                            >We’d like to keep you and your pet up to date with
                                                exciting promotions, pet care tips and info & new product
                                                developments from Mars Petcare and its affiliates. <br/>

                                                I am 18 years or older, and would like to receive these
                                                from: <br/>

                                                Mars Petcare and its affiliates <br/>

                                                I understand that I may change these preferences at any
                                                time by clicking the unsubscribe link in any communication
                                                I receive. <br/>

                                                We may occasionally use your information to enhance our
                                                product & service offerings. You can find out how and for
                                                what purposes Mars Petcare and its affiliates collects,
                                                uses and may disclose your personal information. You can
                                                also discover how to contact us with your privacy
                                                questions, and exercise your privacy rights, via the Mars
                                                Privacy Statement.
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <Link to={'/winner'}><button>Submit</button></Link>
                            </form>
                            <p className="text-center">
                                *T&Cs apply, see www.masterfoods.com.au/competition. Open to AU
                                res 18+. Starts 12:01am AEST 16/03/2022. Ends 11:59pm AEST
                                26/04/2022. Retain receipt/s. To enter promotion, purchase
                                qualifying product, complete the entry form incl. uploading
                                receipt for your chance to provisionally win. (Game of Chance):
                                Max 1 entry per day. 1500 x $50 prepaid vouchers. Total prize pool
                                up to $75000. Winners listed on website 02/05/2022. Promoter is
                                Mars Australia Pty Ltd t/as Mars Food (ABN 48 008 454 313) of
                                Tower 2, Collins Square, 727 Collins St, Docklands, Melbourne VIC
                                3008. NSW TP/01302. ACT 22/00002. SA T21/2087.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Entry;


