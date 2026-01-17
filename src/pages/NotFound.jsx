import React from 'react';
import { motion } from 'framer-motion';

const NotFound = () => {
    return (
        <div style={{
            height: '100vh',
            width: '100vw',
            backgroundColor: '#000000ff',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            position: 'relative',
            overflow: 'hidden',
            fontFamily: "'Arial', 'Helvetica', sans-serif",
            padding: 'clamp(3rem, 10vw, 8rem)'
        }}>
            {/* Main content wrapper */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0'
            }}>
                {/* Top row: 404 and subtitle */}
                <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 'clamp(1rem, 6vw, 5rem)',
                    marginBottom: '-1rem'
                }}>
                    {/* 404 */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        style={{
                            fontSize: 'clamp(9rem, 20vw, 15rem)',
                            fontWeight: '700',
                            lineHeight: '0.9',
                            letterSpacing: '-0.02em',
                            background: 'linear-gradient(180deg, #f5f5f5 0%, #b8b8b8 50%, #8a8a8a 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}
                    >
                        404
                    </motion.div>

                    {/* Subtitle */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{
                            fontSize: 'clamp(1rem, 2.2vw,1.6rem)',
                            background: 'linear-gradient(180deg, #d8d8d8 0%, #a8a8a8 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            fontStyle: 'italic',
                            letterSpacing: '0.01em',
                            marginTop: 'clamp(1.5rem, 3vw, 2.5rem)',
                            lineHeight: '1.4'
                        }}
                    >
                        (OH NO! THIS PAGE<br />
                        DOESN'T EXIST)
                    </motion.div>
                </div>

                {/* Middle row: SORRY and arrows */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'clamp(2rem, 5vw, 4rem)',
                        marginBottom: 'clamp(2.5rem, 5vw, 4rem)'
                    }}
                >
                    {/* SORRY */}
                    <div style={{
                        fontSize: 'clamp(10rem, 25vw, 15rem)',
                        fontWeight: '700',
                        lineHeight: '0.9',
                        letterSpacing: '0.01em',
                        background: 'linear-gradient(180deg, #f5f5f5 0%, #b8b8b8 50%, #8a8a8a 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}>
                        SORRY
                    </div>

                    {/* Animated arrows */}
                    <motion.div
                        animate={{
                            y: [0, 20, 0]
                        }}
                        transition={{
                            duration: 1.8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        style={{
                            display: 'flex',
                            gap: 'clamp(0.5rem, 1.5vw, 1rem)',
                            fontSize: 'clamp(3.5rem, 10vw, 7rem)',
                            background: 'linear-gradient(180deg, #f5f5f5 0%, #b8b8b8 50%, #8a8a8a 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            lineHeight: '2'
                        }}
                    >
                        <span>↓</span>
                        <span>↓</span>
                        <span>↓</span>
                    </motion.div>
                </motion.div>

                {/* Bottom: Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <a
                        href="/"
                        style={{
                            position: 'absolute',
                            top: '75%',
                            right: '15%',
                            display: 'inline-block',
                            padding: 'clamp(0.9rem, 2vw, 1.1rem) clamp(2.5rem, 5vw, 3.5rem)',
                            border: '2px solid #ff4d4d',
                            borderRadius: '60px',
                            color: '#ff4d4d',
                            textDecoration: 'none',
                            fontSize: 'clamp(0.85rem, 1.8vw, 1.05rem)',
                            fontWeight: '400',
                            textTransform: 'uppercase',
                            letterSpacing: '0.18em',
                            transition: 'all 0.3s ease',
                            background: 'transparent'
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.background = '#ff4d4d';
                            e.currentTarget.style.color = '#fff';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.color = '#ff4d4d';
                        }}
                    >
                        GO TO HOMEPAGE
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default NotFound;