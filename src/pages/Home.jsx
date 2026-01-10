import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Industries from '../components/Industries';
import Team from '../components/Team';
import Contact from '../components/Contact';

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
            <Team />
            <Contact />
        </main>
    );
};

export default Home;
