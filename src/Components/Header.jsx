import React, { useEffect, useState } from 'react';
import { Container, Navbar, Stack } from 'react-bootstrap';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import '../assets/style/header.css';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const Header = () => {
    const [activeSection, setActiveSection] = useState('home');
    const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact', 'Resume'];

    useEffect(() => {
        navItems.forEach((item) => {
            const sectionId = item.toLowerCase();
            ScrollTrigger.create({
                trigger: `#${sectionId}`,
                start: "top 100px", 
                end: "bottom 100px",
                onEnter: () => setActiveSection(sectionId),
                onEnterBack: () => setActiveSection(sectionId),
            });
        });
    }, []);

    const handleScroll = (id) => {
        gsap.to(window, {
            duration: 0.8,
            scrollTo: { y: `#${id}`, offsetY: 80 },
            ease: "power3.inOut"
        });
    };

    return (
        <Navbar expand="lg" className="bg-dark navbar-dark sticky-top py-3 border-bottom border-secondary">
            <Container>
                <Navbar.Brand 
                    onClick={() => handleScroll('home')} 
                    style={{cursor: 'pointer'}} 
                    className="fw-bold fs-3 text-white"
                >
                    Reyansh<span className="text-primary-neon">.</span>
                </Navbar.Brand>
                
                <Stack direction="horizontal" gap={4} className="ms-auto">
                    {navItems.map((item) => {
                        const sectionId = item.toLowerCase();
                        return (
                            <div key={item} onClick={() => handleScroll(sectionId)} className={`nav-custom-link ${activeSection === sectionId ? 'active-neon' : ''}`} style={{ cursor: 'pointer' }}>{item}</div>
                        );
                    })}
                </Stack>
            </Container>
        </Navbar>
    );
}

export default Header;