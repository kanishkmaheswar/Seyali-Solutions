import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {

    const words = ["Artificial Intelligence", "Machine Learning", "Data Science"];
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);
    const [blink, setBlink] = useState(true);
    const [isSplineLoaded, setIsSplineLoaded] = useState(false);

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
                    marginRight: '0'
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
                        fontSize: '3.5rem', // Restored size
                        fontWeight: '700',
                        color: 'white',
                        lineHeight: '1.1',
                        marginBottom: '1.5rem',
                        letterSpacing: '-0.02em',
                        maxWidth: '800px', // Restored width
                        textShadow: 'none' // Removed shadow
                    }}>
                        Access the full power{" "}
                        <br />
                        <span style={{ color: '#FFD700' }}>
                            <span style={{ color: '#ffffffff' }}>of{" "}</span>{words[index].substring(0, subIndex)}
                            {blink ? "|" : ""}
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p style={{
                        fontSize: '1.1rem',
                        color: '#a3a3a3',
                        maxWidth: '600px',
                        lineHeight: '1.6',
                        marginBottom: '3rem',
                        textShadow: 'none'
                    }}>
                        Experience the pinnacle of efficiency in data processing with AI. Our groundbreaking tech opens unlimited potential across a range of industries.
                    </p>

                    {/* CTA */}
                    <Link to="/contact" style={{
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
                        transition: 'all 0.3s ease',
                        boxShadow: 'none'
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
                    </Link>
                </div>

                {/* Right column (Placeholder for layout balance) */}
                <div style={{ flex: 1 }}></div>

                {/* Absolute Spline Container - Forced Large Size with Animation */}
                <motion.div
                    initial={{ scale: 3, opacity: 0, y: '-50%' }}
                    animate={{ scale: 1.15, opacity: 1, y: '-50%' }}
                    transition={{
                        duration: 10.0,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0
                    }}
                    style={{
                        position: 'absolute',
                        right: '-2%',
                        top: '60%',
                        // Transform handled by Framer Motion props (y) to avoid conflicts
                        width: 'min(120vh, 800px)',
                        height: 'min(120vh, 800px)',
                        zIndex: 0,
                        pointerEvents: 'none'
                    }}
                >
                    {!isSplineLoaded && (
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <div className="loader"></div>
                        </div>
                    )}
                    <Spline
                        scene="https://prod.spline.design/sOy7jFmEEICPECl7/scene.splinecode"
                        onLoad={() => setIsSplineLoaded(true)}
                        style={{ width: '100%', height: '100%' }}
                    />
                </motion.div>
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
                    /* Removed visual scaling to show full globe */
                    width: 100% !important;
                    height: 100% !important;
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
                    #home .container {
                        padding-top: 5rem !important;
                    }
                }
                
                /* Simple CSS Loader */
                .loader {
                    width: 48px;
                    height: 48px;
                    border: 5px solid #FFF;
                    border-bottom-color: transparent;
                    border-radius: 50%;
                    display: inline-block;
                    box-sizing: border-box;
                    animation: rotation 1s linear infinite;
                }

                @keyframes rotation {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }
            `}</style>

        </section>
    );
};

export default Hero;
