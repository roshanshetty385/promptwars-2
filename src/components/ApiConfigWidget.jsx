import React, { useState } from 'react';
import { useApi } from '../context/ApiContext';
import { Settings, X } from 'lucide-react';

const ApiConfigWidget = () => {
  const { googleKey, firebaseConfigStr, saveKeys } = useApi();
  const [isOpen, setIsOpen] = useState(false);
  const [tempKey, setTempKey] = useState(googleKey);
  const [tempFb, setTempFb] = useState(firebaseConfigStr);

  const handleSave = () => {
    saveKeys(tempKey, tempFb);
    setIsOpen(false);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        style={{ position: 'fixed', bottom: '2rem', left: '2rem', zIndex: 1000, background: '#0f172a', color: 'white', border: 'none', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
        aria-label="API Settings"
      >
        <Settings size={20} />
      </button>

      {isOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1001, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: 'white', padding: '2rem', borderRadius: '1rem', width: '90%', maxWidth: '500px', position: 'relative' }}>
            <button onClick={() => setIsOpen(false)} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', cursor: 'pointer' }}>
              <X size={24} color="#64748b" />
            </button>
            <h2 style={{ marginBottom: '1.5rem', color: '#0f172a' }}>Evaluator: API Key Setup</h2>
            <p style={{ marginBottom: '1.5rem', color: '#475569', fontSize: '0.9rem' }}>
              To activate Gemini AI and Maps Embed, provide a Google API Key. To activate the live global pledge counter, provide a Firebase Config JSON.
            </p>
            
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Google API Key</label>
            <input 
              type="password" 
              value={tempKey} 
              onChange={e => setTempKey(e.target.value)} 
              placeholder="AIzaSy..."
              style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', marginBottom: '1.5rem', fontFamily: 'monospace' }}
            />

            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Firebase Config (JSON format)</label>
            <textarea 
              value={tempFb} 
              onChange={e => setTempFb(e.target.value)} 
              placeholder='{"apiKey": "...", "authDomain": "..."}'
              rows={5}
              style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', marginBottom: '1.5rem', fontFamily: 'monospace' }}
            />

            <button onClick={handleSave} className="btn btn-primary" style={{ width: '100%' }}>
              Save & Activate Services
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ApiConfigWidget;
