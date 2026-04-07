import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../assets/style/home.css';
import { FaArrowDown } from "react-icons/fa6";

const Home = () => {
    const containerRef = useRef(null);
    const contentRef = useRef(null);
    const bgRef = useRef(null);
    const cubeRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.from(".hero-title", {
                duration: 1.5,
                y: 100,
                opacity: 0,
                rotationX: -45,
                transformOrigin: "0% 50% -50",
                ease: "expo.out",
                stagger: 0.2
            })
                .from(".hero-sub", {
                    duration: 1,
                    opacity: 0,
                    z: -500,
                    ease: "power3.out"
                }, "-=0.8");


            tl.from(cubeRef.current, {
                opacity: 0,
                scale: 0.5,
                z: -1000,
                duration: 2,
                ease: "power3.out"
            }, "-=1.5");

            gsap.to(".cube-group", {
                rotationX: 360,
                rotationY: -360,
                duration: 20,
                repeat: -1,
                ease: "none"
            });

            const handleMouseMove = (e) => {
                const { clientX, clientY } = e;
                const { innerWidth, innerHeight } = window;

                const xPosText = (clientX / innerWidth - 0.5) * 30;
                const yPosText = (clientY / innerHeight - 0.5) * 30;

                const xPosCube = (clientX / innerWidth - 0.5) * -100;
                const yPosCube = (clientY / innerHeight - 0.5) * -100;

                gsap.to(contentRef.current, {
                    rotationY: xPosText,
                    rotationX: -yPosText,
                    transformPerspective: 1000,
                    ease: "power2.out",
                    duration: 0.6
                });

                gsap.to(cubeRef.current, {
                    x: xPosCube,
                    y: yPosCube,
                    rotationX: -yPosText * 0.5,
                    rotationY: xPosText * 0.5,
                    ease: "power3.out",
                    duration: 1
                });
            };

            window.addEventListener('mousemove', handleMouseMove);
            return () => window.removeEventListener('mousemove', handleMouseMove);
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} style={{ overflow: 'hidden', height: '100vh', backgroundColor: '#0a0a0a', perspective: '1500px' }}>
            <div ref={bgRef} style={{ position: 'absolute', top: '-10%', left: '-10%', width: '120%', height: '120%', background: 'radial-gradient(circle, rgba(40,40,80,0.3) 0%, rgba(0,0,0,0) 70%)', zIndex: 0 }} />

            {/* <div ref={cubeRef} className="cube-container">
                <div className="cube-group">
                    <div className="cube-face front"></div>
                    <div className="cube-face back"></div>
                    <div className="cube-face right"></div>
                    <div className="cube-face left"></div>
                    <div className="cube-face top"></div>
                    <div className="cube-face bottom"></div>
                </div>
            </div> */}

            <div className="d-flex row align-items-center justify-content-center" style={{ height: '80vh', position: 'relative', zIndex: 1 }}>
                <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center' style={{ zIndex: 1 }}>
                    <div ref={contentRef} className="text-center" style={{ zIndex: 1, transformStyle: 'preserve-3d' }}>
                        <h1 className='align-items-start text-white justify-content-start'>Hello, I'm</h1>
                        <h1 className="hero-title display-1 fw-bold mb-0" style={{ textShadow: '0 20px 50px rgba(2, 2, 2, 0.5)' }}>Reyansh Raut</h1>
                        <div className="hero-sub" style={{ transform: 'translateZ(50px)' }} >
                            <h3 className="text-info opacity-75 fw-light ls-wider mt-2">Web Developer</h3>
                            <hr className="bg-info mx-auto" style={{ width: '50px', height: '2px' }} />
                        </div>
                    </div>
                    <button className='btn download-resume-btn bg-transparent text-white rounded-3 mt-3 pt-2 pb-2 ps-3 pe-3'>Download Resume <FaArrowDown /></button>
                </div>
                <div className="col-lg-6 d-flex justify-content-center" style={{ zIndex: 1}}>
                    <div className='border profile-image d-flex justify-content-center border-1 rounded-circle' style={{ width: '300px', height: '300px' }}></div>
                </div>
            </div>
        </div>
    );
};

export default Home;