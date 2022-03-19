import React from 'react';
import Footer from "./Footer";

function Winner() {
    return (
        <div className="winner">
            <section className="banner-main-area">
                <img className="mobile-hide" src="img/golden-egg/WINNER.png" alt=""/>
                <img
                    className="mobile-show"
                    src="img/golden-egg/home-mobile-mobile.png"
                    alt=""
                />
            </section>
            <section className="about-main-area-wrap entry-page">
                <div className="container">
                    <div className="about-inner-wrap entry-page">
                        <h2>Congratulations!</h2>
                        <h4 className="mb-5">
                            You’ve provisionally won a $1000 Digital Visa Gift Card! <br/>
                            Once your entry has been validated, you will receive an email to your nominated email address
                            notifying you of how to claim your prize.
                        </h4>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Winner;
