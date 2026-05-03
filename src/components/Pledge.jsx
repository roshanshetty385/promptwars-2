import React, { useState } from 'react';
import { Download, Award, Share2 } from 'lucide-react';

const Pledge = () => {
  const [name, setName] = useState('');
  const [pledged, setPledged] = useState(false);

  const handlePledge = (e) => {
    e.preventDefault();
    if (name.trim()) setPledged(true);
  };

  return (
    <section id="pledge" style={{ background: 'linear-gradient(135deg, #FF9933 0%, #E68A2E 100%)', color: 'white', padding: '6rem 0' }}>
      <div className="container text-center">
        {!pledged ? (
          <div className="animate-fade-in" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <Award size={48} style={{ margin: '0 auto 1.5rem', opacity: 0.9 }} />
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>Take the Voter's Pledge</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '2.5rem', opacity: 0.9, lineHeight: 1.6 }}>
              Commit to participating in the democratic process. Generate your personalized pledge badge and inspire others to vote!
            </p>
            <form onSubmit={handlePledge} style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
              <input 
                type="text" 
                placeholder="Enter your full name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ padding: '1rem 1.5rem', borderRadius: '99px', border: 'none', width: '60%', fontSize: '1rem', outline: 'none', color: '#0f172a' }}
                required
                aria-label="Full Name for Pledge"
              />
              <button type="submit" className="btn" style={{ background: '#138808', color: 'white', padding: '1rem 2rem' }} aria-label="Submit Pledge">
                I Pledge to Vote
              </button>
            </form>
          </div>
        ) : (
          <div className="animate-fade-in" style={{ maxWidth: '700px', margin: '0 auto' }}>
            <div style={{ background: 'white', color: '#0f172a', padding: '3rem', borderRadius: '1rem', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.2)' }}>
              <div style={{ border: '4px double #FF9933', padding: '2rem', borderRadius: '0.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', color: '#138808', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Certificate of Commitment</h3>
                <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>This certifies that</p>
                <h4 style={{ fontSize: '2.5rem', color: '#FF9933', marginBottom: '1.5rem', fontFamily: 'serif', fontStyle: 'italic' }}>{name}</h4>
                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.6 }}>
                  has pledged to uphold the democratic traditions of our country and to vote fearlessly and without being influenced by any considerations.
                </p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
                <button className="btn btn-primary" onClick={() => alert('Certificate downloaded! (Mock)')} aria-label="Download Certificate">
                  <Download size={20} /> Download
                </button>
                <button className="btn" style={{ background: '#f8fafc', color: '#0f172a', border: '1px solid #e2e8f0' }} onClick={() => alert('Shared to social media! (Mock)')} aria-label="Share Certificate">
                  <Share2 size={20} /> Share
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Pledge;
