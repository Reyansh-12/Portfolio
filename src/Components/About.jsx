import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../assets/style/about.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".timeline-line", {
                scaleY: 0,
                transformOrigin: "top",
                scrollTrigger: {
                    trigger: ".about-container",
                    start: "top 20%",
                    end: "bottom 80%",
                    scrub: 1,
                }
            });

            const cards = gsap.utils.toArray('.reveal-card');
            cards.forEach((card, i) => {
                gsap.from(card, {
                    x: i % 2 === 0 ? -100 : 100,
                    opacity: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="about-container bg-dark py-5 overflow-hidden">
            <h1 className="text-center text-white display-3 fw-bold mb-5 reveal-card">
                About <span className="text-info">Me</span>
            </h1>

            <div className="container position-relative py-5">
                <div className="timeline-line position-absolute start-50 translate-middle-x opacity-25" 
                     style={{ width: '2px', height: '90%', top: '5%' }}></div>

                <div className="row align-items-center">
                    <div className="col-lg-6 reveal-card pe-lg-5">
                        <div className="glass-card p-4 rounded-4 text-white">
                            <h4 className="text-info">Frontend Expertise</h4>
                            <p className="mb-0 opacity-75 text-para">I am a dedicated Frontend Developer with a specialized focus on React.js, committed to engineering web applications that are both highly interactive and performance-optimized. My expertise lies in crafting seamless user experiences by leveraging JavaScript (ES6+), HTML5, and CSS3.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 d-none d-lg-block"></div>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6 d-none d-lg-block"></div>
                    <div className="col-lg-6 reveal-card ps-lg-5">
                        <div className="glass-card p-4 rounded-4 text-white border-end-info">
                            <h4 className="text-info text-lg-start">Animation & UI</h4>
                            <p className="mb-0 opacity-75 text-lg-start text-para">I specialize in creating smooth transitions and sophisticated animations using GSAP. This focus on "Interactivity" ensures that the interfaces I build are not just functional, but also visually captivating and user-centric.</p>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6 reveal-card pe-lg-5">
                        <div className="glass-card p-4 rounded-4 text-white border-start-info">
                            <h4 className="text-info">Full-Stack Foundation</h4>
                            <p className="mb-0 opacity-75 text-para">Beyond the frontend, I possess a strong foundation in PHP and Laravel. During my tenure at Codeberg IT Solutions, I collaborated on building scalable web applications and optimizing MySQL databases.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 d-none d-lg-block"></div>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6 d-none d-lg-block"></div>
                    <div className="col-lg-6 reveal-card ps-lg-5">
                        <div className="glass-card p-4 rounded-4 text-white">
                            <h4 className="text-info text-lg-start">Education & Projects</h4>
                            <p className="mb-0 opacity-75 text-lg-start text-para">I hold a BCA from VMV Engineering College. My portfolio includes complex projects like a Cosmetic Inventory Management System, integrating React frontends with PHP/MySQL backends.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;