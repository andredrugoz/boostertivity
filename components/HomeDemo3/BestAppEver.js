import React from 'react';
import Link from 'next/link';

const BestAppEver = () => {
    return (
        <>
            <div className="overview-area">
                <div className="container-fluid">
                    <div className="row m-0">
                        <div className="col-xl-6 col-lg-12 col-md-12 p-0">
                            <div className="overview-content">
                                <h2>Scopri tutti i servizi che possiamo offrirti</h2>
                                <p>Cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy text. Never missyour chance its just began.</p>

                                <ul className="features-list">
                                    <li>
                                        <div className="icon">
                                            <i className="ri-download-cloud-2-line"></i>
                                        </div>
                                        <h3>Team</h3>
                                        <p>Bosstertivity vuole rendere più efficiente il tuo team di lavoro.</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="ri-award-line"></i>
                                        </div>
                                        <h3>Collaboraizone elastica</h3>
                                        <p>Cerchiamo insieme l'approccio corretto ricavando del tempo nuovo da dedicare ad altri progetti.</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="ri-cloud-line"></i>
                                        </div>
                                        <h3>Time plan</h3>
                                        <p>Valutiamo la tua gioranata "tipo" e portiamo freschezza alla gestione organizzativa;</p>
                                    </li>
                                </ul>

                                <div className="btn-box">
                                    <Link href="/contact">
                                        <a className="default-btn">Richiedi consulenza</a>
                                    </Link>
                                    {/* <Link href="/features">
                                        <a className="link-btn">Scopri di più</a>
                                    </Link> */}
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-12 col-md-12 p-0">
                            <div className="overview-image bg1">
                                <img src="/images/overview1.jpg" alt="overview" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BestAppEver;