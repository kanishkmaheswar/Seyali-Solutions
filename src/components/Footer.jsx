import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            background: '#000',
            padding: '0',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Decorative Globe Background */}
            <div style={{
                position: 'absolute',
                top: '-150px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none'
            }}>
                {/* Dot pattern overlay */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                    borderRadius: '50%'
                }}></div>
            </div>

            {/* Tagline */}
            <div style={{
                textAlign: 'center',
                padding: '4rem 2rem 3rem',
                position: 'relative',
                zIndex: 1
            }}>
                <p style={{
                    color: '#888',
                    fontSize: '1rem',
                    maxWidth: '600px',
                    margin: '0 auto',
                    lineHeight: '1.6'
                }}>
                    Empowering your projects, enhancing your success, every step of the way.
                </p>
            </div>

            {/* Divider */}
            <div style={{
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1) 50%, transparent)',
                margin: '0 2rem'
            }}></div>

            {/* Main Footer Content */}
            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '3rem',
                padding: '3rem 2rem',
                position: 'relative',
                zIndex: 1
            }}>
                {/* Brand Section */}
                <div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginBottom: '1.5rem'
                    }}>
                        <img src="/logo.png" alt="Seyali Solutions Logo" style={{
                            width: '40px',
                            height: '40px',
                            objectFit: 'contain'
                        }} />
                        <h3 style={{
                            fontSize: '1.2rem',
                            color: '#ff4d4d',
                            opacity: '1',
                            fontWeight: '600',
                            margin: 0
                        }}>
                            Seyali Solutions
                        </h3>
                    </div>
                    <a
                        href="mailto:seyalisolutions@gmail.com"
                        style={{
                            color: '#888',
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            marginBottom: '1.5rem',
                            transition: 'color 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.target.style.color = '#ff4d4d'}
                        onMouseLeave={(e) => e.target.style.color = '#888'}
                    >
                        seyalisolutions@gmail.com
                        <span style={{ fontSize: '0.8rem' }}>↗</span>
                    </a>
                    <div style={{ color: '#555', fontSize: '0.9rem' }}>
                        <p style={{ margin: '0.25rem 0' }}>© {new Date().getFullYear()} Seyali Solutions.</p>
                        <p style={{ margin: '0.25rem 0' }}>All rights reserved.</p>
                    </div>
                </div>

                {/* Links Section */}
                <div>
                    <h4 style={{
                        color: 'white',
                        fontSize: '1rem',
                        fontWeight: '600',
                        marginBottom: '1.5rem'
                    }}>
                        Links
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <a
                            href="#services"
                            style={{
                                color: '#888',
                                textDecoration: 'none',
                                transition: 'color 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.target.style.color = 'white'}
                            onMouseLeave={(e) => e.target.style.color = '#888'}
                        >
                            Services
                        </a>
                        <a
                            href="#industries"
                            style={{
                                color: '#888',
                                textDecoration: 'none',
                                transition: 'color 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.target.style.color = 'white'}
                            onMouseLeave={(e) => e.target.style.color = '#888'}
                        >
                            Industries
                        </a>
                        <a
                            href="#team"
                            style={{
                                color: '#888',
                                textDecoration: 'none',
                                transition: 'color 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.target.style.color = 'white'}
                            onMouseLeave={(e) => e.target.style.color = '#888'}
                        >
                            Team
                        </a>
                    </div>
                </div>

                {/* Social Media Section */}
                <div>
                    <h4 style={{
                        color: 'white',
                        fontSize: '1rem',
                        fontWeight: '600',
                        marginBottom: '1.5rem'
                    }}>
                        Social Media
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <a
                            href="https://www.instagram.com/seyali_solutions?igsh=MWNqeXU3N2o0c3Z6OA=="
                            style={{
                                color: '#888',
                                textDecoration: 'none',
                                transition: 'color 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.target.style.color = 'white'}
                            onMouseLeave={(e) => e.target.style.color = '#888'}
                        >
                            Instagram
                        </a>
                        <a
                            href="#"
                            style={{
                                color: '#888',
                                textDecoration: 'none',
                                transition: 'color 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.target.style.color = 'white'}
                            onMouseLeave={(e) => e.target.style.color = '#888'}
                        >
                            LinkedIn
                        </a>
                        <a
                            href="#"
                            style={{
                                color: '#888',
                                textDecoration: 'none',
                                transition: 'color 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.target.style.color = 'white'}
                            onMouseLeave={(e) => e.target.style.color = '#888'}
                        >
                            Twitter
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
