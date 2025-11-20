import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            transition: 'all 0.3s ease',
            padding: '1.5rem 0',
            background: 'transparent',
            backdropFilter: 'none',
            borderBottom: 'none'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'relative'
            }}>
                {/* Logo */}
                <a href="#home" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    textDecoration: 'none',
                    zIndex: 1001,
                    opacity: scrolled ? 0 : 1,
                    pointerEvents: scrolled ? 'none' : 'auto',
                    transition: 'opacity 0.3s ease'
                }}>
                    <div style={{
                        width: '24px',
                        height: '24px',
                        background: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '4px'
                    }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 5v14M5 12h14" />
                        </svg>
                    </div>
                    <span style={{
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        color: 'white',
                        letterSpacing: '-0.02em'
                    }}>
                        Seyali Solutions
                    </span>
                </a>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    style={{
                        display: 'none',
                        background: 'rgba(20, 20, 20, 0.8)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '8px',
                        padding: '0.5rem',
                        cursor: 'pointer',
                        zIndex: 1001
                    }}
                    className="mobile-menu-btn"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        {mobileMenuOpen ? (
                            <path d="M18 6L6 18M6 6l12 12" />
                        ) : (
                            <path d="M3 12h18M3 6h18M3 18h18" />
                        )}
                    </svg>
                </button>

                {/* Desktop Center Navigation */}
                <div style={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'rgba(20, 20, 20, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '50px',
                    padding: '0.5rem 0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    backdropFilter: 'blur(10px)'
                }} className="desktop-nav">
                    {['Home', 'Services', 'Industries', 'Team'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} style={{
                            color: '#a3a3a3',
                            textDecoration: 'none',
                            fontSize: '0.9rem',
                            fontWeight: '500',
                            padding: '0.5rem 1.5rem',
                            borderRadius: '25px',
                            transition: 'all 0.3s ease'
                        }}
                            onMouseOver={(e) => {
                                e.target.style.color = 'white';
                                e.target.style.background = 'rgba(255,255,255,0.1)';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.color = '#a3a3a3';
                                e.target.style.background = 'transparent';
                            }}
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* Desktop Right Button */}
                <a href="#contact" style={{
                    background: 'rgba(20, 20, 20, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    padding: '0.6rem 1.5rem',
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    opacity: scrolled ? 0 : 1,
                    pointerEvents: scrolled ? 'none' : 'auto'
                }} className="desktop-contact-btn"
                    onMouseOver={(e) => {
                        e.target.style.borderColor = '#FFD700';
                        e.target.style.background = 'rgba(255,255,255,0.05)';
                        e.target.style.color = '#FFD700';
                    }}
                    onMouseOut={(e) => {
                        e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                        e.target.style.background = 'rgba(20, 20, 20, 0.8)';
                        e.target.style.color = 'white';
                    }}
                >
                    Contact
                </a>
            </div>

            {/* Mobile Menu */}
            <div style={{
                position: 'fixed',
                top: '80px',
                left: 0,
                right: 0,
                background: 'rgba(10, 10, 10, 0.98)',
                backdropFilter: 'blur(20px)',
                padding: '2rem',
                display: mobileMenuOpen ? 'flex' : 'none',
                flexDirection: 'column',
                gap: '1rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                zIndex: 1000
            }} className="mobile-menu">
                {['Home', 'Services', 'Industries', 'Team', 'Contact'].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                            color: '#a3a3a3',
                            textDecoration: 'none',
                            fontSize: '1.1rem',
                            fontWeight: '500',
                            padding: '1rem',
                            borderRadius: '8px',
                            transition: 'all 0.3s ease',
                            background: 'rgba(255, 255, 255, 0.05)'
                        }}
                        onMouseOver={(e) => {
                            e.target.style.color = '#FFD700';
                            e.target.style.background = 'rgba(255, 215, 0, 0.1)';
                        }}
                        onMouseOut={(e) => {
                            e.target.style.color = '#a3a3a3';
                            e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                        }}
                    >
                        {item}
                    </a>
                ))}
            </div>

            <style>{`
                @media (max-width: 900px) {
                    .desktop-nav {
                        display: none !important;
                    }
                    .desktop-contact-btn {
                        display: none !important;
                    }
                    .mobile-menu-btn {
                        display: block !important;
                    }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
