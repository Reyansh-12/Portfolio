import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { FaDownload, FaBriefcase, FaGraduationCap, FaCode } from "react-icons/fa";
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
        { category: "Tools", items: ["Git", "Vite", "GitHub", "Postman"] }
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
                        <a href="/path-to-your-pdf.pdf" download className="main-project-link mb-2 text-black">
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
                                <p className="text-dim">Built a Cosmetic Inventory System using React and PHP. Optimized database queries and implemented GSAP animations for better UX.</p>
                            </div>

                            {/* <div className="experience-item ps-4 border-start border-secondary pb-4 position-relative">
                                <div className="dot"></div>
                                <h5 className="text-white">Web Designer</h5>
                                <p className="text-primary-neon small fw-bold">Freelance | 2022 - 2023</p>
                                <p className="text-dim">Designed and developed high-converting landing pages for various clients using Three.js and modern CSS frameworks.</p>
                            </div> */}
                        </div>

                        <div className="resume-card mb-5">
                            <h4 className="text-white mb-4 d-flex align-items-center">
                                <FaGraduationCap className="text-primary-neon me-3" /> Education
                            </h4>
                            <div className="experience-item ps-4 border-start border-secondary pb-2 position-relative">
                                <div className="dot"></div>
                                <h5 className="text-white">Bachelor of Computer Applications</h5>
                                <p className="text-primary-neon small fw-bold">RTMNU University | 2021 - 2024</p>
                                <p className="text-dim">Focused on Web Technologies, Data Structures, and Software Engineering principles.</p>
                            </div>
                        </div>
                        <div className="resume-card mb-5">
                            <h4 className="text-white mb-4 d-flex align-items-center">
                                <FaGraduationCap className="text-primary-neon me-3" /> Projects
                            </h4>
                            <div className="experience-item ps-4 border-start border-secondary pb-2 position-relative">
                                <div className="dot"></div>
                                <h5 className="text-white">Cosmetic Inventory Management</h5>
                                <p className="text-primary-neon small fw-bold"> 2021 - 2024</p>
                                <p className="text-dim">Focused on Web Technologies, Data Structures, and Software Engineering principles.</p>
                            </div>
                            <div className="experience-item ps-4 border-start border-secondary pb-2 position-relative">
                                <div className="dot"></div>
                                <h5 className="text-white">Portfolio</h5>
                                <p className="text-primary-neon small fw-bold"> 2021 - 2024</p>
                                <p className="text-dim">Focused on Web Technologies, Data Structures, and Software Engineering principles.</p>
                            </div>
                            <div className="experience-item ps-4 border-start border-secondary pb-2 position-relative">
                                <div className="dot"></div>
                                <h5 className="text-white">Cold Drink</h5>
                                <p className="text-primary-neon small fw-bold"> 2021 - 2024</p>
                                <p className="text-dim">Focused on Web Technologies, Data Structures, and Software Engineering principles.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="resume-card sticky-top" style={{ top: '100px' }}>
                            <h4 className="text-white mb-4 d-flex align-items-center">
                                <FaCode className="text-primary-neon me-3" /> Tech Stack
                            </h4>
                            {skills.map((skill, idx) => (
                                <div key={idx} className="mb-4">
                                    <h6 className="text-white-50 text-uppercase small ls-2 mb-3">{skill.category}</h6>
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