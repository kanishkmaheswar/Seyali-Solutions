import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MotionLink = motion(Link);

const Cta = () => {
    return (
        <section className="section" style={{
            background: '#000',
            padding: '4rem 0',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '400px'
        }}>
            {/* Background Image with Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'url("/download.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.4,
                zIndex: 0
            }}></div>

            {/* Dark Gradient Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.8) 100%)',
                zIndex: 0
            }}></div>

            {/* Glowing Orbs for Depth */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(255, 77, 77, 0.1) 0%, transparent 70%)',
                filter: 'blur(80px)',
                zIndex: 0
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 style={{
                        fontSize: 'max(4rem, 6vw)',
                        fontWeight: '900',
                        color: 'white',
                        lineHeight: '1',
                        letterSpacing: '-0.04em',
                        textTransform: 'uppercase',
                        marginBottom: '1rem'
                    }}>
                        LET'S GROW <br />
                        <span style={{
                            background: 'linear-gradient(90deg, #ffffff 0%, #ff4d4d 50%, #800000 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            display: 'inline-block'
                        }}>
                            YOUR BRAND
                        </span>
                    </h2>

                    <p style={{
                        color: '#888',
                        fontSize: '1.2rem',
                        fontWeight: '400',
                        marginBottom: '3rem',
                        maxWidth: '600px',
                        margin: '0 auto 3rem'
                    }}>
                        Connect with us to explore tailored solutions and service offerings.
                    </p>

                    <MotionLink
                        to="/contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '1rem',
                            padding: '1.2rem 2.5rem',
                            background: 'transparent',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '50px',
                            color: 'white',
                            fontSize: '1rem',
                            fontWeight: '600',
                            textDecoration: 'none',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            position: 'relative',
                            overflow: 'hidden',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = '#ff4d4d';
                            e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 77, 77, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <span style={{
                            width: '8px',
                            height: '8px',
                            background: '#ff4d4d',
                            borderRadius: '50%',
                            boxShadow: '0 0 10px #ff4d4d'
                        }}></span>
                        GET STARTED
                    </MotionLink>
                </motion.div>
            </div>
        </section>
    );
};

export default Cta;
