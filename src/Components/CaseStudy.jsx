import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { projectData } from '../data/projects';
import { motion } from 'framer-motion';
import { FaGithub, FaArrowLeft, FaTerminal, FaCodeBranch, FaCheck } from 'react-icons/fa';
import '../assets/style/casestudy.css';

const CaseStudy = () => {
    const { projectId } = useParams();
    const project = projectData[projectId];

    if (!project) return <div className="text-neon text-center mt-5 fs-1">404: Project Not Found</div>;

    return (
        <div className="modern-case-study">
            <Container className="py-5">
                <Link to="/" className="neon-back-btn mb-5">
                    <FaArrowLeft /> <span>Back to Lab</span>
                </Link>

                <Row className="mb-5 align-items-center">
                    <Col lg={7} className="order-2 order-lg-1">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }} 
                            animate={{ opacity: 1, x: 0 }} 
                            transition={{ duration: 0.6 }}
                        >
                            <span className="neon-text-sm">{project.category}</span>
                            <h1 className="hero-title">{project.title}</h1>
                            <div className="tech-pill-wrapper mb-4">
                                {project.tech.map(t => (
                                    <span key={t} className="neon-pill">{t}</span>
                                ))}
                            </div>
                            <p className="hero-desc">{project.description}</p>
                        </motion.div>
                    </Col>
                    <Col lg={5} className="order-1 order-lg-2 mb-4 mb-lg-0">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }} 
                            animate={{ opacity: 1, scale: 1 }} 
                            className="neon-img-frame"
                        >
                            <img src={project.image} alt={project.title} className="img-fluid" />
                        </motion.div>
                    </Col>
                </Row>

                <Row className="gy-4 mt-5">
                    <Col lg={8}>
                        <div className="detail-card">
                            <h3 className="neon-h3"><FaTerminal className="me-2"/> The Challenge</h3>
                            <p>{project.challenge}</p>
                        </div>
                        <div className="detail-card mt-4">
                            <h3 className="neon-h3"><FaCodeBranch className="me-2"/> Engineering Solution</h3>
                            <p>{project.solution}</p>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="neon-sidebar">
                            <h4 className="mb-4">System Features</h4>
                            <ul className="neon-list">
                                {project.features.map(f => (
                                    <li key={f}><FaCheck className="neon-icon" /> {f}</li>
                                ))}
                            </ul>
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="neon-btn-primary w-100">
                                <FaGithub /> Source Code
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CaseStudy;