import React from 'react'
import Head from "next/head"
import GoTop from './GoTop'
// import Preloader from './Preloader'

const Layout = ({ children }) => {

    // Preloader
    // const [loader, setLoader] = React.useState(true);
    // React.useEffect(() => {
    //     setTimeout(() => setLoader(false), 450);
    // }, [])

    return(
        <>
            <Head>
                {/* Required meta tags */}
                <meta charSet="utf-8" />
                <meta http-equiv="content-language" content="it" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="Boostertivity, Consulenza, Web, Strategy, Strategia, Boost, Activity" />
                <meta name="author" content="Checkup Digitale" />
                <meta property="og:title" content="Boostertivity | La tua consulenza strategica" /> 
                <meta property="og:description" content="Prendo in esame la tua attività imprenditoriale e applico delle leve volte a migliorare la qualità del lavoro" />
                <meta property="og:url" content="http://boostertivity.it"/>
                <meta property="og:site_name" content="Boostertivity"/>
                <meta name="twitter:card" content="grow_your_busines" />
                <meta name="twitter:title" content="Boostertivity | La tua consulenza strategica" />
                <meta name="twitter:description" content="Prendo in esame la tua attività imprenditoriale e applico delle leve volte a migliorare la qualità del lavoro" />
                <meta name="twitter:image" content="http://boostertivity.it/images/blog/blog4.jpg" />
                <title>Boostertivity - La tua consulenza strategica</title>
                <meta name="description" content="La tua consulenza strategica digitale, boost your activity" />
                <meta name="audience" content="Everyone" />   

            </Head>

            {children}

            {/* {loader ? <Preloader /> : null} */}
 
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </>
    );
}

export default Layout;