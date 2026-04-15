import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Badge, Button } from 'react-bootstrap';
import { projectData } from '../data/projects';
import { motion } from 'framer-motion';
import { FaGithub, FaArrowLeft } from 'react-icons/fa';
import '../assets/style/casestudy.css';

const CaseStudy = () => {
    const { projectId } = useParams();
    const project = projectData[projectId];

    if (!project) return <div className="text-white text-center mt-5">Project Not Found</div>;

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="bg-dark text-white min-vh-100 py-5"
        >
            <Container>
                <Link to="/" className="text-decoration-none">
                    <Button variant="outline-primary-neon" className="mb-5 d-flex align-items-center gap-2 text-white border-secondary">
                        <FaArrowLeft /> Back to Projects
                    </Button>
                </Link>

                <Row className="mb-5 align-items-start">
                    <Col lg={7}>
                        <h6 className="text-primary-neon text-uppercase fw-bold mb-3 ls-2">{project.category}</h6>
                        <h1 className="display-2 fw-bold mb-4">{project.title}</h1>
                        <div className="d-flex flex-wrap gap-2 mb-4">
                            {project.tech.map(t => (
                                <Badge key={t} bg="transparent" className="border border-secondary px-3 py-2 fw-normal">{t}</Badge>
                            ))}
                        </div>
                        <p className="lead text-secondary mb-5 fs-4">{project.description}</p>
                    </Col>
                    <Col lg={5} className="mt-4 mt-lg-0 text-center">
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="img-fluid rounded-4 shadow-lg border border-secondary" 
                            style={{ maxHeight: '400px', objectFit: 'cover' }}
                        />
                    </Col>
                </Row>

                <hr className="border-secondary my-5" />

                <Row className="gy-5">
                    <Col lg={8}>
                        <div className="mb-5">
                            <h3 className="fw-bold mb-3 text-white">The Challenge</h3>
                            <p className="text-secondary fs-5">{project.challenge}</p>
                        </div>
                        <div className="mb-5">
                            <h3 className="fw-bold mb-3 text-white">The Solution</h3>
                            <p className="text-secondary fs-5">{project.solution}</p>
                        </div>
                    </Col>
                    
                    <Col lg={4}>
                        <div className="bg-black p-4 rounded-4 border border-secondary sticky-top" style={{ top: '100px' }}>
                            <h4 className="mb-4 fw-bold">Key Features</h4>
                            <ul className="list-unstyled">
                                {project.features.map(f => (
                                    <li key={f} className="mb-3 d-flex align-items-center gap-3">
                                        <span className="text-primary-neon">▹</span> 
                                        <span className="text-secondary">{f}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn github-btn w-100 mt-4 py-3 d-flex align-items-center justify-content-center gap-2 fw-bold">
                                <FaGithub /> View Source Code
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    );
};

export default CaseStudy;