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
                                    <img src="/images/blog/blog1.jpg" alt="blog-details" />
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
                                                <Link href="/blog-details">
                                                    <a>(4) Comments</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <h4>L’importanza di un team coeso nella gestione di un’attività</h4>
                                        <p>
                                        <span>E’ indubbio che un </span><span>team coeso</span><span>&nbsp;rappresenta una </span><span>caratteristica fondamentale di un’attività di successo</span>
                                        <span>; questa è senza dubbio la ricetta di una squadra che funziona. Ecco perché, al fine di avviare un’attività che possa rivelarsi vincente, </span>
                                        <span>obiettivo primario</span><span>&nbsp;è </span><span>alimentare rapporti funzionali fra i membri del proprio team</span>
                                        <span>. Si tratta, infatti, di uno degli elementi chiave di ogni piano di comunicazione interna che si rispetti.</span>
                                        </p>
                                        <p>
                                        <span>Il primo passo fondamentale è quello di </span><span>creare advocacy</span><span>&nbsp;nei propri dipendenti. Nel concreto si tratta di </span>
                                        <span>rendere il proprio team portavoce dei valori aziendali</span>
                                        <span>, trasmettendo gli ideali positivi dell’attività, facendo in modo che il luogo di lavoro venga identificato come un luogo caratterizzato da clima positivo e valori condivisibili.</span>
                                        </p>
                                        <p>
                                        <span>
                                            E’ esemplare, in tal senso, il piano di comunicazione interna “Avanti e Veloci” ideato da Marchionne; l’uomo si stupì, infatti, di quanto poco orgogliosi fossero i suoi dipendenti di lavorare
                                            per la Fiat. &nbsp;Addirittura si racconta che preferissero comprare altre automobili, tale era la loro sottostima per il marchio. Marchionne decise allora di rivoluzionare completamente l’ambiente di lavoro con una
                                            serie di iniziative di comunicazione interna che ebbero il risultato di favorire il coinvolgimento del suo team nei processi di creazione aziendale. Una delle iniziative di maggior successo fu “Venditori per un
                                            giorno”, in cui i dipendenti della fabbrica vennero invitati a provare le auto che producevano.
                                        </span>
                                        </p>
                                        <p>
                                        <span>Iniziative di comunicazione interna</span><span>&nbsp;di questo tipo </span><span>sono esempi concreti di quello che significa creare un gruppo coeso e partecipativo</span>
                                        <span>&nbsp;che è realmente interessato nel buon funzionamento del lavoro che svolge.</span>
                                        </p>
                                        {/* <p className="c2 c5"><span /></p> */}
                                        <p>
                                        <span>L’uomo è poi un animale sociale; questo significa che </span><span>sentirsi parte del gruppo di lavoro è fondamentale</span>
                                        <span>
                                            &nbsp;poiché le dinamiche di disgregazione sociale proprie di ogni ambiente possono impattare negativamente sul lavoro della propria attività. Come fare in modo che le persone si sentano un gruppo coeso?
                                            Valorizzando i singoli membri, tenendo presente la percezione degli individui in merito alla qualità dell’ambiente di lavoro. Nel concreto, questo significa
                                        </span>
                                        <span>raccogliere feedback</span><span>, </span><span>attuare una leadership</span><span>&nbsp;che sia il più possibile </span><span>partecipativa </span>
                                        <span>e </span><span>stabilire obiettivi </span><span>in modo che siano il più possibile </span><span>calibrati </span>
                                        <span>all’interno del proprio team.</span>
                                        </p>
                                        {/* <p className="c2 c5"><span /></p> */}
                                        <p>
                                        <span>Un ulteriore suggerimento, che viene dall’esempio di grandi aziende come Google, è </span><span>non sottovalutare l’importanza dell’aspetto ludico nel lavoro</span>
                                        <span>; è dimostrato, infatti, che svolgere insieme attività ricreative (tornei sportivi, visite guidate, gite) incrementa le chance di fraternizzare ed alleggerire le tensioni lavorative.</span>
                                        </p>
                                        <p><span>Provare per credere!</span></p>
                                    </div>

                                <div className="article-footer">
                                    <div className="post-author-meta">
                                        <div className="d-flex align-items-center">
                                            <img src="/images/user/user6.jpg" alt="user" />
                                            <div className="title">
                                                <span className="name">
                                                    By <Link href="/blog-grid"><a>EnvyTheme</a></Link>
                                                </span>
                                                <span className="date">March 17, 2021</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="article-share">
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
                                    </div>
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
                                                    <Link href="/blog-details">
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
                                                            <Link href="/blog-details">
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
                                                                    <Link href="/blog-details">
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
                                                    <Link href="/blog-details">
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
                                                            <Link href="/blog-details">
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