import React from 'react';
import {Link} from 'react-router-dom';
import Footer from "./Footer";


function Home() {
    return (<div>
        <section className="banner-main-area">
            {/*todo: use html5 picture tag for performance boost*/}
            <img className="mobile-hide" src="img/golden-egg/homePage.png" alt=""/>
            <img className="mobile-show" src="img/golden-egg/home-mobile.png" alt=""/>
        </section>
        <section className="about-main-area-wrap">
            <div className="container">
                <div className="about-inner-wrap">
                    <h4>
                        Purchase any TEMPTATIONS™ or SCHMACKOS™
                        product from any participating Woolworths store and upload your receipt for the chance to <br/>
                        <nobr> WIN 1 of 10 x $1000 Digital Visa Gift <span className="asterisk">Cards</span></nobr>
                    </h4>
                    <Link to={'/entry'}>
                        <button>Enter</button>
                    </Link>
                    <p>
                        *T&Cs apply, schmackos.com.au/goldenegg. Open to AU residents 18+. Starts 12:01am AEST 23.03.22.
                        Ends 11:59pm AEST 19.04.22. To enter, purchase qualifying product, complete entry form &
                        upload receipt for your chance to win. Max 2 entries per day. 10 x $1000 Digital VISA Gift
                        Cards. Total prize pool up to $10,000. Winners listed on website on the 26.04.22. Mars Australia
                        Pty Ltd trading as Mars Petcare Australia (ABN 48 008 454 313) of Petcare Place, Wodonga VIC
                        3690. NSW; TP/01302 ACT; TP 21/02279 SA; T21/2053
                    </p>
                </div>
            </div>
        </section>

        <Footer/>
    </div>);
}

export default Home;
