import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Rocket, Users, Zap } from 'lucide-react';

const reasons = [
    {
        icon: <Rocket size={32} />,
        title: 'Innovation First',
        description: 'We stay ahead of the curve by leveraging the latest advancements in AI and technology to give you a competitive edge.',
        image: '/innovation.png'
    },
    {
        icon: <ShieldCheck size={32} />,
        title: 'Enterprise Security',
        description: 'Your data safety is paramount. We build resilient systems with robust security protocols embedded at every layer.',
        image: '/security.png'
    },
    {
        icon: <Zap size={32} />,
        title: 'High Performance',
        description: 'Speed and efficiency are in our DNA. We optimize every line of code to ensure your applications run lightning fast.',
        image: '/performance.png'
    },
    {
        icon: <Users size={32} />,
        title: 'Client-Centric',
        description: 'We believe in true partnership. Your goals become our goals as we work collaboratively to realize your vision.',
        image: '/collaboration.png'
    }
];

const WhyChooseUs = () => {
    return (
        <section id="why-choose-us" className="section" style={{ background: '#000', padding: '2rem 0', position: 'relative' }}>

            {/* Background Gradients for aesthetic depth */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '0',
                width: '30%',
                height: '40%',
                background: 'radial-gradient(circle, rgba(255, 77, 77, 0.05) 0%, transparent 70%)',
                filter: 'blur(60px)',
                pointerEvents: 'none'
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '20%',
                right: '0',
                width: '30%',
                height: '40%',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
                filter: 'blur(60px)',
                pointerEvents: 'none'
            }}></div>

            <div className="container">
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
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
                        <span style={{ color: '#a3a3a3', fontSize: '0.8rem', fontWeight: '500' }}>Why Choose Us</span>
                    </div>
                    <h2 style={{
                        fontSize: '3.5rem',
                        fontWeight: '700',
                        color: 'white',
                        marginBottom: '1.5rem',
                        lineHeight: '1.1',
                        letterSpacing: '-0.02em'
                    }}>
                        Defining The Standard <br />
                        <span style={{ color: '#888' }}>For Excellence</span>
                    </h2>
                    <p style={{
                        color: '#a3a3a3',
                        maxWidth: '600px',
                        margin: '0 auto',
                        lineHeight: '1.6'
                    }}>
                        We combine technical expertise with creative innovation to deliver solutions that not only meet expectations but exceed them.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="bento-grid">
                    {reasons.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`bento-card card-${index}`}
                            style={{
                                background: 'rgba(10, 10, 10, 0.6)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid #222',
                                borderRadius: '1.5rem',
                                padding: '2.5rem',
                                position: 'relative',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}
                            whileHover={{
                                y: -5,
                                borderColor: '#444',
                            }}
                        >
                            {/* Background Image with Overlay */}
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                zIndex: 0,
                                backgroundImage: `url(${item.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                opacity: 0.2, // Subtle visibility
                                transition: 'opacity 0.3s ease, transform 0.5s ease'
                            }}
                                className="card-bg-image"
                            ></div>

                            {/* Gradient Overlay for text readability */}
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 100%)',
                                zIndex: 0
                            }}></div>

                            {/* Hover Gradient Overlay */}
                            <div className="hover-gradient" style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'radial-gradient(circle at center, rgba(255, 77, 77, 0.1) 0%, transparent 70%)',
                                opacity: 0,
                                transition: 'opacity 0.3s ease',
                                pointerEvents: 'none',
                                zIndex: 0
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                                onMouseLeave={(e) => e.currentTarget.style.opacity = 0}
                            ></div>

                            <div style={{
                                width: '60px',
                                height: '60px',
                                background: 'rgba(17, 17, 17, 0.8)',
                                backdropFilter: 'blur(5px)',
                                borderRadius: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.5rem',
                                color: '#ff4d4d',
                                border: '1px solid #333',
                                position: 'relative',
                                zIndex: 1
                            }}>
                                {item.icon}
                            </div>

                            <h3 style={{
                                color: 'white',
                                fontSize: '1.8rem',
                                marginBottom: '1rem',
                                fontWeight: '700',
                                position: 'relative',
                                zIndex: 1
                            }}>
                                {item.title}
                            </h3>

                            <p style={{
                                color: '#ccc',
                                lineHeight: '1.6',
                                fontSize: '1rem',
                                position: 'relative',
                                zIndex: 1,
                                maxWidth: '90%'
                            }}>
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
                .bento-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.5rem;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                /* Bento Spans */
                .card-0 { grid-column: span 2; } /* Large horizontal */
                .card-1 { grid-column: span 1; } /* Standard */
                .card-2 { grid-column: span 1; } /* Standard */
                .card-3 { grid-column: span 2; } /* Large horizontal */
                
                @media (max-width: 900px) {
                    .bento-grid {
                        grid-template-columns: 1fr; /* Stack on mobile */
                    }
                    .card-0, .card-1, .card-2, .card-3 {
                        grid-column: span 1;
                    }
                }
            `}</style>
        </section>
    );
};

export default WhyChooseUs;
