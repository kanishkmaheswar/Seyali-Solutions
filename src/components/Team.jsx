import React from 'react';

const Team = () => {
    const teamMembers = [
        {
            name: "Arun Kumar",
            role: "Co-Founder & Data Scientist",
            image: "arun.jpg", // Placeholder
            instagram: "https://www.instagram.com/_arun._.kumar._official?igsh=MXhjemE1N2JheHB0bQ=="
        },
        {
            name: "Kanishk Maheshwaran",
            role: "Co-Founder & AI Strategy",
            image: "kanishk.PNG", // Placeholder
            instagram: "https://www.instagram.com/kani.xhk_?igsh=MXh6N2ZvYjAxcXVq"
        },
        
    ];

    return (
        <section id="team" className="section" style={{ background: '#000', padding: '6rem 0' }}>
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
                        <span style={{ color: '#a3a3a3', fontSize: '0.8rem', fontWeight: '500' }}>Our Team</span>
                    </div>
                    <h2 style={{
                        fontSize: '3.5rem',
                        fontWeight: '700',
                        color: 'white',
                        marginBottom: '1.5rem',
                        lineHeight: '1.1',
                        letterSpacing: '-0.02em'
                    }}>
                        Meet the Minds that Shaping <br />
                        <span style={{ color: '#888' }}>the Future</span>
                    </h2>
                    <p style={{
                        color: '#a3a3a3',
                        maxWidth: '600px',
                        margin: '0 auto',
                        lineHeight: '1.6'
                    }}>
                        We pursue innovation relentlessly, fueled by deep industry expertise and a commitment to delivering transformative results.
                    </p>
                </div>

                {/* Team Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: '2rem',
                    maxWidth: '1000px',
                    margin: '0 auto'
                }}>
                    {teamMembers.map((member, index) => (
                        <div key={index} style={{
                            background: '#0a0a0a',
                            border: '1px solid #222',
                            borderRadius: '2rem',
                            padding: '1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1.5rem',
                            transition: 'transform 0.3s ease'
                        }}>
                            <img
                                src={member.image}
                                alt={member.name}
                                style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    objectFit: 'cover'
                                }}
                            />
                            <div style={{ flex: 1 }}>
                                <h3 style={{ color: 'white', fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.3rem' }}>
                                    {member.name}
                                </h3>
                                <p style={{ color: '#888', fontSize: '0.9rem' }}>
                                    {member.role}
                                </p>
                            </div>
                            <a href={member.instagram} style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                border: '1px solid #333',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                transition: 'all 0.3s ease'
                            }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.borderColor = '#FFD700';
                                    e.currentTarget.style.color = '#FFD700';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.borderColor = '#333';
                                    e.currentTarget.style.color = 'white';
                                }}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Team;
