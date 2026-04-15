import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; 
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'; 
import '../assets/style/home.css';
import { FaArrowDown, FaArrowRight } from "react-icons/fa6";

gsap.registerPlugin(ScrollToPlugin);

const Home = () => {
    const containerRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.from(".reveal-text", {
                y: 120,
                skewY: 7,
                stagger: 0.15,
                duration: 1.2,
                ease: "expo.out"
            })
            .from(".sub-info", {
                opacity: 0,
                y: 20,
                duration: 0.8
            }, "-=0.8")
            .from(".description-box", { 
                opacity: 0,
                y: 20,
                duration: 0.8
            }, "-=0.5")
            .from(".cta-wrapper", { 
                opacity: 0,
                scale: 0.9,
                duration: 0.5
            }, "-=0.3")
            .from(".visual-element", {
                scale: 0.8,
                opacity: 0,
                duration: 1.5,
                ease: "power4.out"
            }, "-=1");

            gsap.to(".bg-circle", {
                x: "random(-100, 100)",
                y: "random(-100, 100)",
                duration: 5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const handleViewProjects = () => {
        gsap.to(window, {
            duration: 1,
            scrollTo: { y: "#projects", offsetY: 50 },
            ease: "power4.inOut"
        });
    };

    const handleGetResume = () => {
        navigate('/resume');
    };

    return (
        <div ref={containerRef} className="home-root pb-5" id="home">
            <div className="bg-circle" />
            <div className="noise-overlay" />

            <div className="main-content mt-5">
                <div className="px-md-5 container-fluid">
                    <div className="row align-items-center">
                        
                        <div className="col-lg-9">
                            <div className="hero-content">
                                <div className="tagline-wrapper mt-0 mb-3">
                                    <span className="sub-info text-primary-color text-uppercase ls-2">Based in India</span>
                                    <span className="sub-info text-dim ms-4">Open to Work</span>
                                </div>

                                <div className="title-mask">
                                    <h1 className="reveal-text main-heading mb-1">Architecting</h1>
                                </div>
                                <div className="title-mask">
                                    <h1 className="reveal-text main-heading highlight mb-1">Digital</h1>
                                </div>
                                <div className="title-mask">
                                    <h1 className="reveal-text main-heading">Solutions</h1>
                                </div>

                                <div className="description-box mt-4">
                                    <p className="hero-p">
                                        I am <span className="name-bold text-white">Reyansh Raut</span>, a Full-Stack Developer 
                                        obsessed with building scalable interfaces and pixel-perfect experiences. 
                                        Blending logic with aesthetics to solve complex problems.
                                    </p>
                                </div>

                                <div className="cta-wrapper mt-5 d-flex align-items-center gap-4">
                                    <button className="btn-main" onClick={handleViewProjects}>
                                        View Projects <FaArrowRight className="ms-2 arrow-icon" />
                                    </button>
                                    
                                    <button className="btn get-resume-button btn-translate btn-outline-secondary border-secondary p-3 text-white" onClick={handleGetResume}>
                                        Get Resume <FaArrowDown className="ms-2" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 d-none d-lg-block">
                            <div className="visual-element" style={{transform:'translate(-98px, 0px)'}}>
                                <div className="rotating-border" />
                                <div className="profile-mask">
                                    <div className="profile-img-bg" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="bottom-bar d-none d-md-flex mt-5 pt-5">
                <div className="stat-item sub-info">
                    <span className="stat-num fw-bold text-white">01+</span>
                    <span className="stat-label text-dim ms-2">Year Exp.</span>
                </div>
                <div className="stat-item sub-info ms-5">
                    <span className="stat-num fw-bold text-white">03+</span>
                    <span className="stat-label text-dim ms-2">Projects</span>
                </div>
            </div>
        </div>
    );
};

export default Home;