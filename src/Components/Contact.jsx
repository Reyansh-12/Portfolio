import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi";
import '../assets/style/contact.css';

const Contact = () => {
    const contactRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1 } });

            tl.from(".contact-title", { opacity: 0, y: 50 })
              .from(".info-item", { opacity: 0, x: -30, stagger: 0.1 }, "-=0.6")
              .from(".contact-form", { opacity: 0, scale: 0.95 }, "-=0.8")
              .from(".social-icon", { opacity: 0, y: 20, stagger: 0.1 }, "-=0.5");
        }, contactRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={contactRef} className="contact-section">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-5">
                        <div className="contact-info-wrap">
                            <h2 className="contact-title display-4 fw-bold text-white mb-4">
                                Let’s Build Something <span className="text-primary-neon">Great.</span>
                            </h2>
                            <p className="text-dim mb-5">
                                Whether you have a specific project in mind or just want to chat about 
                                3D web development or full-stack systems, I'm always open to new opportunities.
                            </p>

                            <div className="info-list">
                                <div className="info-item">
                                    <div className="info-icon"><FaEnvelope /></div>
                                    <div>
                                        <p className="info-label">Email Me</p>
                                        <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new" className="info-link">reyanshraut785@gmail.com</a>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="info-icon"><FaMapMarkerAlt /></div>
                                    <div>
                                        <p className="info-label">Location</p>
                                        <span className="info-text">Nagpur, Maharashtra, India</span>
                                    </div>
                                </div>
                            </div>

                            <div className=" mt-5">
                                <p className="text-uppercase ls-2 small-text mb-3">Follow Me</p>
                                <div className="d-flex gap-3">
                                    <a href="https://www.linkedin.com/in/reyansh-raut-dev/" className="social-icon"><FiLinkedin /></a>
                                    <a href="https://github.com/Reyansh-12" className="social-icon"><FiGithub /></a>
                                    <a href="https://www.instagram.com/reyansh__r8/" className="social-icon"><FiInstagram /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="contact-form-card">
                            <form className="contact-form">
                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <div className="input-group-modern">
                                            <input type="text" placeholder="Full Name" required />
                                            <span className="focus-border"></span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-group-modern">
                                            <input type="email" placeholder="Email Address" required />
                                            <span className="focus-border"></span>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group-modern">
                                            <input type="text" placeholder="Subject" />
                                            <span className="focus-border"></span>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group-modern">
                                            <textarea className='mb-0' placeholder="Tell me about your project..." rows="5" required></textarea>
                                            <span className="focus-border"></span>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn-send-modern">
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;