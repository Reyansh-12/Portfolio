import React, { useEffect, useRef } from 'react';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import gsap from 'gsap';
import '../assets/style/header.css';
const onEnter = () => {
    gsap.to(".cursor-follower", { scale: 2, backgroundColor: "rgba(13, 202, 240, 0.1)", duration: 0.3 });
};

const onLeave = () => {
    gsap.to(".cursor-follower", { scale: 1, backgroundColor: "transparent", duration: 0.3 });
};

const Header = () => {
    
    const navRef = useRef(null);

    const onEnter = ({ currentTarget }) => {
        gsap.to(currentTarget, { 
            y: -2, 
            color: "#0dcaf0", 
            duration: 0.3, 
            ease: "power2.out" 
        });
    };

    const onLeave = ({ currentTarget }) => {
        const isActive = currentTarget.classList.contains('active');
        gsap.to(currentTarget, { 
            y: 0, 
            color: isActive ? "#0dcaf0" : "#ffffff", 
            duration: 0.3, 
            ease: "power2.in" 
        });
    };

    return (
        <Navbar expand="lg" className="bg-dark navbar-dark sticky-top py-3">
            <Container>
                <Navbar.Brand href="#home" className="fw-bold fs-3 text-white">
                    Reyansh<span className="text-info">.</span>
                </Navbar.Brand>
                
                <Stack direction="horizontal" gap={4} ref={navRef}>
                    {['Home', 'About', 'Skills', 'Projects', 'Resume'].map((item) => (
                        <Nav.Link key={item}href={`/${item.toLowerCase()}`}className={`nav-custom-link ${item === 'Home' ? 'active' : ''}`}onMouseEnter={onEnter}onMouseLeave={onLeave}>
                            {item}
                        </Nav.Link>
                    ))}
                </Stack>
            </Container>
        </Navbar>
    );
}

export default Header;