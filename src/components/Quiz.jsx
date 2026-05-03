import React, { useState } from 'react';
import { Award, RefreshCcw } from 'lucide-react';

const questions = [
  {
    question: "What does VVPAT stand for?",
    options: [
      "Voter Verified Paper Audit Trail",
      "Voting Verification Polling Access Tool",
      "Verified Voting Process and Tracking"
    ],
    answer: 0,
    explanation: "VVPAT ensures that your vote is cast correctly by generating a physical paper slip that you can verify."
  },
  {
    question: "At what age are Indian citizens eligible to vote?",
    options: ["16", "18", "21"],
    answer: 1,
    explanation: "Indian citizens aged 18 and above on the qualifying date (usually Jan 1) are eligible to register and vote."
  },
  {
    question: "If you press NOTA on the EVM, what happens?",
    options: [
      "The election is cancelled",
      "Your vote is counted as 'None of the Above' but doesn't change the winner",
      "Your vote goes to the ruling party"
    ],
    answer: 1,
    explanation: "NOTA allows you to register dissatisfaction. However, the candidate with the highest valid votes still wins."
  }
];

const Quiz = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOpt, setSelectedOpt] = useState(null);

  const handleSelect = (idx) => {
    if (selectedOpt !== null) return; // Prevent double click
    setSelectedOpt(idx);
    
    if (idx === questions[currentQ].answer) {
      setScore(s => s + 1);
    }

    setTimeout(() => {
      if (currentQ + 1 < questions.length) {
        setCurrentQ(c => c + 1);
        setSelectedOpt(null);
      } else {
        setShowResult(true);
      }
    }, 2000); // Give time to read explanation
  };

  const restart = () => {
    setCurrentQ(0);
    setScore(0);
    setShowResult(false);
    setSelectedOpt(null);
  };

  return (
    <section id="quiz" style={{ background: 'white' }}>
      <div className="container">
        <div className="text-center mb-4">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Test Your Knowledge</h2>
          <p style={{ color: '#64748b', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            Gamified learning to ensure you are election-ready.
          </p>
        </div>

        <div style={{ maxWidth: '600px', margin: '0 auto', background: '#f8fafc', padding: '2rem', borderRadius: '1rem', border: '1px solid #e2e8f0', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
          {showResult ? (
            <div className="text-center">
              <Award size={64} color="#FF9933" style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>You scored {score} out of {questions.length}!</h3>
              <p style={{ color: '#475569', marginBottom: '2rem' }}>
                {score === questions.length ? 'Perfect! You are fully election-ready.' : 'Good effort! Check out our guide and chat with the AI for more info.'}
              </p>
              <button onClick={restart} className="btn btn-primary">
                <RefreshCcw size={20} /> Try Again
              </button>
            </div>
          ) : (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: '#64748b', fontWeight: 600 }}>
                <span>Question {currentQ + 1} of {questions.length}</span>
                <span>Score: {score}</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '2rem', color: '#0f172a', fontWeight: 700 }}>{questions[currentQ].question}</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {questions[currentQ].options.map((opt, idx) => {
                  let bgColor = 'white';
                  let borderColor = '#e2e8f0';
                  let textColor = '#0f172a';

                  if (selectedOpt !== null) {
                    if (idx === questions[currentQ].answer) {
                      bgColor = '#dcfce7'; // green-100
                      borderColor = '#22c55e'; // green-500
                    } else if (idx === selectedOpt) {
                      bgColor = '#fee2e2'; // red-100
                      borderColor = '#ef4444'; // red-500
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelect(idx)}
                      disabled={selectedOpt !== null}
                      style={{
                        padding: '1rem', textAlign: 'left', borderRadius: '0.5rem', border: `2px solid ${borderColor}`,
                        background: bgColor, color: textColor, cursor: selectedOpt !== null ? 'default' : 'pointer',
                        fontSize: '1rem', transition: 'all 0.2s'
                      }}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {selectedOpt !== null && (
                <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#e0f2fe', borderRadius: '0.5rem', color: '#0369a1', fontSize: '0.95rem' }} className="animate-fade-in">
                  <strong>Explanation:</strong> {questions[currentQ].explanation}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Quiz;
