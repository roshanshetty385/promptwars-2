import { CalendarDays } from 'lucide-react';

const schedule = [
  { date: 'Phase 1', title: 'Schedule Announcement', desc: 'Election Commission of India (ECI) announces poll dates. Model Code of Conduct takes effect.' },
  { date: 'Phase 2', title: 'Filing Nominations', desc: 'Candidates submit affidavits. ECI scrutinizes nominations and allows a withdrawal window.' },
  { date: 'Phase 3', title: 'Intensive Campaigning', desc: 'Parties release manifestos and campaign until 48 hours before the polling day.' },
  { date: 'Phase 4', title: 'Polling Days', desc: 'Multi-phase voting occurs across the country using EVMs and VVPATs under heavy security.' },
  { date: 'Phase 5', title: 'Counting & Results', desc: 'EVMs are transported to counting centers. Votes are counted and final results are declared.' }
];

const Timeline = () => {
  return (
    <section style={{ background: '#f8fafc' }}>
      <div className="container">
        <div className="text-center mb-4">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Election Timeline</h2>
          <p style={{ color: '#64748b', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            Understanding the weeks-long process of a general election.
          </p>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical Line */}
          <div style={{ position: 'absolute', left: '2rem', top: 0, bottom: 0, width: '2px', background: '#e2e8f0' }}></div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {schedule.map((item, index) => (
              <div key={index} style={{ display: 'flex', gap: '1.5rem', position: 'relative' }}>
                <div style={{
                  width: '4rem', height: '4rem', borderRadius: '50%', background: 'white', border: '2px solid #FF9933',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10, flexShrink: 0
                }}>
                  <CalendarDays color="#FF9933" size={24} />
                </div>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '1rem', flex: 1, boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
                  <span style={{ color: '#FF9933', fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.date}</span>
                  <h3 style={{ fontSize: '1.25rem', marginTop: '0.5rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ color: '#475569' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
