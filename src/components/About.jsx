import React from 'react';

const About = () => {
    return (
        <section id="about" className="section" style={{ background: '#000', padding: '6rem 0' }}>
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
                        <span style={{ color: '#a3a3a3', fontSize: '0.8rem', fontWeight: '500' }}>About us</span>
                    </div>
                    <h2 style={{
                        fontSize: '3.5rem',
                        fontWeight: '700',
                        color: 'white',
                        marginBottom: '1.5rem',
                        lineHeight: '1.1',
                        letterSpacing: '-0.02em'
                    }}>
                        Crafting Tomorrow's <br />
                        <span style={{ color: '#888' }}>Innovative Solutions</span>
                    </h2>
                    <p style={{
                        color: '#a3a3a3',
                        maxWidth: '600px',
                        margin: '0 auto',
                        lineHeight: '1.6'
                    }}>
                        We're consistently pushing the boundaries of innovation to create groundbreaking solutions that effectively meet today's challenges.
                    </p>
                </div>

                {/* Cards Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    marginBottom: '6rem'
                }}>
                    {/* Card 1 */}
                    <div className="about-card" style={{
                        background: '#0a0a0a',
                        border: '1px solid #222',
                        borderRadius: '1rem',
                        padding: '2.5rem',
                        transition: 'transform 0.3s ease'
                    }}>
                        <div style={{ marginBottom: '2rem', color: '#ff4d4d' }}>
                            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M7 17L17 7" />
                                <path d="M7 7h10v10" />
                            </svg>
                        </div>
                        <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1rem' }}>Scalable Solutions</h3>
                        <p style={{ color: '#888', lineHeight: '1.6' }}>We offer flexible and scalable solutions that evolve with your startup.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="about-card" style={{
                        background: '#0a0a0a',
                        border: '1px solid #222',
                        borderRadius: '1rem',
                        padding: '2.5rem',
                        transition: 'transform 0.3s ease'
                    }}>
                        <div style={{ marginBottom: '2rem', color: '#ff4d4d' }}>
                            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="3" />
                                <path d="M12 15v4" />
                                <path d="M12 9V5" />
                                <circle cx="12" cy="20" r="1" />
                                <circle cx="12" cy="4" r="1" />
                                <path d="M15 12h4" />
                                <path d="M9 12H5" />
                                <circle cx="20" cy="12" r="1" />
                                <circle cx="4" cy="12" r="1" />
                            </svg>
                        </div>
                        <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1rem' }}>AI Automation</h3>
                        <p style={{ color: '#888', lineHeight: '1.6' }}>Leverage our machine learning algorithms to assess results.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="about-card" style={{
                        background: '#0a0a0a',
                        border: '1px solid #222',
                        borderRadius: '1rem',
                        padding: '2.5rem',
                        transition: 'transform 0.3s ease'
                    }}>
                        <div style={{ marginBottom: '2rem', color: '#ff4d4d' }}>
                            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                                <path d="M22 12A10 10 0 0 0 12 2v10z" />
                            </svg>
                        </div>
                        <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1rem' }}>Data Analysis</h3>
                        <p style={{ color: '#888', lineHeight: '1.6' }}>Go beyond watchlists and obtain the most up-to-date, accurate data.</p>
                    </div>
                </div>

                {/* Large Image Section */}
                <div style={{ position: 'relative', marginBottom: '4rem' }}>
                    <div style={{
                        width: '100%',
                        height: '500px',
                        borderRadius: '1rem',
                        marginBottom: '3rem',
                        overflow: 'hidden'
                    }}>
                        <video
                            src="https://cdn.pixabay.com/video/2024/03/12/203987-923133879_large.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </div>

                    <div>
                        <h3 style={{
                            color: 'white',
                            fontSize: '1.8rem',
                            lineHeight: '1.4',
                            marginBottom: '3rem',
                            maxWidth: '90%'
                        }}>
                            Seyali Solutions thrives on creativity, integrity, and a relentless pursuit of excellence. Our approach is grounded in strategic thinking with cutting-edge technology.
                        </h3>

                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-end',
                            flexWrap: 'wrap',
                            gap: '2rem'
                        }}>
                            <a href="#industries" style={{
                                display: 'inline-block',
                                padding: '0.8rem 2rem',
                                background: '#111',
                                border: '1px solid #333',
                                color: 'white',
                                borderRadius: '8px',
                                textDecoration: 'none',
                                fontSize: '0.9rem',
                                transition: 'all 0.3s ease'
                            }}
                                onMouseOver={(e) => {
                                    e.target.style.background = '#111';
                                    e.target.style.borderColor = '#FFD700';
                                    e.target.style.color = '#FFD700';
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.background = '#111';
                                    e.target.style.borderColor = '#333';
                                    e.target.style.color = 'white';
                                }}
                            >
                                Industries
                            </a>

                            <div style={{
                                flex: '1',
                                minWidth: '300px',
                                maxWidth: '500px',
                                color: '#888',
                                lineHeight: '1.8',
                                textAlign: 'right'
                            }}>
                                <p>
                                    Our journey began with a simple goal: to leverage the power of artificial intelligence to solve complex problems and create opportunities for growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
