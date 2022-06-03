import React from 'react'
import NavbarStyleOne from '@/components/_App/NavbarStyleOne'
import PageBannerStyle1 from '@/components/Common/PageBannerStyle1'
import BlogSidebar from '@/components/Blog/BlogSidebar'
import RelatedPost from '@/components/Blog/RelatedPost'
import FooterStyleOne from '@/components/_App/FooterStyleOne'
import Link from 'next/link'
 
const BlogGrid = () => {
    return (
        <>
            <NavbarStyleOne /> 

            <PageBannerStyle1 
                pageTitle="Blog Grid"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Blog Grid"
            />

            <div className="blog-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="blog-details-desc">
                                <div className="article-image">
                                    <Link href="/blog-grid">
                                        <a className="tag">Branding</a>
                                    </Link>
                                    <img src="/images/blog/blog2.jpg" alt="blog-details" />
                                </div>

                                <div className="article-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li>
                                                <i className="ri-calendar-2-line"></i>
                                                March 14, 2021
                                            </li>
                                            <li>
                                                <i className="ri-message-2-line"></i>
                                                <Link href="/blog-details2">
                                                    <a>(4) Comments</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <h4>DISTINGUERE PREGI E DIFETTI DELLA PROPRIA ATTIVITA’</h4>
                                        <p>Gestire un’attività è un’impresa tutt’altro che semplice; questo perché è richiesta una spiccata capacità di problem solving che sia multifunzionale. Nel concreto, si tratta di essere in grado di individuare le problematiche di maggiore rilievo ed essere in grado di gestirle; inoltre, è anche una buona idea cercare di identificare e tenere sotto controllo quegli elementi che si ritiene potrebbero rappresentare problemi futuri che emergeranno.
                                            Insomma, distinguere pregi e difetti della propria attività è essenziale a livello identitario; ma qual è il modo migliore per farlo?
                                        </p>
                                        <p>La prima cosa da fare è sempre quella di coinvolgere attivamente il proprio team. Sarebbe bene, infatti, valutare l’idea di abbandonare una struttura troppo gerarchica in favore di una leadership che sia partecipativa. Includere i propri dipendenti nelle decisioni, favorendo la possibilità di valutare l’azienda nei suoi punti di forza e di debolezza. Avere il punto di vista di chi svolge le differenti mansioni ci può essere di grande aiuto per capire se ci sono elementi da migliorare che, dalla nostra posizione, non avevamo considerato.
                                        </p>
                                        <p>Un’ulteriore misura d’analisi, utilissima questa nella gestione (anche preventiva) di momenti di crisi, è quella della matrice. La matrice di materialità è uno strumento fondamentale perché è in grado di far convergere le opinioni di tutti coloro che gravitano intorno all’attività (dipendenti, fornitori, clienti, eventuali partner commerciali). Attraverso lo stakeholder engagement si ottengono quattro stadi di valutazione del livello di problematiche/difetti della propria attività, con gli occhi delle differenti personalità intorno all’attività. Saremo così in grado di stabilire i maggiori problemi che abbiamo con i fornitori, le critiche dei clienti, stabilendo così una scala di importanza in ordine di risoluzione delle nostre criticità.
                                        Nel concreto, questo strumento si realizza graficamente attraverso due assi: verticalmente si fa riferimento agli argomenti rilevanti per gli stakeholder; orizzontalmente si fa lo stesso con gli argomenti principalmente interessanti per la nostra attività. Alle estremità troveremo gli elementi convergenti più salienti a cui prestare attenzione.
                                        </p>
                                        <p>Altri due fondamentali strumenti sono: il bilancio integrato e la misurazione della performance. Per ciò che concerne quest’ultima, siamo oggi facilitati dal web. Una presenza online può infatti aiutarci a stabilire il “ritorno” del nostro processo comunicativo tramite l’analytics. Se ci prefiggiamo degli obiettivi comunicativi che colpiscano un target, saremo dunque in grado di comprendere in maniera piuttosto accurata quanto questo tipo di processo comunicativo sia stato recepito.
                                            Addentrandoci nello strumento di bilancio, possiamo in breve affermare che questo contiene una lista di tutte le entrate e le uscite della nostra attività e dello stato patrimoniale dell’azienda. Negli ultimi anni, questo tipo di bilancio esclusivamente incentrato sull’aspetto finanziario ha lasciato il posto ad un bilancio di tipo integrato; vale a dire che, nell’analisi della gestione aziendale, oggi si tende a porre in rilievo anche ciò che concerne gli aspetti sociali (l’essere socialmente responsabile e sostenibile, ad esempio).</p>
                                    <p>In ultimo, un elemento oggi molto importante è il risultato del RepTrak; si tratta del modello più utilizzato al mondo per valutare la reputazione aziendale (fattore decisamente non ignorabile nel mondo odierno). Questo strumento racchiude una stima in merito ai seguenti aspetti: prodotti e servizi, livello d’innovazione, qualità dell’ambiente lavorativo, eticità della governance, responsabilità sociale, leadership e performance.
                                    </p>
                                    <p>Utilizzare questo tipo di strumenti può darci una panoramica completa di quelli che sono i punti di forza e debolezza della nostra attività.
                                    </p>
                                    </div>

                                <div className="article-footer">
                                    <div className="post-author-meta">
                                        <div className="d-flex align-items-center">
                                            <img src="/images/user/user6.jpg" alt="user" />
                                            <div className="title">
                                                <span className="name">
                                                    By <Link href="/blog-grid"><a>Boostertivity</a></Link>
                                                </span>
                                                <span className="date">March 17, 2021</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="article-share">
                                        <ul className="social">
                                            <li><span>Share:</span></li>
                                            <li>
                                                <a href="https://www.facebook.com/" className="facebook" target="_blank">
                                                    <i className="ri-facebook-fill"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.linkedin.com/" className="twitter" target="_blank">
                                                    <i className="ri-linkedin-fill"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://twitter.com/" className="linkedin" target="_blank">
                                                    <i className="ri-twitter-fill"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.instagram.com/" className="instagram" target="_blank">
                                                    <i className="ri-instagram-line"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div> */}
                                </div>
                                
                                {/* Related Blog Post */}
                                {/* <RelatedPost /> */}

                                {/* <div className="comments-area">
                                    <h3 className="comments-title">2 Comments:</h3>

                                    <ol className="comment-list">
                                        <li className="comment">
                                            <div className="comment-body">
                                                <footer className="comment-meta">
                                                    <div className="comment-author vcard">
                                                        <img src="/images/user/user1.jpg" className="avatar" alt="user" />
                                                        <b className="fn">John Jones</b>
                                                    </div>
                                                    <div className="comment-metadata">
                                                        <span>January 01, 2021 at 10:59 am</span>
                                                    </div>
                                                </footer>
                                                <div className="comment-content">
                                                    <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                                </div>
                                                <div className="reply">
                                                    <Link href="/blog-details2">
                                                        <a className="comment-reply-link">Reply</a>
                                                    </Link>
                                                </div>
                                            </div>

                                            <ol className="children">
                                                <li className="comment">
                                                    <div className="comment-body">
                                                        <footer className="comment-meta">
                                                            <div className="comment-author vcard">
                                                                <img src="/images/user/user2.jpg" className="avatar" alt="user" />
                                                                <b className="fn">Steven Smith</b>
                                                            </div>
                                                            <div className="comment-metadata">
                                                                <span>January 02, 2021 at 21:59 am</span>
                                                            </div>
                                                        </footer>
                                                        <div className="comment-content">
                                                            <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                                        </div>
                                                        <div className="reply">
                                                            <Link href="/blog-details2">
                                                                <a className="comment-reply-link">Reply</a>
                                                            </Link>
                                                        </div>
                                                    </div>

                                                    <ol className="children">
                                                        <li className="comment">
                                                            <div className="comment-body">
                                                                <footer className="comment-meta">
                                                                    <div className="comment-author vcard">
                                                                        <img src="/images/user/user3.jpg" className="avatar" alt="user" />
                                                                        <b className="fn">Sarah Taylor</b>
                                                                    </div>
                                                                    <div className="comment-metadata">
                                                                        <span>January 03, 2021 at 05:59 am</span>
                                                                    </div>
                                                                </footer>
                                                                <div className="comment-content">
                                                                    <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                                                </div>
                                                                <div className="reply">
                                                                    <Link href="/blog-details2">
                                                                        <a className="comment-reply-link">Reply</a>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ol>
                                                </li>
                                            </ol>
                                        </li>

                                        <li className="comment">
                                            <div className="comment-body">
                                                <footer className="comment-meta">
                                                    <div className="comment-author vcard">
                                                        <img src="/images/user/user4.jpg" className="avatar" alt="user" />
                                                        <b className="fn">John Doe</b>
                                                    </div>
                                                    <div className="comment-metadata">
                                                        <span>January 04, 2021 at 05:59 am</span>
                                                    </div>
                                                </footer>
                                                <div className="comment-content">
                                                    <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                                </div>
                                                <div className="reply">
                                                    <Link href="/blog-details2">
                                                        <a className="comment-reply-link">Reply</a>
                                                    </Link>
                                                </div>
                                            </div>

                                            <ol className="children">
                                                <li className="comment">
                                                    <div className="comment-body">
                                                        <footer className="comment-meta">
                                                            <div className="comment-author vcard">
                                                                <img src="/images/user/user1.jpg" className="avatar" alt="user" />
                                                                <b className="fn">James Anderson</b>
                                                            </div>
                                                            <div className="comment-metadata">
                                                                <span>January 05, 2021 at 04:59 am</span>
                                                            </div>
                                                        </footer>
                                                        <div className="comment-content">
                                                            <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                                        </div>
                                                        <div className="reply">
                                                            <Link href="/blog-details2">
                                                                <a className="comment-reply-link">Reply</a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ol>
                                        </li>
                                    </ol>

                                    <div className="comment-respond">
                                        <h3 className="comment-reply-title">Leave A Reply</h3>
                                        <form className="comment-form">
                                            <p className="comment-notes">
                                                <span id="email-notes">Your email address will not be published.</span>
                                                Required fields are marked <span className="required">*</span>
                                            </p>
                                            <p className="comment-form-author">
                                                <label>Name <span className="required">*</span></label>
                                                <input type="text" id="author" placeholder="Your Name*" name="author" required="required" />
                                            </p>
                                            <p className="comment-form-email">
                                                <label>Email <span className="required">*</span></label>
                                                <input type="email" id="email" placeholder="Your Email*" name="email" required="required" />
                                            </p>
                                            <p className="comment-form-url">
                                                <label>Website</label>
                                                <input type="url" id="url" placeholder="Website" name="url" />
                                            </p>
                                            <p className="comment-form-comment">
                                                <label>Comment</label>
                                                <textarea name="comment" id="comment" cols="45" placeholder="Your Comment..." rows="5" maxLength="65525" required="required"></textarea>
                                            </p>
                                            <p className="comment-form-cookies-consent">
                                                <input type="checkbox" value="yes" name="comment-cookies-consent" id="comment-cookies-consent" />
                                                <label htmlFor="comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label>
                                            </p>
                                            <p className="form-submit">
                                                <input type="submit" name="submit" id="submit" className="submit" value="Post A Comment" />
                                            </p>
                                        </form>
                                    </div>
                                </div> */}
                            </div>
                        </div>

                        {/* <div className="col-lg-4 col-md-12">
                            <div className="right-sidebar">
                                <BlogSidebar />
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
  
            <FooterStyleOne />
        </>
    )
}

export default BlogGrid;