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
                                <p>Per noi la priorità è il Cliente, le sue esigenze sono il nostro focus. Studiamo ogni singolo caso per ottenere i risultati migliori, accompagnando il Team step by step nella formazione, nella crescita e nella concreta realizzazione professionale. Così i Clienti saranno affiancati da uno Staff preparato e vincente.</p>

                                <ul className="features-list">
                                    <li>
                                        <div className="icon">
                                            <i className="ri-download-cloud-2-line"></i>
                                        </div>
                                        <h3>Team</h3>
                                        <p>Bosstertivity vuole rendere più efficiente il tuo team di lavoro. Boostertivity vuole rendere più efficiente il Tuo Team, utilizzando leve efficaci e senza sprecare tempo prezioso.</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="ri-award-line"></i>
                                        </div>
                                        <h3>Collaboraizone elastica</h3>
                                        <p>Cerchiamo insieme l'approccio corretto, ricavando del tempo nuovo da dedicare ad altri progetti.</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="ri-cloud-line"></i>
                                        </div>
                                        <h3>Time plan</h3>
                                        <p>Valutiamo la Tua gioranata "tipo" e portiamo freschezza alla gestione organizzativa.</p>
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
                                <img src="/images/elonora.jpg" alt="overview" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BestAppEver;