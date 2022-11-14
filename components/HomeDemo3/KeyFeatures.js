import React from 'react';

const KeyFeatures = () => {
    return (
        <>
            <div className="features-area pt-100 pb-75">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">SERVIZI PRINCIPALI</span>
                        <h2>I 4 servizi che soddisfano<br/> maggiormente i miei Clienti</h2>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-12 col-md-6 text-center xsw-100">
                            <div className="features-item">
                                <div className="icon">
                                    <i className="ri-eye-line"></i>
                                </div>
                                <h3>Produttività oraria</h3>
                                <p>Migliorare la gestione dei costi interni per aumentare la produttività oraria.</p>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 text-center xsw-100">
                            <div className="features-item">
                                <div className="icon bg2">
                                    <i className="ri-stack-line"></i>
                                </div>
                                <h3>Organizzazione</h3>
                                <p>Introdurre una nuova gestione organizzativa per ridurre i costi interni.</p>
                            </div>
                        </div>

                        {/* <div className="col-12 col-md-6 text-center xsw-100">
                            <div className="features-item">
                                <div className="icon bg3">
                                    <i className="ri-leaf-line"></i>
                                </div>
                                <h3>Easy Editable Data</h3>
                                <p>Just log in with your mail account from play store and using whatever you want for your able business purpose.</p>
                            </div>
                        </div> */}

                        <div className="col-12 col-md-6 text-center xsw-100">
                            <div className="features-item">
                                <div className="icon bg4">
                                    <i className="ri-secure-payment-line"></i>
                                </div>
                                <h3>Gestione del team</h3>
                                <p>Facilitare l'interazione tra i membri del Team, creando una coesione fluida.</p>
                            </div>
                        </div>

                        {/* <div className="col-12 col-md-6 text-center xsw-100">
                            <div className="features-item">
                                <div className="icon bg5">
                                    <i className="ri-cloud-line"></i>
                                </div>
                                <h3>Fianco a fianco</h3>
                                <p>Nel percorso di rinnovamento della tua attività non ti sentirai mai solo, i nostri esperti saranno sempre pronti ad aiutarti.</p>
                            </div>
                        </div> */}

                        <div className="col-12 col-md-6 text-center xsw-100">
                            <div className="features-item">
                                <div className="icon bg6">
                                    <i className="ri-pie-chart-2-line"></i>
                                </div>
                                <h3>Autovalutazione</h3>
                                <p>Sapersi autovalutare, positivamente e negativamente, accresce l'importanza dell'applicazione del metodo di lavoro. I feedback servono per migliorarsi e di conseguenza fidelizzare i Clienti.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default KeyFeatures;