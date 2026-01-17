import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, ShoppingBag, BarChart, CheckCircle2 } from 'lucide-react';

const serviceCategories = [
    {
        icon: <Monitor size={32} />,
        title: 'Cloud-Native Web & Application Engineering',
        description1: 'Engineering secure, scalable, and high-availability digital platforms for enterprise SaaS environments.',
        description2: 'We build cloud-native web and application systems using modern architectures that prioritize performance, resilience, and long-term scalability.',
        features: [
            'Enterprise Web Application Architecture',
            'Responsive & High-Performance Web Platforms',
            'SaaS Frontend Engineering (React, Next.js, SPA/PWA)',
            'Cross-Platform Mobile Application Development',
            'Progressive Web Applications (PWA)',
            'API-First Development & System Integrations',
            'Cloud Connectivity & Backend Services',
            'CMS & Headless Content Platforms',
            'Ongoing Platform Maintenance & Performance Optimization'
        ]
    },
    {
        icon: <ShoppingBag size={32} />,
        title: 'Product Engineering & Enterprise SaaS Development',
        description1: 'Designing and delivering scalable SaaS products and cloud-based platforms built for enterprise-grade operations.',
        description2: 'Our product engineering teams develop robust SaaS and enterprise solutions leveraging microservices, cloud-native infrastructure, and modern DevOps practices.',
        features: [
            'End-to-End SaaS Product Engineering',
            'Custom Enterprise Software Solutions',
            'Platform-as-a-Service (PaaS) Architecture',
            'MVP Development & Rapid Validation',
            'Product Strategy, Roadmapping & Technical Planning',
            'Microservices & API Architecture Design',
            'Cloud-Native Deployment & CI/CD Pipelines',
            'User Experience & Workflow Optimization',
            'Continuous Product Evolution & Feature Scaling'
        ]
    },
    {
        icon: <BarChart size={32} />,
        title: 'Enterprise Data, AI & Intelligent Automation',
        description1: 'Building enterprise-grade data platforms and AI systems that convert data into intelligence and automation.',
        description2: 'We enable organizations to drive data-led decision-making through advanced analytics, machine learning, and intelligent automation frameworks.',
        features: [
            'Enterprise Data Engineering & Analytics',
            'Artificial Intelligence & Applied ML Solutions',
            'Predictive Analytics & Forecasting Models',
            'Business Intelligence & Executive Dashboards',
            'Intelligent Process Automation (RPA + AI)',
            'Cloud Data Platforms & Architecture',
            'AI-Driven Business Optimization',
            'Data Governance, Security & Compliance'
        ]
    }

];

const ServiceDetails = () => {
    return (
        <section className="section" style={{ background: '#000', padding: '6rem 0' }}>
            <div className="container">
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
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {serviceCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            style={{
                                background: '#080808',
                                border: '1px solid #1a1a1a',
                                borderRadius: '2rem',
                                padding: '3rem',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <div style={{ color: '#ff4d4d', marginBottom: '1.5rem' }}>
                                {category.icon}
                            </div>

                            <h3 style={{
                                color: 'white',
                                fontSize: '1.8rem',
                                fontWeight: '700',
                                marginBottom: '1.5rem',
                                lineHeight: '1.2'
                            }}>
                                {category.title}
                            </h3>

                            <p style={{ color: '#aaa', fontSize: '1rem', marginBottom: '1rem', lineHeight: '1.6' }}>
                                {category.description1}
                            </p>

                            <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '2.5rem', lineHeight: '1.6' }}>
                                {category.description2}
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {category.features.map((feature, fIdx) => (
                                    <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                                        <CheckCircle2 size={18} style={{ color: '#ff4d4d', marginTop: '3px', flexShrink: 0 }} />
                                        <span style={{ color: '#e0e0e0', fontSize: '0.95rem', lineHeight: '1.4' }}>
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceDetails;
