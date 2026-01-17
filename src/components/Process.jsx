import React from 'react';
import { motion } from 'framer-motion';

const phases = [
    {
        id: '01',
        title: 'Requirement Assessment',
        description: 'We evaluate your business objectives and requirements to define a clear strategic direction.'
    },
    {
        id: '02',
        title: 'Strategic Planning',
        description: 'Comprehensive project planning with structured timelines and optimal resource allocation.'
    },
    {
        id: '03',
        title: 'Implementation',
        description: 'Execution of the approved strategy with systematic oversight and progress tracking.'
    },
    {
        id: '04',
        title: 'Performance Optimization',
        description: 'Ongoing evaluation and refinement to maximize efficiency and measurable outcomes.'
    },
    {
        id: '05',
        title: 'Insights & Growth Enablement',
        description: 'Detailed performance reporting and scalable strategies to support sustained long-term growth.'
    }

];

const Process = () => {
    return (
        <section className="section" style={{ background: '#000', padding: '1rem 0', overflow: 'hidden' }}>
            <div className="container">
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.4rem 1rem',
                        background: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '50px',
                        marginBottom: '1.5rem',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}>
                        <span style={{ color: '#ff4d4d', fontSize: '0.6rem' }}>●</span>
                        <span style={{ color: '#a3a3a3', fontSize: '0.8rem', fontWeight: '500' }}>Our Process</span>
                    </div>
                    <h2 style={{
                        fontSize: '3.5rem',
                        fontWeight: '700',
                        color: 'white',
                        marginBottom: '1.5rem',
                        lineHeight: '1.1',
                        letterSpacing: '-0.02em'
                    }}>
                        A Systematic Approach To <br />
                        <span style={{ color: '#888' }}>Deliver Exceptional Results</span>
                    </h2>
                </div>

                {/* Horizontal Scroll Container */}
                <div className="marquee-container" style={{
                    display: 'flex',
                    overflow: 'hidden',
                    gap: '1rem',
                    maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
                }}>
                    <style>
                        {`
                         @keyframes scroll {
                             0% { transform: translateX(0); }
                             100% { transform: translateX(calc(-100% - 1rem)); }
                         }
                         .marquee-content {
                             display: flex;
                             flex-shrink: 0;
                             gap: 1rem;
                             min-width: 100%;
                             animation: scroll 30s linear infinite;
                         }
                         .marquee-container:hover .marquee-content {
                             animation-play-state: paused;
                         }
                        `}
                    </style>

                    {/* First Copy */}
                    <div className="marquee-content">
                        {phases.map((phase, index) => (
                            <motion.div
                                key={`1-${phase.id}`}
                                style={{
                                    flex: '0 0 300px',
                                    background: '#0a0a0a',
                                    borderRadius: '1.5rem',
                                    padding: '2.5rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    minHeight: '350px',
                                    position: 'relative',
                                    border: '1px solid #222'
                                }}
                                whileHover={{
                                    y: -10,
                                    borderColor: '#444',
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <div>
                                    <span style={{
                                        fontSize: '3rem',
                                        fontWeight: '700',
                                        color: '#ff4d4d',
                                        marginBottom: '1rem',
                                        display: 'block',
                                        opacity: 0.8
                                    }}>
                                        {phase.id}
                                    </span>
                                    <h3 style={{
                                        color: 'white',
                                        fontSize: '1.5rem',
                                        fontWeight: '700',
                                        marginBottom: '1rem'
                                    }}>
                                        {phase.title}
                                    </h3>
                                    <p style={{
                                        color: '#888',
                                        lineHeight: '1.6',
                                        fontSize: '0.95rem'
                                    }}>
                                        {phase.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Second Copy (for seamless loop) */}
                    <div className="marquee-content" aria-hidden="true">
                        {phases.map((phase, index) => (
                            <motion.div
                                key={`2-${phase.id}`}
                                style={{
                                    flex: '0 0 300px',
                                    background: '#0a0a0a',
                                    borderRadius: '1.5rem',
                                    padding: '2.5rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    minHeight: '350px',
                                    position: 'relative',
                                    border: '1px solid #222'
                                }}
                                whileHover={{
                                    y: -10,
                                    borderColor: '#444',
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <div>
                                    <span style={{
                                        fontSize: '3rem',
                                        fontWeight: '700',
                                        color: '#ff4d4d',
                                        marginBottom: '1rem',
                                        display: 'block',
                                        opacity: 0.8
                                    }}>
                                        {phase.id}
                                    </span>
                                    <h3 style={{
                                        color: 'white',
                                        fontSize: '1.5rem',
                                        fontWeight: '700',
                                        marginBottom: '1rem'
                                    }}>
                                        {phase.title}
                                    </h3>
                                    <p style={{
                                        color: '#888',
                                        lineHeight: '1.6',
                                        fontSize: '0.95rem'
                                    }}>
                                        {phase.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
