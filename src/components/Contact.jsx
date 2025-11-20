import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section" style={{ background: '#000000', padding: '6rem 0' }}>
            <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1.5rem' }}>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span style={{
                        display: 'inline-block',
                        padding: '0.5rem 1.5rem',
                        borderRadius: '50px',
                        border: '1px solid #333',
                        color: '#fbbf24', // Amber/Yellow for the dot
                        fontSize: '0.9rem',
                        marginBottom: '1.5rem',
                        background: 'rgba(255,255,255,0.05)'
                    }}>
                        <span style={{ marginRight: '0.5rem' }}>●</span> Contact
                    </span>
                    <h2 className="contact-title" style={{
                        fontSize: '3.5rem',
                        fontWeight: '700',
                        color: 'white',
                        lineHeight: '1.2',
                        marginBottom: '1.5rem'
                    }}>
                        We Would Love To Talk Let's <br />
                        <span style={{ color: '#666' }}>Connect Now</span>
                    </h2>
                    <p style={{ color: '#888', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                        We're excited to hear from you and discuss how we can help with your project or answer any questions you may have.
                    </p>
                </div>

                {/* Form Card */}
                <div className="form-card" style={{
                    background: '#050505',
                    border: '1px solid #333',
                    borderRadius: '2rem',
                    padding: '4rem',
                    position: 'relative'
                }}>
                    <form onSubmit={(e) => { e.preventDefault(); alert('Message Sent!'); }} style={{ display: 'grid', gap: '2.5rem' }}>

                        {/* Row 1 */}
                        <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            <div>
                                <label style={labelStyle}>Name *</label>
                                <input type="text" placeholder="David Johnson" style={inputStyle} />
                            </div>
                            <div>
                                <label style={labelStyle}>Email *</label>
                                <input type="email" placeholder="example@mail.com" style={inputStyle} />
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div>
                            <label style={labelStyle}>Company Name *</label>
                            <input type="text" placeholder="Ex. StaticMania" style={inputStyle} />
                        </div>

                        {/* Row 4 */}
                        <div>
                            <label style={labelStyle}>Project Details</label>
                            <textarea rows="1" placeholder="Tell us more about your project" style={{
                                ...inputStyle,
                                resize: 'none',
                                minHeight: 'auto'
                            }}></textarea>
                        </div>

                        {/* Footer */}
                        <div className="form-footer" style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginTop: '1rem',
                            borderTop: '1px solid #222',
                            paddingTop: '2rem'
                        }}>
                            <button type="submit" style={{
                                padding: '1rem 3rem',
                                background: 'transparent',
                                border: '1px solid #444',
                                color: 'white',
                                borderRadius: '8px',
                                fontSize: '1rem',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                                onMouseOver={(e) => {
                                    e.target.style.borderColor = '#FFD700';
                                    e.target.style.background = 'transparent';
                                    e.target.style.color = '#FFD700';
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.borderColor = '#444';
                                    e.target.style.background = 'transparent';
                                    e.target.style.color = 'white';
                                }}
                            >
                                Submit
                            </button>
                            <p className="form-footer-text" style={{ color: '#888', fontSize: '0.9rem' }}>
                                We will contact you within 24 business hours.
                            </p>
                        </div>

                    </form>
                </div>

            </div>
            <style>{`
                @media (max-width: 768px) {
                    .contact-title {
                        font-size: 2.5rem !important;
                    }
                    .form-card {
                        padding: 2rem !important;
                    }
                    .form-row {
                        grid-template-columns: 1fr !important;
                        gap: 2.5rem !important;
                    }
                    .form-footer {
                        flex-direction: column;
                        gap: 1.5rem;
                        align-items: stretch !important;
                    }
                    .form-footer button {
                        width: 100%;
                    }
                    .form-footer-text {
                        text-align: center;
                    }
                }
            `}</style>
        </section>
    );
};

const labelStyle = {
    display: 'block',
    color: 'white',
    fontSize: '1rem',
    fontWeight: '500',
    marginBottom: '1rem'
};

const inputStyle = {
    width: '100%',
    padding: '1rem 0',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid #333',
    color: '#ccc',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s'
};

export default Contact;
