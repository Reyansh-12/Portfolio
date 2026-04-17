import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { FaDownload, FaBriefcase, FaGraduationCap, FaCode, FaAward, FaLightbulb } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import '../assets/style/resume.css'; 

const Resume = () => {
    const resumeRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".resume-header", { opacity: 0, y: 30, duration: 1, ease: "power3.out" });
            gsap.from(".resume-card", { 
                opacity: 0, 
                y: 50, 
                stagger: 0.2, 
                duration: 1, 
                ease: "power3.out",
                delay: 0.3 
            });
        }, resumeRef);
        return () => ctx.revert();
    }, []);

    const skills = [
        { category: "Frontend", items: ["React", "JavaScript (ES6+)", "GSAP", "HTML", "CSS", "Bootstrap"] },
        { category: "Backend", items: ["PHP", "MySQL", "Laravel", "REST APIs"] },
        { category: "Tools", items: ["Git", "GitHub", "Postman", "Vite", "VS Code"] },
        { category: "Soft Skills", items: ["Problem Solving", "Teamwork", "Adaptability"] }
    ];

    const projects = [
        {
            title: "Cosmetic Inventory Management",
            date: "Nov 2025 - March 2026",
            desc: "Full-stack system for tracking stock levels and sales. Optimized DB queries for 30% faster response.",
            github: "https://github.com/Reyansh-12/Inventory_management", 
            live: "#"
        },
        {
            title: "Personal Portfolio",
            date: "April 2026",
            desc: "Modern portfolio with GSAP animations and responsive design.",
            github: "https://github.com/Reyansh-12/Portfolio",
            live: "https://portfolio-tan-six-anudh8xk93.vercel.app/"
        },
        {
            title: "Cold Drink Landing Page",
            date: "2021 - 2024",
            desc: "High-end animated UI featuring interactive liquid effects using GSAP.",
            github: "#",
            live: "https://statuesque-pasca-c1d015.netlify.app/"
        }
    ];

    return (
        <section ref={resumeRef} className="resume-section py-5">
            <div className="container mt-5">
                <div className="resume-header mb-5 pb-4 border-bottom border-secondary">
                    <div className="d-flex justify-content-between align-items-end flex-wrap gap-3">
                        <div>
                            <h6 className="text-primary-neon text-uppercase ls-5">My Journey</h6>
                            <h2 className="display-3 fw-bold text-white">Resume</h2>
                        </div>
                        <a href="/Reyansh_resume.pdf" download className="main-project-link mb-2 text-black text-decoration-none">
                            Download CV <FaDownload className="ms-2" />
                        </a>
                    </div>
                </div>

                <div className="row g-5">
                    <div className="col-lg-8">
                        <div className="resume-card mb-5">
                            <h4 className="text-white mb-4 d-flex align-items-center">
                                <FaBriefcase className="text-primary-neon me-3" /> Experience
                            </h4>
                            <div className="experience-item ps-4 border-start border-secondary pb-4 position-relative">
                                <div className="dot"></div>
                                <h5 className="text-white">Full-Stack Developer Intern</h5>
                                <p className="text-primary-neon small fw-bold">CodebergIT | 2023 - Present</p>
                                <ul className="text-dim list-unstyled">
                                    <li>• Developed a Cosmetic Inventory System using React & PHP.</li>
                                    <li>• Integrated GSAP for smooth UI transitions and improved UX.</li>
                                    <li>• Improved database performance by optimizing MySQL queries.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="resume-card mb-5">
                            <h4 className="text-white mb-4 d-flex align-items-center">
                                <GrProjects className="text-primary-neon me-3" /> Projects
                            </h4>
                            {projects.map((proj, i) => (
                                <div key={i} className="experience-item ps-4 border-start border-secondary pb-4 position-relative">
                                    <div className="dot"></div>
                                    <div className="d-flex justify-content-between align-items-start">
                                        <h5 className="text-white">{proj.title}</h5>
                                        <div className="project-links d-flex gap-3">
                                            <a href={proj.github} className="text-primary-neon hover-scale" title="GitHub"><FaGithub /></a>
                                            <a href={proj.live} className="text-primary-neon hover-scale" title="Live Demo"><FaExternalLinkAlt /></a>
                                        </div>
                                    </div>
                                    <p className="text-primary-neon small fw-bold">{proj.date}</p>
                                    <p className="text-dim">{proj.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="resume-card mb-5">
                            <h4 className="text-white mb-4 d-flex align-items-center">
                                <FaGraduationCap className="text-primary-neon me-3" /> Education
                            </h4>
                            <div className="experience-item ps-4 border-start border-secondary pb-2 position-relative">
                                <div className="dot"></div>
                                <h5 className="text-white">Bachelor of Computer Applications</h5>
                                <p className="text-primary-neon small fw-bold">RTMNU University | 2020 - 2023</p>
                                <p className="text-dim mb-0">Specialized in Web Technologies & Database Management.</p>
                                <span className="badge bg-dark border border-primary-neon mt-2">Aggregate: 60%</span>
                            </div>
                        </div>

                        <div className="resume-card mb-5">
                            <h4 className="text-white mb-4 d-flex align-items-center">
                                <FaAward className="text-primary-neon me-3" /> Certifications
                            </h4>
                            <div className="d-flex flex-column gap-2 ps-4">
                                <div className="text-dim">• Full Stack Web Development - Coursera</div>
                                <div className="text-dim">• JavaScript Algorithms & Data Structures - FreeCodeCamp</div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="resume-card sticky-top" style={{ top: '100px', zIndex: 10 }}>
                            <h4 className="text-white mb-4 d-flex align-items-center">
                                <FaCode className="text-primary-neon me-3" /> Tech Stack
                            </h4>
                            {skills.map((skill, idx) => (
                                <div key={idx} className="mb-4">
                                    <h6 className="text-white-50 text-uppercase small ls-2 mb-3">
                                        {skill.category === "Soft Skills" ? <FaLightbulb className="me-2"/> : null}
                                        {skill.category}
                                    </h6>
                                    <div className="d-flex flex-wrap gap-2">
                                        {skill.items.map((item, i) => (
                                            <span key={i} className="tech-pill">{item}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;