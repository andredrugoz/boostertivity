import React from 'react';
import Link from 'next/link'

const PricingPlanStyle3 = () => {
    return (
        <>
            <div className="pricing-area bg-black-color pt-100 pb-75">
                <div className="container">
                    <div className="section-title color-white">
                        <h2>PACCHETTI</h2>
                        <span className="sub-title">nessuna commissione nascosta, scegli il piano adatto a Te!</span>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-pricing-box">
                                <div className="title">
                                    <h3>Base Consultancy</h3>
                                    <p>Dove tutto inizia</p>
                                </div>
                                <div className="price">
                                    GRATIS <span>(solo una volta)</span>
                                </div>

                                <Link href="/contact">
                                    <a className="default-btn">Servizi inclusi</a>
                                </Link>

                                <ul className="features-list">
                                    <li><i className="ri-check-line"></i> Videocall 30m</li>
                                    <li><i className="ri-check-line"></i> Presentazione</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-pricing-box active">
                                <div className="title">
                                    <h3>Advanced</h3>
                                    <p>Il migliore per iniziare</p> 
                                </div>
                                <span className="popular">La più scelta</span>
                                <div className="price">
                                    A partire da 295€
                                </div>
                                
                                <Link href="/contact">
                                    <a className="default-btn">Servizi inclusi</a>
                                </Link>

                                <ul className="features-list">
                                    <li><i className="ri-check-line"></i> Videocall su appuntamento</li>
                                    <li><i className="ri-check-line"></i> Focus sulle criticità</li>
                                    <li><i className="ri-check-line"></i> Creazione piano d'azione</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-pricing-box">
                                <div className="title">
                                    <h3>Top</h3>
                                    <p>Un piano d'azione ad hoc</p>
                                </div>
                                <div className="price">
                                    A partire da 395€
                                </div>

                                <Link href="/contact">
                                    <a className="default-btn">Servizi inclusi</a>
                                </Link>
                                
                                <ul className="features-list">
                                <ul className="features-list">
                                    <li><i className="ri-check-line"></i> Videocall su appuntamento</li>
                                    <li><i className="ri-check-line"></i> Focus e risoluzione delle criticità</li>
                                    <li><i className="ri-check-line"></i> Inserimento di strumenti per migliorare il lavoro</li>

                                </ul>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="shape7">
                    <img src="/images/shape/shape6.png" alt="shape" />
                </div>
                <div className="shape8">
                    <img src="/images/shape/shape7.png" alt="shape" />
                </div>
            </div>
        </>
    )
}

export default PricingPlanStyle3;