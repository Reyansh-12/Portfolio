import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Cursor = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        const moveCursor = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1
            });
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3
            });

            createParticle(e.clientX, e.clientY);
        };

        const createParticle = (x, y) => {
            const particle = document.createElement('div');
            particle.className = 'cursor-particle';
            document.body.appendChild(particle);

            const destinationX = x + (Math.random() - 0.5) * 50;
            const destinationY = y + (Math.random() - 0.5) * 50;

            gsap.set(particle, { x, y, scale: Math.random() * 0.5 + 0.5 });

            gsap.to(particle, {
                x: destinationX,
                y: destinationY,
                opacity: 0,
                scale: 0,
                duration: 0.8,
                ease: "power2.out",
                onComplete: () => particle.remove()
            });
        };

        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, []);

    return (
        <>
            <div ref={cursorRef} className="cursor-dot" />
            <div ref={followerRef} className="cursor-follower" />
        </>
    );
};

export default Cursor;