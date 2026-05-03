import React from 'react';
import Hero from './components/Hero';
import GuidanceSteps from './components/GuidanceSteps';
import Timeline from './components/Timeline';
import Quiz from './components/Quiz';
import Pledge from './components/Pledge';
import FAQ from './components/FAQ';
import ChatWidget from './components/ChatWidget';
import { ShieldCheck } from 'lucide-react';

function App() {
  return (
    <div style={{ position: 'relative' }}>
      {/* Header Bar */}
      <header style={{ position: 'fixed', top: 0, width: '100%', background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(8px)', zIndex: 50, borderBottom: '1px solid #e2e8f0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '70px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '1.25rem', color: '#0f172a' }}>
            <ShieldCheck color="#FF9933" size={28} />
            ElectionGuide
          </div>
          <div id="google_translate_element"></div>
        </div>
      </header>

      <main style={{ paddingTop: '70px' }}>
        <Hero />
        <GuidanceSteps />
        <Timeline />
        <Quiz />
        <Pledge />
        <FAQ />
      </main>

      <footer style={{ background: '#0f172a', color: '#cbd5e1', padding: '3rem 0', textAlign: 'center' }}>
        <div className="container">
          <ShieldCheck color="#FF9933" size={32} style={{ margin: '0 auto 1rem' }} />
          <p style={{ marginBottom: '1rem' }}>ElectionGuide - Empowering Indian Voters</p>
          <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Not affiliated with the Election Commission of India. This is an educational initiative.</p>
        </div>
      </footer>

      {/* Real-time AI Assistant */}
      <ChatWidget />
    </div>
  );
}

export default App;
