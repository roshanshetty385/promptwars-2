import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: "How do I know if my name is on the voter list?",
    a: "You can check your name on the electoral roll by visiting electoralsearch.eci.gov.in and searching via your EPIC number or personal details."
  },
  {
    q: "What if I am out of my home state for work or studies?",
    a: "Currently, you must vote at the polling station where you are registered. If you have permanently relocated, you should register as a voter in your new constituency using Form 6."
  },
  {
    q: "Can I vote from home?",
    a: "The Election Commission allows 'Vote from Home' via postal ballot only for specific categories: senior citizens above 85 years of age and Persons with Disabilities (PwDs) with a benchmark disability."
  },
  {
    q: "What documents are valid for voting if I lose my Voter ID?",
    a: "You can use other approved photo IDs such as Aadhaar Card, PAN Card, Driving License, Indian Passport, or MGNREGA Job Card, provided your name is on the voter list."
  }
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section style={{ background: '#f8fafc', paddingBottom: '8rem' }}>
      <div className="container">
        <div className="text-center mb-4">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Frequently Asked Questions</h2>
          <p style={{ color: '#64748b', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            Quick answers to common queries regarding the election process.
          </p>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, idx) => (
            <div key={idx} style={{ background: 'white', borderRadius: '0.5rem', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
              <button 
                onClick={() => toggle(idx)}
                style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontSize: '1.1rem', fontWeight: 600, color: '#0f172a' }}
              >
                {faq.q}
                {openIdx === idx ? <ChevronUp size={20} color="#FF9933" /> : <ChevronDown size={20} color="#64748b" />}
              </button>
              
              {openIdx === idx && (
                <div style={{ padding: '0 1.5rem 1.5rem', color: '#475569', lineHeight: 1.6 }} className="animate-fade-in">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
