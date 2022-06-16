import React from 'react'
import NavbarStyleOne from '@/components/_App/NavbarStyleOne'
import PageBannerStyle1 from '@/components/Common/PageBannerStyle1'
import FunfactStyleOne from '@/components/Common/FunfactStyleOne'
import AppProgressStyle2 from '@/components/Common/AppProgressStyle2'
import SoftwareIntegrationsTwo from '@/components/Common/SoftwareIntegrationsTwo'
import TeamMemberStyle1 from '@/components/Common/TeamMemberStyle1'
import PartnerStyle3 from '@/components/Common/PartnerStyle3'
import ClientFeedbackStyle1 from '@/components/Feedbacks/ClientFeedbackStyle1'
import FooterStyleOne from '@/components/_App/FooterStyleOne'
import Link from 'next/link'
import ScrollAnimation from 'react-animate-on-scroll'
 
const AboutSimple = () => {
    return (
        <>
            <NavbarStyleOne /> 

            <PageBannerStyle1 
                pageTitle="About Us"
                homePageUrl="/"
                homePageText="Home"
                activePageText="About Us"
            />

            <div className="about-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <span className="sub-title">ABOUT BOOSTERTIVITY</span>
                                <h2>Qualche parola su di noi</h2>
                                <p>Sono Eleonora, nata e cresciuta a Milano, accerchiata da una realtà in continuo movimento, ad oggi sono una professionista con esperienza pluriennale nei settori retail e food services.</p>
                                
                                <div className="features-text">
                                    <h6>Vision</h6>
                                    <p>L'evoluzione costante del mio percorso professionale mi ha portata ad esser prima una Store Manager ed ora una cosnulente freelance.</p>
                                    <p>Le conoscenze sono diventate competenze, il mio desiderio è quello di trasmettere all'interno della tua attività</p>
                                </div>
                                <div className="features-text">
                                    <h6>Our Mission</h6>
                                    <p>Desidero affiancarti nel tuo business, aiutarti con il Team, consigliarti al meglio, affinché i Clienti siano pienamente soddisfatti e possano tornare, memori di una piacevole esperienza.</p>
                                    <p>Come funziona? Prendo in esame la tua attività imprenditoriale e applico delle leve volte a migliorare la qualità del lavoro quotidiano e l aquantità di Clienti interessati</p>
                                    <p>Bostertivity per un'esperienza di gestione migliore</p>
                                </div>

                                <div className="btn-box">
                                    <Link href="/contact">
                                        <a className="default-btn">Non esitare a contattarmi</a>
                                    </Link>
                                    <Link href="/">
                                        <a className="link-btn">See All Features</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <ScrollAnimation animateIn='fadeInUp'>
                                    <img src="/images/app/app-img7.png" alt="about" />
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <FunfactStyleOne />

            <AppProgressStyle2 /> */}

            {/* <div className="stats-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">OUR STATS</span>
                        <h2>Total User In This World</h2>
                    </div>
                    <div className="stats-map text-center">
                        <img src="/images/map.png" alt="map" />
                    </div>
                </div>
            </div>

            <SoftwareIntegrationsTwo />

            <TeamMemberStyle1 />

            <PartnerStyle3 />

            <ClientFeedbackStyle1 /> */}

            <FooterStyleOne />
        </>
    )
}

export default AboutSimple;