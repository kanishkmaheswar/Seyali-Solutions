import React, { useState } from 'react';
import { motion } from 'framer-motion';

const services = [
    {
        title: 'AI solutions for businesses',
        description: 'Harness the power of artificial intelligence to drive innovation and growth.',
        image: '/ai.PNG'
    },
    {
        title: 'Immersive Web & App Experiences',
        description: 'Craft seamless, high-performance digital experiences engineered to captivate users and strengthen brand presence across platforms.',
        image: '/web.PNG'
    },
    {
        title: 'Enterprise-Grade Data Solutions',
        description: 'Enable robust data pipelines, dynamic dashboards, and predictive analytics that unlock deeper business intelligence.',
        image: '/Screenshot 2025-11-20 133110.png'
    }
];

const Services = () => {
    const [activeService, setActiveService] = useState(1);

    return (
        <section id="services" className="section" style={{ background: '#000', padding: '8rem 0' }}>
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
                        <span style={{ color: '#fbbf24', fontSize: '0.6rem' }}>●</span>
                        <span style={{ color: '#a3a3a3', fontSize: '0.8rem', fontWeight: '500' }}>Our services</span>
                    </div>
                    <h2 style={{
                        fontSize: '3.5rem',
                        fontWeight: '700',
                        color: 'white',
                        marginBottom: '1.5rem',
                        lineHeight: '1.1',
                        letterSpacing: '-0.02em'
                    }}>
                        Elevate Your Business <br />
                        <span style={{ color: '#888' }}>With Our Solutions</span>
                    </h2>
                    <p style={{
                        color: '#a3a3a3',
                        maxWidth: '700px',
                        margin: '0 auto',
                        lineHeight: '1.6'
                    }}>
                        Our services are tailored to meet the unique security needs of your software and applications. Contact us for a customized solution.
                    </p>
                </div>

                {/* Two Column Layout */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: '3rem',
                    alignItems: 'start'
                }}>
                    {/* Left Column - Featured Service Card */}
                    <motion.div
                        key={activeService}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            background: '#0a0a0a',
                            border: '1px solid #222',
                            borderRadius: '1.5rem',
                            padding: '3rem',
                            minHeight: '500px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}
                    >
                        {/* Image Area */}
                        <div style={{
                            width: '100%',
                            height: '300px',
                            background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
                            borderRadius: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '2rem',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            {/* Abstract background pattern */}
                            <div style={{
                                position: 'absolute',
                                width: '200px',
                                height: '200px',
                                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
                                borderRadius: '50%',
                                filter: 'blur(40px)'
                            }}></div>

                            {/* Service Image */}
                            <img
                                src={services[activeService].image}
                                alt={services[activeService].title}
                                style={{
                                    maxWidth: '95%',
                                    maxHeight: '95%',
                                    objectFit: 'contain',
                                    zIndex: 1
                                }}
                            />
                        </div>

                        {/* Service Info */}
                        <div>
                            <h3 style={{
                                color: 'white',
                                fontSize: '1.8rem',
                                marginBottom: '1rem',
                                fontWeight: '600'
                            }}>
                                {services[activeService].title}
                            </h3>
                            <p style={{
                                color: '#888',
                                lineHeight: '1.6',
                                fontSize: '0.95rem'
                            }}>
                                {services[activeService].description}
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Column - Service List */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                onClick={() => setActiveService(index)}
                                style={{
                                    background: activeService === index ? '#0a0a0a' : 'transparent',
                                    border: `1px solid ${activeService === index ? '#444' : '#222'}`,
                                    borderRadius: '1rem',
                                    padding: '2rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                                onMouseEnter={(e) => {
                                    if (activeService !== index) {
                                        e.currentTarget.style.borderColor = '#333';
                                        e.currentTarget.style.background = 'rgba(10, 10, 10, 0.5)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (activeService !== index) {
                                        e.currentTarget.style.borderColor = '#222';
                                        e.currentTarget.style.background = 'transparent';
                                    }
                                }}
                            >
                                {/* Gold indicator */}
                                {activeService === index && (
                                    <div style={{
                                        position: 'absolute',
                                        left: 0,
                                        top: 0,
                                        bottom: 0,
                                        width: '3px',
                                        background: '#fbbf24'
                                    }}></div>
                                )}

                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                    <div style={{
                                        width: '8px',
                                        height: '8px',
                                        background: '#fbbf24',
                                        borderRadius: '50%',
                                        marginTop: '0.5rem',
                                        flexShrink: 0
                                    }}></div>
                                    <div style={{ flex: 1 }}>
                                        <h4 style={{
                                            color: 'white',
                                            fontSize: '1.3rem',
                                            marginBottom: '0.5rem',
                                            fontWeight: '600'
                                        }}>
                                            {service.title}
                                        </h4>
                                        <p style={{
                                            color: '#888',
                                            lineHeight: '1.6',
                                            fontSize: '0.9rem'
                                        }}>
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
