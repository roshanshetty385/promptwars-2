import { lazy, Suspense } from 'react';
import Hero from './components/Hero';
import GuidanceSteps from './components/GuidanceSteps';
import { ShieldCheck } from 'lucide-react';

const Timeline = lazy(() => import('./components/Timeline'));
const Quiz = lazy(() => import('./components/Quiz'));
const Pledge = lazy(() => import('./components/Pledge'));
const FAQ = lazy(() => import('./components/FAQ'));
const ChatWidget = lazy(() => import('./components/ChatWidget'));
const ApiConfigWidget = lazy(() => import('./components/ApiConfigWidget'));
import { ApiProvider } from './context/ApiContext';

function App() {
  return (
    <ApiProvider>
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
        <Suspense fallback={<div style={{ padding: '4rem', textAlign: 'center', color: '#64748b' }}>Loading content...</div>}>
          <Timeline />
          <Quiz />
          <Pledge />
          <FAQ />
        </Suspense>
      </main>

      <footer style={{ background: '#0f172a', color: '#cbd5e1', padding: '3rem 0', textAlign: 'center' }}>
        <div className="container">
          <ShieldCheck color="#FF9933" size={32} style={{ margin: '0 auto 1rem' }} />
          <p style={{ marginBottom: '1rem' }}>ElectionGuide - Empowering Indian Voters</p>
          <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Not affiliated with the Election Commission of India. This is an educational initiative.</p>
        </div>
      </footer>

      {/* Real-time AI Assistant */}
      <Suspense fallback={null}>
        <ChatWidget />
        <ApiConfigWidget />
      </Suspense>
    </div>
    </ApiProvider>
  );
}

export default App;
