import React from 'react';
import Link from 'next/link';

const BlogPost = () => {
    return (
        <>
            <div className="blog-area pt-100 pb-75">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">BLOG POST</span>
                        <h2>Gli ultimi articoli dal Blog</h2>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="image">
                                    <Link href="/blog-details">
                                        <a className="d-block">
                                            <img src="/images/blog/blog1.jpg" alt="blog" />
                                        </a>
                                    </Link>

                                    <Link href="/blog-grid">
                                        <a className="tag">Branding</a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <ul className="meta">
                                        <li>
                                            <i className="ri-time-line"></i> 
                                            April 14, 2021
                                        </li>
                                       
                                    </ul>
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>L’importanza di un team coeso nella gestione di un’attività</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="image">
                                    <Link href="/blog-details">
                                        <a className="d-block">
                                            <img src="/images/blog/blog2.jpg" alt="blog" />
                                        </a>
                                    </Link>
                                    <Link href="/blog-grid">
                                        <a className="tag">Agency</a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <ul className="meta">
                                        <li>
                                            <i className="ri-time-line"></i> 
                                            April 13, 2021
                                        </li>
                                        
                                    </ul>
                                    <h3>
                                        <Link href="/blog-details2">
                                            <a>Distinguere pregi e difetti della propria attività</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="image">
                                    <Link href="/blog-details">
                                        <a className="d-block">
                                            <img src="/images/blog/blog3.jpg" alt="blog" />
                                        </a>
                                    </Link>
                                    <Link href="/blog-grid">
                                        <a className="tag">Marketing</a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <ul className="meta">
                                        <li>
                                            <i className="ri-time-line"></i> 
                                            April 12, 2021
                                        </li>
                                       
                                    </ul>
                                    <h3>
                                        <Link href="/blog-details3">
                                            <a>Perché un’attività fluida è un’attività vincente?</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogPost;