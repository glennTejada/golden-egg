import React from 'react';
import Footer from "./Footer";

function NoLuck() {
    return (
        <div className="no-luck">
            <section className="banner-main-area goodCrack">
                <img className="mobile-hide" src="img/golden-egg/GOOD_CRACK.png" alt=""/>
                <img
                    className="mobile-show"
                    src="img/golden-egg/GOOD_CRACK_Mobile.png"
                    alt=""
                />
            </section>
            <section className="about-main-area-wrap entry-page">
                <div className="container">
                    <div className="about-inner-wrap entry-page">
                        <h2>But not this time</h2>
                        <h4 className="mb-5">
                            Unfortunately, you didn’t win this time. Please feel free to enter again with your next purchase.
                        </h4>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default NoLuck;
