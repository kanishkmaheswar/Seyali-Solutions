import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: "E-Commerce Revolution",
        category: "Web Development",
        image: "/web.PNG", // Reusing existing image for now
        description: "A high-performance e-commerce platform built for scale, featuring real-time inventory management and AI-driven recommendations."
    },
    {
        title: "Predictive Analytics Dashboard",
        category: "Data Science",
        image: "/Screenshot 2025-11-20 133110.png",
        description: "An enterprise-grade dashboard providing actionable insights through predictive modeling and data visualization."
    },
    {
        title: "Healthcare Patient System",
        category: "AI Solutions",
        image: "/ai.PNG",
        description: "An AI-powered patient management system optimizing hospital workflows and improving patient care outcomes."
    }
];

const Portfolio = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="section" style={{ paddingTop: '120px', minHeight: '100vh' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
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
                        <span style={{ color: '#a3a3a3', fontSize: '0.8rem', fontWeight: '500' }}>Portfolio</span>
                    </div>
                    <h1 style={{
                        fontSize: '3.5rem',
                        fontWeight: '700',
                        color: 'white',
                        marginBottom: '1.5rem'
                    }}>
                        Our Recent Work
                    </h1>
                    <p style={{ color: '#a3a3a3', maxWidth: '600px', margin: '0 auto' }}>
                        Explore how we've helped businesses transform their digital presence and operations.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '2rem'
                }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                background: '#0a0a0a',
                                border: '1px solid #222',
                                borderRadius: '1.5rem',
                                overflow: 'hidden',
                                cursor: 'pointer'
                            }}
                            whileHover={{ y: -10, transition: { duration: 0.2 } }}
                        >
                            <div style={{ height: '250px', overflow: 'hidden' }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                            <div style={{ padding: '2rem' }}>
                                <span style={{
                                    color: '#ff4d4d',
                                    fontSize: '0.8rem',
                                    fontWeight: '600',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}>
                                    {project.category}
                                </span>
                                <h3 style={{ color: 'white', fontSize: '1.5rem', margin: '0.5rem 0' }}>
                                    {project.title}
                                </h3>
                                <p style={{ color: '#888', fontSize: '0.95rem' }}>
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
