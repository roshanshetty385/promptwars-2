import { UserPlus, CheckSquare, BarChart } from 'lucide-react';

const steps = [
  {
    title: 'Registration',
    icon: <UserPlus size={32} color="#FF9933" />,
    description: 'Ensure you are on the electoral roll. Use Form 6 on the NVSP portal to register if you are turning 18 or are a first-time voter.',
    action: 'Register Now',
    link: 'https://voters.eci.gov.in/'
  },
  {
    title: 'Election Day',
    icon: <CheckSquare size={32} color="#138808" />,
    description: 'Find your polling booth, carry your EPIC (Voter ID) card, and verify your vote using the VVPAT machine after pressing the EVM button.',
    action: 'Find Booth',
    link: 'https://electoralsearch.eci.gov.in/'
  },
  {
    title: 'Results',
    icon: <BarChart size={32} color="#0f172a" />,
    description: 'Votes are securely counted in highly guarded centers. Phased elections mean results are announced weeks after the first phase.',
    action: 'View Past Results',
    link: 'https://results.eci.gov.in/'
  }
];

const GuidanceSteps = () => {
  return (
    <section id="guide" style={{ background: 'white' }}>
      <div className="container">
        <div className="text-center mb-4">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>The Voter's Journey</h2>
          <p style={{ color: '#64748b', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            Follow these three simple steps to participate in the world's largest democratic exercise.
          </p>
        </div>
        
        <div className="grid-3" style={{ marginTop: '3rem' }}>
          {steps.map((step, index) => (
            <div key={index} style={{
              padding: '2rem',
              background: '#f8fafc',
              borderRadius: '1rem',
              border: '1px solid #e2e8f0',
              transition: 'transform 0.3s, box-shadow 0.3s',
              cursor: 'pointer'
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.1)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{
                width: '64px', height: '64px', borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
              }}>
                {step.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#0f172a' }}>{index + 1}. {step.title}</h3>
              <p style={{ color: '#475569', marginBottom: '2rem', lineHeight: 1.6 }}>{step.description}</p>
              <a href={step.link} target="_blank" rel="noopener noreferrer" style={{ color: '#FF9933', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {step.action} &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuidanceSteps;
