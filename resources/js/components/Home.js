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
                        Purchase any TEMPTATIONS™ or SCHMACKOS™ product and upload your receipt for the chance to WIN 1
                        of 10 x $1000 Digital Visa Gift Cards.
                    </h4>
                    <Link to={'/entry'}><button>Enter</button></Link>
                    <p>
                        *T&Cs apply, see www.masterfoods.com.au/competition. Open to AU res 18+. Starts 12:01am AEST
                        16/03/2022. Ends 11:59pm AEST 26/04/2022. Retain receipt/s. To enter promotion, purchase
                        qualifying product, complete the entry form incl. uploading receipt for your chance to
                        provisionally win. (Game of Chance): Max 1 entry per day. 1500 x $50 prepaid vouchers. Total
                        prize pool up to $75000. Winners listed on website 02/05/2022. Promoter is Mars Australia Pty
                        Ltd t/as Mars Food (ABN 48 008 454 313) of Tower 2, Collins Square, 727 Collins St, Docklands,
                        Melbourne VIC 3008. NSW TP/01302. ACT 22/00002. SA T21/2087.
                    </p>
                </div>
            </div>
        </section>

        <Footer/>
    </div>);
}

export default Home;
