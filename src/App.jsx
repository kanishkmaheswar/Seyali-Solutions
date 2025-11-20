import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Industries from './components/Industries';
import About from './components/About';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';

import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="app">
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          duration: 5000,
          style: {
            background: '#333',
            color: '#fff',
          },
        }}
      />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Industries />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
