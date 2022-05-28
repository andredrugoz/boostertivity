import React from 'react';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';

const SoftwareIntegrations = () => {
    return (
        <>
            <div className="software-integrations-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="software-integrations-content">
                                <span className="sub-title">SOLUZIONI INNOVATIVE</span>
                                <h2>Soluzioni semplici e su misura per la tua attività</h2>
                                <p>Usiamo le strategie migliori e innovative nel mondo online, dopo una attenta analisi della tua azienda svilupperemo una soluzione unica.</p>
                                <p>É importante per noi che i nostri clienti non abbiano difficoltà nell'adottare la nuova strategia.</p>

                                <Link href="/contact">
                                    <a className="default-btn">Richiedi consulenza</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <ScrollAnimation animateIn="fadeInUp">
                                <div className="software-integrations-list">
                                    <img src="/images/shape/bg-shape2.png" alt="bg-shape" />

                                    <ul>
                                        <li>
                                            <img src="/images/software-integrations/atlassian.png" className="atlassian" alt="atlassian" />
                                        </li>
                                        <li> 
                                            <img src="/images/software-integrations/skype.png" className="skype" alt="skype" />
                                        </li>
                                        <li>
                                            <img src="/images/software-integrations/gdrive.png" className="gdrive" alt="gdrive" />
                                        </li>
                                        <li>
                                            <img src="/images/software-integrations/slack.png" className="slack" alt="slack" />
                                        </li>
                                        <li>
                                            <img src="/images/software-integrations/jira.png" className="jira" alt="jira" />
                                        </li>
                                        <li>
                                            <img src="/images/software-integrations/frame.png" className="frame" alt="frame" />
                                        </li>
                                    </ul>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>

                <div className="shape6">
                    <img src="/images/shape/shape5.png" alt="shape" />
                </div>
            </div>
        </>
    )
}

export default SoftwareIntegrations;