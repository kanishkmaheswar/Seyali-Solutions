import React, { useEffect } from 'react';
import ServicesComponent from '../components/Services';
import IndustriesComponent from '../components/Industries';

const ServicesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ paddingTop: '80px' }}>
            <ServicesComponent />
            <IndustriesComponent />
        </div>
    );
};

export default ServicesPage;
