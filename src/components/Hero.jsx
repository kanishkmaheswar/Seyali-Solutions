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
                position: 'absolute',
                top: '30%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                paddingTop: '6rem',
                gap: '1rem',
                textAlign: 'center'
            }}>

                {/* Badge */}
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 1.5rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 0, 0, 0.84)',
                    borderRadius: '50px',
                    marginBottom: '1rem',
                    backdropFilter: 'blur(10px)'
                }}>
                    <span style={{ color: '#ff4d4d', fontSize: '0.8rem' }}>●</span>
                    <span style={{ color: '#e5e5e5', fontSize: '0.9rem', fontWeight: '700', letterSpacing: '0.5px' }}>Unlock the power of AI & ML</span>
                    <span style={{ color: '#ff4d4d', fontSize: '0.8rem' }}>●</span>
                </div>

                {/* Headline with Typewriter */}
                <h1 style={{
                    fontSize: '3.5rem',
                    fontWeight: '800',
                    color: 'white',
                    lineHeight: '1.1',
                    marginBottom: '1.5rem',
                    letterSpacing: '-0.05em',
                    maxWidth: '900px',
                    textShadow: '',
                    textAlign: 'center'
                }}>
                    Access the full power{" "}
                    <br />
                    <span style={{ color: '#FFD700' }}>
                        <span style={{ color: '#ffffffff' }}>of{" "}</span><span style={{ fontStyle: 'italic' }}>{words[index].substring(0, subIndex)}</span>
                        {blink ? "|" : ""}
                    </span>
                </h1>

                <div style={{ maxWidth: '900px', marginTop: '-20px', marginBottom: '2rem', textAlign: 'center'}}>
                    <p className='text-gray-200 text-center'>Experience the pinnacle of efficiency in data processing with AI. Our groundbreaking
                        technology streamlines workflows, enhances decision-making, and drives innovation.
                    </p>
                </div>

            </div>

            {/* Absolute Spline Container - Centered */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 100 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{
                    duration: 1.5,
                    ease: "easeOut",
                    delay: 0.2
                }}
                style={{
                    position: 'absolute',
                    top: '75%', // Moved significantly down to create horizon effect
                    left: '0%',
                    transform: 'translate(-50%, -50%)',
                    width: '100vw',
                    height: '100vh',
                    zIndex: 1,
                    pointerEvents: 'none',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'visible' // Allow the large globe to bleed out
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

                {/* Globe Glow Animation */}
                <motion.div
                    animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '80%',
                        height: '80%',
                        background: 'radial-gradient(circle, rgba(0, 198, 255, 0.3) 0%, rgba(0, 112, 243, 0.1) 40%, transparent 70%)',
                        filter: 'blur(80px)',
                        zIndex: -1,
                        pointerEvents: 'none'
                    }}
                />

                <div style={{
                    width: '140%', // Significantly larger width to flatten the curve
                    height: '140%',
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transform: 'scale(1.5)' // Additional visual scaling
                }}>
                    <Spline
                        scene="https://prod.spline.design/sOy7jFmEEICPECl7/scene.splinecode"
                        onLoad={() => setIsSplineLoaded(true)}
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </div>
            </motion.div>

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
                    width: 100% !important;
                    height: 100% !important;
                }
                
                @media (max-width: 900px) {
                     #home h1 {
                        font-size: 3rem !important;
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
