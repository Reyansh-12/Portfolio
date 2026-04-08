import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../assets/style/home.css';
import { FaArrowDown, FaArrowRight } from "react-icons/fa6";

const Home = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);

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

    return (
        <div ref={containerRef} className="home-root">
            <div className="bg-circle" />
            <div className="noise-overlay" />

            <div className="main-content">
                <div className=" px-md-5">
                    <div className="row align-items-center">
                        
                        <div className="col-lg-9 ">
                            <div className="hero-content">
                                <div className="tagline-wrapper mt-0 mb-3">
                                    <span className="sub-info text-primary-color">Based in India</span>
                                    <span className="sub-info text-dim ms-4">Open to Work</span>
                                </div>

                                <div className="title-mask">
                                    <h1 className="reveal-text main-heading mb-3" style={{fontSize:'60px'}}>Architecting</h1>
                                </div>
                                <div className="title-mask">
                                    <h1 className="reveal-text main-heading highlight mb-3" style={{fontSize:'118px'}}>Digital</h1>
                                </div>
                                <div className="title-mask">
                                    <h1 className="reveal-text main-heading" style={{fontSize:'79px'}}>Solutions</h1>
                                </div>

                                <div className="description-box mt-4">
                                    <p className="hero-p">
                                        I am <span className="name-bold">Reyansh Raut</span>, a Full-Stack Developer 
                                        obsessed with building scalable interfaces and pixel-perfect experiences. 
                                        Blending logic with aesthetics to solve complex problems.
                                    </p>
                                </div>

                                <div className="cta-wrapper mt-5 d-flex align-items-center gap-4">
                                    <button className="btn-main">
                                        View Projects <FaArrowRight className="ms-2" />
                                    </button>
                                    <button className="btn get-resume-button btn-success bg-transparent p-3">
                                        Get Resume <FaArrowDown className="ms-2" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 d-none d-lg-block">
                            <div className="visual-element">
                                <div className="rotating-border" />
                                <div className="profile-mask">
                                    <div className="profile-img-bg" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="bottom-bar d-none d-md-flex">
                <div className="stat-item">
                    <span className="stat-num">01+</span>
                    <span className="stat-label">Years Exp.</span>
                </div>
                <div className="stat-item">
                    <span className="stat-num">03+</span>
                    <span className="stat-label">Projects</span>
                </div>
            </div>
        </div>
    );
};

export default Home;