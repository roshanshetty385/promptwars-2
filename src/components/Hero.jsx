import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero" style={{ padding: '8rem 0 6rem', background: 'linear-gradient(to bottom, #f8fafc, #ffffff)', textAlign: 'center' }}>
      <div className="container">
        <div className="animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span style={{ display: 'inline-block', padding: '0.25rem 1rem', background: 'rgba(255, 153, 51, 0.1)', color: '#FF9933', borderRadius: '99px', fontWeight: 600, marginBottom: '1.5rem' }}>
            Democracy in Action
          </span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', color: '#0f172a' }}>
            Your Vote, <span style={{ color: '#FF9933' }}>Your Voice.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#475569', marginBottom: '2.5rem', lineHeight: 1.6 }}>
            Understand the Indian electoral process with our interactive guide. From registration to results, we make democracy simple, transparent, and accessible for every citizen.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#guide" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
              Start Learning <ChevronRight size={20} />
            </a>
            <a href="#quiz" className="btn" style={{ padding: '1rem 2rem', fontSize: '1.1rem', background: 'white', border: '2px solid #e2e8f0', color: '#0f172a' }}>
              Test Your Knowledge
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
