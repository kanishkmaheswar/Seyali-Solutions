import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                console.log(result.text);
                toast.success('Message Sent Successfully!');
                setLoading(false);
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                toast.error('Failed to send message. Please try again.');
                setLoading(false);
            });
    };

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
                        color: '#ff4d4d', // Amber/Yellow for the dot
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
                    <form ref={form} onSubmit={sendEmail} style={{ display: 'grid', gap: '2.5rem' }}>

                        {/* Row 1 */}
                        <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            <div>
                                <label style={labelStyle}>Name *</label>
                                <input type="text" name="name" placeholder="David Johnson" style={inputStyle} required />
                            </div>
                            <div>
                                <label style={labelStyle}>Email *</label>
                                <input type="email" name="email" placeholder="example@mail.com" style={inputStyle} required />
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div>
                            <label style={labelStyle}>Company Name *</label>
                            <input type="text" name="title" placeholder="Ex. StaticMania" style={inputStyle} required />
                        </div>

                        {/* Row 4 */}
                        <div>
                            <label style={labelStyle}>Project Details</label>
                            <textarea rows="1" name="message" placeholder="Tell us more about your project" style={{
                                ...inputStyle,
                                resize: 'none',
                                minHeight: 'auto'
                            }} required></textarea>
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
                            <button type="submit" disabled={loading} style={{
                                padding: '1rem 3rem',
                                background: 'transparent',
                                border: '1px solid #444',
                                color: 'white',
                                borderRadius: '8px',
                                fontSize: '1rem',
                                cursor: loading ? 'not-allowed' : 'pointer',
                                transition: 'all 0.3s ease',
                                opacity: loading ? 0.7 : 1
                            }}
                                onMouseOver={(e) => {
                                    if (!loading) {
                                        e.target.style.borderColor = '#ff4d4d';
                                        e.target.style.background = 'transparent';
                                        e.target.style.color = '#ff4d4d';
                                    }
                                }}
                                onMouseOut={(e) => {
                                    if (!loading) {
                                        e.target.style.borderColor = '#444';
                                        e.target.style.background = 'transparent';
                                        e.target.style.color = 'white';
                                    }
                                }}
                            >
                                {loading ? 'Sending...' : 'Submit'}
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
