import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Cursor = () => {
    const segmentsRef = useRef([]);
    const numSegments = 8;

    useEffect(() => {
        const xSetters = segmentsRef.current.map(el => gsap.quickSetter(el, "x", "px"));
        const ySetters = segmentsRef.current.map(el => gsap.quickSetter(el, "y", "px"));

        const mouse = { x: 0, y: 0 };
        const pos = segmentsRef.current.map(() => ({ x: 0, y: 0 }));

        const moveCursor = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            
            createParticle(e.clientX, e.clientY);
        };

        const createParticle = (x, y) => {
            const particle = document.createElement('div');
            particle.className = 'cursor-particle';
            document.body.appendChild(particle);

            const destinationX = x + (Math.random() - 0.5) * 60;
            const destinationY = y + (Math.random() - 0.5) * 60;

            gsap.set(particle, { x, y, scale: Math.random() * 0.5 + 0.2 });
            gsap.to(particle, {
                x: destinationX,
                y: destinationY,
                opacity: 0,
                scale: 0,
                duration: 0.6,
                onComplete: () => particle.remove()
            });
        };

        const ticker = () => {
            let targetX = mouse.x;
            let targetY = mouse.y;

            pos.forEach((p, i) => {
                p.x += (targetX - p.x) * (0.35 - i * 0.03); 
                p.y += (targetY - p.y) * (0.35 - i * 0.03);
                
                xSetters[i](p.x);
                ySetters[i](p.y);

                targetX = p.x;
                targetY = p.y;
            });
        };

        window.addEventListener('mousemove', moveCursor);
        gsap.ticker.add(ticker);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            gsap.ticker.remove(ticker);
        };
    }, []);

    return (
        <>
            {[...Array(numSegments)].map((_, i) => (
                <div
                    key={i}
                    ref={el => (segmentsRef.current[i] = el)}
                    className={i === 0 ? "cursor-dot" : "cursor-tail-segment"}
                    style={{
                        transform: `scale(${1 - i * 0.1})`,
                        opacity: 1 - i * 0.1
                    }}
                />
            ))}
        </>
    );
};

export default Cursor;