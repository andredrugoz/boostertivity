import React from 'react'
import Head from "next/head"
import GoTop from './GoTop'
import Preloader from './Preloader'

const Layout = ({ children }) => {

    // Preloader
    const [loader, setLoader] = React.useState(true);
    React.useEffect(() => {
        setTimeout(() => setLoader(false), 450);
    }, [])

    return(
        <>
            <Head>
                {/* Required meta tags */}
                <meta charSet="utf-8" />
                <meta http-equiv="content-language" content="it" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="Boostertivity, Consulenza, Web, Strategy, Strategia, Boost, Activity" />
                <meta name="author" content="Checkup Digitale" />
                <meta property="og:title" content="Site Title" /> 
                <meta property="og:description" content="La tua consulenza strategica" />
                <meta property="og:url" content="http://boostertivity.it"/>
                <meta property="og:site_name" content="Boostertivity"/>
                <title>Boostertivity - La tua consulenza strategica</title>
            </Head>

            {children}

            {loader ? <Preloader /> : null}
 
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </>
    );
}

export default Layout;