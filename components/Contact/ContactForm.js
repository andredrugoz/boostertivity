import React from 'react';

const ContactForm = () => {
    return (
        <>
            <div className="contact-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Rimani in contatto</h2>
                        <p>Per qualsiasi dubbio o informazione non esitare a contattarmi,  risponderò al più presto.</p>
                    </div>

                    <div className="contact-form">
                        <form id="contactForm" action="https://api.web3forms.com/submit" method="POST">
                            <input type="hidden" name="access_key" value="0480d0f5-489a-45c9-b887-6ab22982d3b2" />
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="form-group">
                                        <input type="text" name="name" className="form-control" id="name" required placeholder="Eg: Sara Rossi" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="form-group">
                                        <input type="email" name="email" className="form-control" id="email" required placeholder="esempio@google.com" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="form-group">
                                        <input type="text" name="phone_number" className="form-control" id="phone_number" required placeholder="Inserisci il tuo numero" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="form-group">
                                        <input type="text" name="msg_subject" className="form-control" id="msg_subject" placeholder="Inserisci l'argomento della richiesta" required />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <textarea name="message" id="message" className="form-control" cols="30" rows="6" required  placeholder="Scrivi un messaggio..."></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <button type="submit" className="default-btn">
                                        <i className='bx bx-paper-plane'></i> Invia messaggio
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                {/* <div className="maps">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46660.669043361966!2d-76.17429939609431!3d43.03529129888566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d9f3b8019f2991%3A0x58d5929e21a62e5!2sDinosaur%20Bar-B-Que!5e0!3m2!1sen!2sbd!4v1593527523138!5m2!1sen!2sbd"></iframe>
                </div> */}
            </div>
        </>
    )
}

export default ContactForm;