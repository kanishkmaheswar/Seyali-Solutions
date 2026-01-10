import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'About', path: '/about' },
    ];

    const isActive = (path) => {
        if (path === '/' && location.pathname !== '/') return false;
        return location.pathname.startsWith(path);
    };

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            transition: 'all 0.3s ease',
            padding: '1.5rem 0',
            background: scrolled || mobileMenuOpen ? 'rgba(0,0,0,0.8)' : 'transparent',
            backdropFilter: scrolled || mobileMenuOpen ? 'blur(10px)' : 'none',
            borderBottom: 'none'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'relative'
            }}>
                {/* Logo */}
                <Link to="/" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    textDecoration: 'none',
                    zIndex: 1001,
                    opacity: scrolled ? 1 : 1, // Always visible now
                    pointerEvents: 'auto',
                    transition: 'opacity 0.3s ease'
                }}>
                    <img src="/logo.png" alt="Seyali Solutions Logo" style={{
                        width: '32px',
                        height: '32px',
                        objectFit: 'contain'
                    }} />
                    <span style={{
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        color: 'white',
                        letterSpacing: '-0.02em'
                    }}>
                        Seyali Solutions
                    </span>
                </Link>

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
                    {navItems.map((item) => (
                        <Link key={item.name} to={item.path} style={{
                            color: isActive(item.path) ? 'white' : '#a3a3a3',
                            background: isActive(item.path) ? 'rgba(255,255,255,0.1)' : 'transparent',
                            textDecoration: 'none',
                            fontSize: '0.9rem',
                            fontWeight: '500',
                            padding: '0.5rem 1.5rem',
                            borderRadius: '25px',
                            transition: 'all 0.3s ease'
                        }}
                            onMouseOver={(e) => {
                                if (!isActive(item.path)) {
                                    e.target.style.color = 'white';
                                    e.target.style.background = 'rgba(255,255,255,0.05)';
                                }
                            }}
                            onMouseOut={(e) => {
                                if (!isActive(item.path)) {
                                    e.target.style.color = '#a3a3a3';
                                    e.target.style.background = 'transparent';
                                }
                            }}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Desktop Right Button */}
                <Link to="/contact" style={{
                    background: 'rgba(20, 20, 20, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    padding: '0.6rem 1.5rem',
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    opacity: 1,
                    pointerEvents: 'auto'
                }} className="desktop-contact-btn"
                    onMouseOver={(e) => {
                        e.target.style.borderColor = '#ff4d4d';
                        e.target.style.background = 'rgba(255,255,255,0.05)';
                        e.target.style.color = '#ff4d4d';
                    }}
                    onMouseOut={(e) => {
                        e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                        e.target.style.background = 'rgba(20, 20, 20, 0.8)';
                        e.target.style.color = 'white';
                    }}
                >
                    Contact
                </Link>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        style={{
                            position: 'fixed',
                            top: '5rem', // Below the navbar
                            left: '1rem',
                            right: '1rem',
                            background: 'rgba(10, 10, 10, 0.95)',
                            backdropFilter: 'blur(16px)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '1rem',
                            padding: '1.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1rem',
                            zIndex: 999, // Below the navbar button (1001)
                            boxShadow: '0 10px 40px -10px rgba(0,0,0,0.5)'
                        }}
                    >
                        {navItems.concat({ name: 'Contact', path: '/contact' }).map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                onClick={() => setMobileMenuOpen(false)}
                                style={{
                                    color: isActive(item.path) ? '#ffffffff' : '#6a6a6aff',
                                    textDecoration: 'none',
                                    fontSize: '1.1rem',
                                    fontWeight: '500',
                                    padding: '0.75rem',
                                    width: '100%',
                                    textAlign: 'center',
                                    borderBottom: '1px solid rgba(255,255,255,0.03)',
                                    display: 'block'
                                }}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

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
