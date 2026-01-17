import React, { useEffect } from 'react';
import Process from '../components/Process';
import IndustriesComponent from '../components/Industries';
import ServiceDetails from '../components/ServiceDetails';

const ServicesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ paddingTop: '30px' }}>
            <ServiceDetails />
            <Process />
            <IndustriesComponent />
        </div>
    );
};

export default ServicesPage;
