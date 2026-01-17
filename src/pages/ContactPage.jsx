import React, { useEffect } from 'react';
import ContactComponent from '../components/Contact';
import SocialLinks from '../components/SocialLinks';

const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ paddingTop: '20px', minHeight: '80vh' }}>
            <ContactComponent />
            <SocialLinks />
        </div>
    );
};

export default ContactPage;
