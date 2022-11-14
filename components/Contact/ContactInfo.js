import React from 'react';

const ContactInfo = () => {
    return (
        <>
            <div className="contact-info-area pb-100">
                <div className="container">
                    <div className="contact-info-inner">
                        <h2>Se preferisci puoi chiamarmi o mandarmi una email</h2>

                        <div className="row justify-content-center">
                            /*<div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-contact-info-box">
                                    <div className="icon bg1">
                                        <i className="ri-customer-service-2-line"></i>
                                    </div>
                                    <h3><a href="tel:+393519696279">+39 3519696279</a></h3>
                                </div>
                            </div>*/

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-contact-info-box">
                                    <div className="icon">
                                        <i className="ri-earth-line"></i>
                                    </div>
                                    <h3><a href="mailto:eleonorascolaro20@gmail.com">eleonorascolaro20@gmail.com</a></h3>
                                </div>
                            </div>

                            {/* <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-contact-info-box">
                                    <div className="icon bg2">
                                        <i className="ri-map-pin-line"></i>
                                    </div>
                                    <h3>121 King St, Melbourne VIC 3000, Australia.</h3>
                                </div>
                            </div> */}
                        </div>

                        <div className="lines">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactInfo;