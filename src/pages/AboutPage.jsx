import React, { useEffect } from 'react';
import AboutComponent from '../components/About';
import TeamComponent from '../components/Team';

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ paddingTop: '80px' }}>
            <AboutComponent />
            <TeamComponent />
        </div>
    );
};

export default AboutPage;
