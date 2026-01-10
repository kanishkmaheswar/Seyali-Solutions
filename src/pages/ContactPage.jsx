import React, { useEffect } from 'react';
import ContactComponent from '../components/Contact';

const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ paddingTop: '80px', minHeight: '80vh' }}>
            <ContactComponent />
        </div>
    );
};

export default ContactPage;
