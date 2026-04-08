import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import '../assets/style/projects.css';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    const projectData = [
        {
            id: 1,
            title: "Cosmetic Inventory Management System",
            category: "Ecommerce",
            tech: ["React", "PHP", "MySQL"],
            image: "https://via.placeholder.com/600x400/1a1a1a/9DFF2F?text=Project+1"
        },
        {
            id: 2,
            title: "Cold Drink",
            category: "Animation / Interactive",
            tech: ["HTML", "GSAP"],
            image: "https://via.placeholder.com/600x400/1a1a1a/9DFF2F?text=Project+2"
        },
        {
            id: 3,
            title: "Portfolio",
            category: "Interactive / Personal",
            tech: ["React", "GSAP"],
            image: "https://via.placeholder.com/600x400/1a1a1a/9DFF2F?text=Project+3"
        },
        {
            id: 4,
            title: "Cold Drink",
            category: "Animation / Interactive",
            tech: ["HTML", "GSAP"],
            image: "https://via.placeholder.com/600x400/1a1a1a/9DFF2F?text=Project+2"
        },
    ];

    useEffect(() => {
        const pin = gsap.fromTo(
            sectionRef.current,
            { translateX: 0 },
            {
                translateX: "-200vw", 
                ease: "none",
                duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "2000 top", 
                    scrub: 0.6,
                    pin: true,
                    anticipatePin: 1,
                },
            }
        );
        return () => pin.kill();
    }, []);

    return (
        <section className="projects-outer-container">
            <div ref={triggerRef}>
                <div ref={sectionRef} className="projects-inner-horizontal">
                    
                    <div className="project-slide d-flex align-items-center justify-content-center">
                        <div className="text-center">
                            <h2 className="display-1 fw-bold text-white">SELECTED<br /><span className="text-primary-neon">WORKS</span></h2>
                            <p className="text-dim mt-4">Scroll Down to Explore &rarr;</p>
                        </div>
                    </div>

                    {projectData.map((project) => (
                        <div key={project.id} className="project-slide">
                            <div className="project-modern-card">
                                <div className="row">
                                    <div className="col-md-7 h-100">
                                        <div className="project-image-wrapper">
                                            <img src={project.image} alt={project.title} className="img-fluid" />
                                            <div className="project-overlay">
                                                <button className="btn-view">View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5 d-flex align-items-center p-5">
                                        <div className="project-content">
                                            <span className="text-primary-neon fw-bold">{project.category}</span>
                                            <p className="display-6 fw-bold text-white mt-2 mb-4">{project.title}</p>
                                            <div className="d-flex gap-2 mb-4">
                                                {project.tech.map((t, i) => (
                                                    <span key={i} className="tech-badge">{t}</span>
                                                ))}
                                            </div>
                                            <div className="d-flex gap-3">
                                                <a href="#" className="icon-btn"><FaGithub /></a>
                                                <a href="#" className="icon-btn"><FaExternalLinkAlt /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Projects;