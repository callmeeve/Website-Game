const Footer = () => {
    return (
        <>
            <section className="text-white mt-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="lc-block mb-4">
                                <img className="img-fluid" alt="logo" src="/logo.svg" style={{ maxHeight: '10vh' }} />
                            </div>
                            <div className="lc-block small">
                                <div editable="rich">
                                    <p className="fw-display">Get actionable tips on how to increase sales and conversions with design!</p>
                                </div>
                            </div>
                            {/* /lc-block */}
                            <div className="lc-block">
                                <button className="btn" id="pricing">Read Now</button>
                            </div>
                        </div>
                        <div className="col-lg-2 offset-lg-1">
                            <div className="lc-block mb-4">
                                <div editable="rich">
                                    <h4>Services</h4>
                                </div>
                            </div>
                            {/* /lc-block */}
                            <div className="lc-block small text-white-50">
                                <div editable="rich">
                                    <p>Our Work</p>
                                    <p>Our Platform
                                        <br />
                                    </p>
                                    <p>Testimonials</p>
                                    <p>Pricing</p>
                                </div>
                            </div>
                            {/* /lc-block */}
                        </div>
                        <div className="col-lg-2 offset-lg-1">
                            <div className="lc-block mb-4">
                                <div editable="rich">
                                    <h4>Company</h4>
                                </div>
                            </div>
                            {/* /lc-block */}
                            <div className="lc-block small text-white-50">
                                <div editable="rich">
                                    <p>About Us</p>
                                    <p>Careers</p>
                                    <p>Blog</p>
                                    <p>Case Studies</p>
                                </div>
                            </div>
                            {/* /lc-block */}
                        </div>
                        <div className="col-lg-2 offset-lg-1">
                            <div className="lc-block mb-4">
                                <div editable="rich">
                                    <h4>Resources</h4>
                                </div>
                            </div>
                            {/* /lc-block */}
                            <div className="lc-block small text-white-50">
                                <div editable="rich">
                                    <p>Blog</p>
                                    <p>Templates</p>
                                    <p>Illustration Packs</p>
                                    <p>Lifetime Acces</p>
                                </div>
                            </div>
                            {/* /lc-block */}
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="py-3 container">
                    <div className="row">
                        <div className="col-6 small">
                            <div className="lc-block fw-display">
                                <div editable="rich">
                                    <p>Copyright © Pixel True 2020</p>
                                </div>
                            </div>
                            {/* /lc-block */}
                        </div>
                        <div className="col-6 text-end small">
                            <div className="lc-block">
                                <div editable="rich">
                                    <p>
                                        <a className="text-decoration-none" href="#">License Details</a> -
                                        <a className="text-decoration-none" href="#">Terms &amp; Conditions</a>
                                    </p>
                                </div>
                            </div>
                            {/* /lc-block */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Footer;