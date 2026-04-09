import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import '../assets/style/projects.css';
import coldDrinkImage from '../assets/Images/ColdDrink.png';
import inventoryImage from '../assets/Images/CosmelinaCosmetic-Store.png';
import portfolioImage from '../assets/Images/Portfolio.png';
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const containerRef = useRef(null);

    const projectData = [
        {
            id: "01",
            title: "Cosmetic Inventory System",
            category: "Full-Stack Architecture",
            tech: ["React", "PHP", "MySQL", "Tailwind"],
            image: inventoryImage
        },
        {
            id: "02",
            title: "Cold Drink Interactive",
            category: "Motion & Animation",
            tech: ["HTML", "GSAP", "Three.js"],
            image: coldDrinkImage
        },
        {
            id: "03",
            title: "Portfolio",
            category: "Personal Brand",
            tech: ["React", "GSAP", "Vite"],
            image: portfolioImage
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray(".project-item").forEach((item) => {
                const img = item.querySelector(".project-img-inner");
                
                gsap.fromTo(img, 
                    { scale: 1.3, clipPath: "inset(100% 0% 0% 0%)" },
                    { 
                        scale: 1, 
                        clipPath: "inset(0% 0% 0% 0%)",
                        duration: 1.5,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: item,
                            start: "top 70%",
                        }
                    }
                );
                
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);
    

    return (
        <section ref={containerRef} className="projects-section-v2 mb-0">
            <div className="container">
                <div className="row mb-5 pb-5">
                    <div className="col-lg-6">
                        {/* <h6 className="text-primary-neon text-uppercase ls-5">Portfolio</h6> */}
                        <h2 className="display-2 fw-bold text-white">Selected Projects</h2>
                    </div>
                    <div className="col-lg-5 offset-lg-1 d-flex align-items-end">
                        <p className="text-dim fs-5">
                            A curation of my best work, blending logic with aesthetics 
                            to build high-performance digital solutions.
                        </p>
                    </div>
                </div>

                <div className="project-list">
                    {projectData.map((project, index) => (
                        <div key={project.id} className="project-item">
                            <div className="row align-items-center">
                                <div className={`col-lg-7 ${index % 2 !== 0 ? 'order-lg-2' : ''}`}>
                                    <div className="project-img-wrapper-v2">
                                        <div className="project-img-inner">
                                            <img src={project.image} alt={project.title} />
                                        </div>
                                        {/* <div className="project-number">{project.id}</div> */}
                                    </div>
                                </div>

                                <div className="col-lg-5 p-lg-5">
                                    <div className="project-details">
                                        <span className="text-primary-neon fw-bold small-text">{project.category}</span>
                                        <h3 className="project-title-v2">{project.title}</h3>
                                        
                                        <div className="tech-stack-v2 mt-4">
                                            {project.tech.map((t, i) => (
                                                <span key={i} className="tech-pill">{t}</span>
                                            ))}
                                        </div>

                                        <div className="project-actions mt-5 d-flex gap-4">
                                            <a href="#" className="main-project-link" style={{color:'black'}}>
                                                Case Study <FaExternalLinkAlt className="ms-2" />
                                            </a>
                                            <a href="https://github.com/Reyansh-12/Portfolio" className="github-link"><FaGithub /></a>
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