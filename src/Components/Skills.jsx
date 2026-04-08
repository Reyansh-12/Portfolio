import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../assets/style/skills.css';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    const skillSet = [
        { name: "React.js", level: 90, color: "#61DBFB" },
        { name: "Laravel", level: 85, color: "#FF2D20" },
        { name: "JavaScript", level: 88, color: "#F7DF1E" },
        { name: "PHP", level: 82, color: "#777BB4" },
        { name: "Bootstrap 5", level: 95, color: "#7952B3" },
        { name: "jQuery", level: 80, color: "#0769AD" },
        { name: "CSS3", level: 92, color: "#264de4" },
        { name: "HTML5", level: 98, color: "#e34c26" },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".skill-card-modern", {
                opacity: 0,
                y: 50,
                rotateX: -15,
                stagger: 0.1,
                duration: 1.2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: ".skills-grid",
                    start: "top 80%",
                }
            });

            gsap.from(".progress-fill", {
                width: "0%",
                duration: 2,
                stagger: 0.1,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: ".skills-grid",
                    start: "top 80%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleMouseMove = (e, index) => {
        const card = cardsRef.current[index];
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        gsap.to(card, {
            rotateX: rotateX,
            rotateY: rotateY,
            duration: 0.5,
            ease: "power2.out"
        });
    };

    const handleMouseLeave = (index) => {
        gsap.to(cardsRef.current[index], {
            rotateX: 0,
            rotateY: 0,
            duration: 0.5,
            ease: "power2.out"
        });
    };

    return (
        <section ref={sectionRef} className="skills-section py-5" style={{ perspective: "1000px" }}>
            <div className="container">
                <div className="row mb-5 text-center">
                    <div className="col-12">
                        <h2 className="display-4 fw-bold text-white mb-3">Technical <span className="text-primary-neon">Skills</span></h2>
                    </div>
                </div>

                <div className="skills-grid row g-4">
                    {skillSet.map((skill, index) => (
                        <div key={index} className="col-lg-3 col-md-6 mb-3">
                            <div 
                                className="skill-card-modern"
                                ref={el => cardsRef.current[index] = el}
                                onMouseMove={(e) => handleMouseMove(e, index)}
                                onMouseLeave={() => handleMouseLeave(index)}>
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <h4 className="skill-name">{skill.name}</h4>
                                    <span className="percent-tag" style={{ color: skill.color }}>{skill.level}%</span>
                                </div>
                                
                                <div className="progress-container-modern">
                                    <div 
                                        className="progress-fill" 
                                        style={{ width: `${skill.level}%`, background: skill.color }}>
                                        <div className="fill-light"></div>
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

export default Skills;