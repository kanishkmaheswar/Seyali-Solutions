import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Industries from '../components/Industries';
import WhyChooseUs from '../components/WhyChooseUs';
import Team from '../components/Team';
import Cta from '../components/Cta';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            <Hero />
            <About />
            <Services />
            <Industries />
            <WhyChooseUs />
            <Team />
            <Cta />
        </main>
    );
};

export default Home;
