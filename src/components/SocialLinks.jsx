import React from 'react';
import { motion } from 'framer-motion';
import { X, Github, Linkedin } from 'lucide-react';

const socialLinks = [
    {
        icon: <X size={40} />,
        title: 'Follow us on X',
        description: 'Stay in the loop with our latest UX/AI innovations and insights.',
        buttonText: 'Follow @seyali_solutions',
        link: 'https://twitter.com'
    },
    {
        icon: <Github size={40} />,
        title: 'Contribute on GitHub',
        description: 'Collaborate, contribute, and build the future together.',
        buttonText: 'Git checkout our projects',
        link: 'https://github.com'
    },
    {
        icon: <Linkedin size={40} />,
        title: 'Connect on LinkedIn',
        description: 'Connect with us on LinkedIn and hear about the latest.',
        buttonText: 'Connect with us',
        link: 'https://linkedin.com'
    }
];

const SocialLinks = () => {
    return (
        <section className="section" style={{ background: '#000', padding: '4rem 0' }}>
            <div className="container" style={{ maxWidth: '1000px' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    border: '1px solid #111',
                    borderRadius: '1.5rem',
                    overflow: 'hidden',
                    background: '#050505'
                }}>
                    {socialLinks.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            style={{
                                border: '1px solid #111',
                                padding: '2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                minHeight: '260px'
                            }}
                            whileHover={{
                                backgroundColor: '#0a0a0a',
                                transition: { duration: 0.3 }
                            }}
                        >
                            <div>
                                <div style={{
                                    color: 'white',
                                    marginBottom: '1.5rem',
                                    display: 'inline-block',
                                    opacity: 0.9
                                }}>
                                    {React.cloneElement(item.icon, { size: 32 })}
                                </div>
                                <h3 style={{
                                    color: 'white',
                                    fontSize: '1.4rem',
                                    fontWeight: '600',
                                    marginBottom: '0.8rem',
                                    letterSpacing: '-0.01em'
                                }}>
                                    {item.title}
                                </h3>
                                <p style={{
                                    color: '#666',
                                    lineHeight: '1.5',
                                    fontSize: '0.9rem',
                                    marginBottom: '1.5rem'
                                }}>
                                    {item.description}
                                </p>
                            </div>

                            <motion.a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    padding: '0.6rem 1.2rem',
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid #222',
                                    color: 'white',
                                    borderRadius: '0.6rem',
                                    fontSize: '0.8rem',
                                    fontWeight: '500',
                                    textDecoration: 'none',
                                    width: 'fit-content',
                                    transition: 'all 0.3s ease'
                                }}
                                whileHover={{
                                    background: 'white',
                                    color: 'black',
                                    borderColor: 'white'
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {item.buttonText}
                            </motion.a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialLinks;
