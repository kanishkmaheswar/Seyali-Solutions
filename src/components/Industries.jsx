import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Wallet, ShoppingCart, Code } from 'lucide-react';


const services = [
    {
        title: 'Healthcare',
        description: 'Streamlining processes, enhancing patient care, and improving outcomes technology and insights.',
        icon: <Heart size={24} />
    },
    {
        title: 'Finance',
        description: 'Optimizing operations, managing risk, and driving growth in a rapidly evolving financial landscape.',
        icon: <Wallet size={24} />
    },
    {
        title: 'Retail',
        description: 'Optimizing inventory management, and driving sales through data-driven strategies.',
        icon: <ShoppingCart size={24} />
    },
    {
        title: 'Software',
        description: 'Providing innovative software solutions that empower businesses to streamline operations and enhance productivity.',
        icon: <Code size={24} />
    }
];

const Industries = () => {
    return (
        <section id="industries" className="section" style={{ background: '#000', padding: '8rem 0' }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '4rem',
                    alignItems: 'flex-start'
                }}>

                    {/* Left Column - Content */}
                    <div style={{ flex: '1 1 500px' }}>
                        {/* Pill */}
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
                            <span style={{ color: '#a3a3a3', fontSize: '0.8rem', fontWeight: '500' }}>Industries</span>
                        </div>

                        <h2 style={{
                            fontSize: '3.5rem',
                            fontWeight: '700',
                            color: 'white',
                            marginBottom: '1.5rem',
                            lineHeight: '1.1',
                            letterSpacing: '-0.02em'
                        }}>
                            Transformative Solutions <br />
                            <span style={{ color: '#888' }}>Across the Spectrum</span>
                        </h2>

                        <p style={{ color: '#a3a3a3', marginBottom: '4rem', lineHeight: '1.6', maxWidth: '500px' }}>
                            Our range of solutions tailored to meet the unique needs of diverse industries, driving transformation across the entire spectrum.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    style={{
                                        background: '#0a0a0a',
                                        border: '1px solid #222',
                                        borderRadius: '1rem',
                                        padding: '2.5rem',
                                        cursor: 'pointer',
                                        transition: 'border-color 0.3s ease'
                                    }}
                                    whileHover={{ borderColor: '#444' }}
                                >
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        background: '#111',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: '1.5rem',
                                        color: 'white',
                                        border: '1px solid #222'
                                    }}>
                                        {service.icon}
                                    </div>
                                    <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1rem' }}>{service.title}</h3>
                                    <p style={{ color: '#888', lineHeight: '1.6', fontSize: '0.95rem' }}>{service.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Sticky Image */}
                    <div style={{
                        flex: '1 1 400px',
                        position: 'sticky',
                        top: '100px',
                        height: 'fit-content'
                    }}>
                        <style>
                            {`
                                @media (max-width: 900px) {
                                    .sticky-image-container {
                                        display: none !important;
                                    }
                                }
                                @media (min-width: 901px) {
                                    .sticky-image-container {
                                        display: block;
                                    }
                                }
                            `}
                        </style>
                        <div className="sticky-image-container" style={{
                            width: '100%',
                            height: '600px',
                            background: '#111',
                            borderRadius: '2rem',
                            overflow: 'hidden',
                            border: '1px solid #222'
                        }}>
                            <img
                                src="/hand.png"
                                alt="Hand"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Industries;
