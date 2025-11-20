import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {

    const words = ["Artificial Intelligence", "Machine Learning", "Data Science"];
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);
    const [blink, setBlink] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSubIndex(prev => {
                if (!deleting && prev === words[index].length) {
                    setDeleting(true);
                    return prev;
                }

                if (deleting && prev === 0) {
                    setDeleting(false);
                    setIndex(prevIndex => (prevIndex + 1) % words.length);
                    return 0;
                }

                return prev + (deleting ? -1 : 1);
            });
        }, deleting ? 80 : 150);

        return () => clearTimeout(timeout);
    }, [subIndex, deleting, index]);

    useEffect(() => {
        const blinkInterval = setInterval(() => {
            setBlink(prev => !prev);
        }, 500);
        return () => clearInterval(blinkInterval);
    }, []);

    return (
        <section id="home" style={{
            position: 'relative',
            height: '100vh',
            width: '100%',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#000000'
        }}>

            {/* Floating dots */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'radial-gradient(circle, rgba(84, 100, 132, 0.76) 2px, transparent 2px)',
                backgroundSize: '80px 80px',
                opacity: 0.4,
                pointerEvents: 'none',
                zIndex: 0
            }}></div>

            {/* Radial lines */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '120000px',
                height: '120000px',
                background: `
                        repeating-conic-gradient(
                            from 0deg,
                            transparent 0deg,
                            transparent 5deg,
                            rgba(66, 96, 144, 0.28) 5deg,
                            rgba(61, 86, 125, 0.15) 5.5deg
                        )
                    `,
                borderRadius: '50%',
                opacity: 0.4,
                pointerEvents: 'none',
                zIndex: 0
            }}></div>

            {/* Corner accents */}
            <div style={{
                position: 'absolute',
                top: '20%',
                right: '10%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
                filter: 'blur(60px)',
                opacity: 0.8,
                pointerEvents: 'none',
                zIndex: 0
            }}></div>

            <div style={{
                position: 'absolute',
                bottom: '20%',
                left: '10%',
                width: '350px',
                height: '350px',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, transparent 70%)',
                filter: 'blur(50px)',
                opacity: 0.7,
                pointerEvents: 'none',
                zIndex: 0
            }}></div>

            {/* Content */}
            <div className="container" style={{
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                paddingTop: '4rem',
                gap: '2rem'
            }}>

                {/* Left column */}
                <div style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    textAlign: 'left',
                    marginLeft: '-50px',
                    marginRight: '100px'
                }}>

                    {/* Badge */}
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 1.5rem',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '50px',
                        marginBottom: '2rem',
                        backdropFilter: 'blur(10px)'
                    }}>
                        <span style={{ color: '#ff4d4d', fontSize: '0.8rem' }}>●</span>
                        <span style={{ color: '#e5e5e5', fontSize: '0.9rem', fontWeight: '500', letterSpacing: '0.5px' }}>Unlock the power of AI & ML</span>
                        <span style={{ color: '#ff4d4d', fontSize: '0.8rem' }}>●</span>
                    </div>

                    {/* Headline with Typewriter */}
                    <h1 style={{
                        fontSize: '3.4rem',
                        fontWeight: '700',
                        color: 'white',
                        lineHeight: '1.1',
                        marginBottom: '1.5rem',
                        letterSpacing: '-0.02em',
                        maxWidth: '1200px'
                    }}>
                        Access the full power of{" "}
                        <span style={{ color: '#FFD700' }}>
                            {words[index].substring(0, subIndex)}
                            {blink ? "|" : ""}
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p style={{
                        fontSize: '1rem',
                        color: '#a3a3a3',
                        maxWidth: '600px',
                        lineHeight: '1.6',
                        marginBottom: '3rem'
                    }}>
                        Experience the pinnacle of efficiency in data processing with AI. Our groundbreaking tech opens unlimited potential across a range of industries.
                    </p>

                    {/* CTA */}
                    <a href="#contact" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        background: '#111',
                        color: 'white',
                        padding: '1rem 2rem',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        fontWeight: '500',
                        border: '1px solid #333',
                        transition: 'all 0.3s ease'
                    }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.borderColor = '#ff4d4d';
                            e.currentTarget.style.color = '#ff4d4d';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.borderColor = '#333';
                            e.currentTarget.style.color = 'white';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        Book a call <span style={{ fontSize: '1.1rem' }}>↗</span>
                    </a>
                </div>

                {/* Right column */}
                <div style={{
                    flex: 1,
                    height: '1200px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                }}>
                    <Spline scene="https://prod.spline.design/q3yJFQ1-tMFIq-oI/scene.splinecode" />
                </div>

            </div>

            {/* Scroll arrow */}
            <div style={{
                position: 'absolute',
                bottom: '2rem',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 10,
                cursor: 'pointer'
            }} className="animate-bounce">
                <a href="#about" aria-label="Scroll down" style={{ color: 'white', opacity: 0.7, display: 'block' }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                    </svg>
                </a>
            </div>

            {/* Styles */}
            <style>{`
                #home canvas {
                    background: transparent !important;
                    transform: scale(2.5);
                }
                
                @media (max-width: 900px) {
                    #home .container {
                        flex-direction: column !important;
                        text-align: center !important;
                        padding-top: 6rem !important;
                    }
                    #home .container > div:first-of-type {
                        align-items: center !important;
                        margin-left: 0 !important;
                        margin-right: 0 !important;
                        text-align: center !important;
                        padding: 0 1rem !important;
                    }
                    #home .container > div:last-of-type {
                        display: none !important;
                    }
                    #home h1 {
                        font-size: 2.5rem !important;
                    }
                    #home p {
                        font-size: 0.95rem !important;
                    }
                }

                @media (max-width: 480px) {
                    #home h1 {
                        font-size: 2rem !important;
                    }
                    #home .container {
                        padding-top: 5rem !important;
                    }
                }
            `}</style>

        </section>
    );
};

export default Hero;
