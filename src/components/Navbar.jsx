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
            padding: scrolled ? '1rem 0' : '1.5rem 0',
            background: scrolled || mobileMenuOpen ? 'rgba(0,0,0,0.9)' : 'transparent',
            backdropFilter: scrolled || mobileMenuOpen ? 'blur(10px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                maxWidth: '1400px',
                margin: '0 auto',
                padding: '0 2rem'
            }}>
                {/* Logo Section */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <Link to="/" style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        textDecoration: 'none',
                        zIndex: 1001,
                    }}>
                        <img src="/logo.png" alt="Logo" style={{
                            width: '28px',
                            height: '28px',
                            objectFit: 'contain'
                        }} />
                        <span style={{
                            fontSize: '1rem',
                            fontWeight: '700',
                            color: 'white',
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase'
                        }}>
                            Seyali Solutions
                        </span>
                    </Link>

                    {/* BETA ACCESS Badge */}
                    <div style={{
                        fontSize: '0.65rem',
                        fontWeight: '600',
                        color: 'rgba(255,255,255,0.6)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        padding: '2px 6px',
                        borderRadius: '4px',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        marginLeft: '0.5rem'
                    }}>
                        BETA ACCESS
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    style={{
                        display: 'none',
                        background: 'transparent',
                        border: 'none',
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

                {/* Desktop Navigation */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2.5rem'
                }} className="desktop-nav">
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '2rem'
                    }}>
                        {navItems.map((item) => (
                            <div key={item.name} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                <Link to={item.path} style={{
                                    color: isActive(item.path) ? 'white' : 'rgba(255,255,255,0.7)',
                                    textDecoration: 'none',
                                    fontSize: '0.85rem',
                                    fontWeight: '500',
                                    transition: 'color 0.3s ease'
                                }}
                                    onMouseOver={(e) => e.target.style.color = 'white'}
                                    onMouseOut={(e) => {
                                        if (!isActive(item.path)) e.target.style.color = 'rgba(255,255,255,0.7)';
                                    }}
                                >
                                    {item.name}
                                </Link>
                                {item.hasDropdown && (
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5, color: 'white' }}>
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                )}
                            </div>
                        ))}
                    </div>



                    {/* Contact/Connect Button (Optional based on image having "Connect") */}
                    <Link to="/contact" style={{
                        background: 'white',
                        color: 'black',
                        padding: '0.6rem 1.4rem',
                        borderRadius: '50px',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        boxShadow: scrolled ? '0 4px 15px rgba(255,255,255,0.2)' : 'none'
                    }}
                        onMouseOver={(e) => {
                            e.target.style.transform = 'translateY(-1px)';
                            e.target.style.boxShadow = '0 6px 20px rgba(255,255,255,0.3)';
                        }}
                        onMouseOut={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = scrolled ? '0 4px 15px rgba(255,255,255,0.2)' : 'none';
                        }}
                    >
                        Connect
                    </Link>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{
                            background: 'rgba(0, 0, 0, 0.95)',
                            backdropFilter: 'blur(16px)',
                            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                            overflow: 'hidden'
                        }}
                    >
                        <div style={{
                            padding: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem',
                            alignItems: 'center'
                        }}>
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    style={{
                                        color: 'white',
                                        textDecoration: 'none',
                                        fontSize: '1.2rem',
                                        fontWeight: '500'
                                    }}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                to="/contact"
                                onClick={() => setMobileMenuOpen(false)}
                                style={{
                                    background: 'white',
                                    color: 'black',
                                    padding: '0.75rem 2rem',
                                    borderRadius: '50px',
                                    textDecoration: 'none',
                                    fontWeight: '600',
                                    width: '100%',
                                    textAlign: 'center'
                                }}
                            >
                                Connect
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                @media (max-width: 1024px) {
                    .desktop-nav {
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
