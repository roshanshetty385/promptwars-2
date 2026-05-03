import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, MessageCircle, X, MapPin } from 'lucide-react';
import DOMPurify from 'dompurify';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentStep, setCurrentStep] = useState('greeting');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen]);

  useEffect(() => {
    // Initial Greeting if messages are empty
    if (messages.length === 0) {
      addBotMessage(
        "Namaskar! I'm **ElectionGuide**, your real-time assistant. How can I help you today?",
        ['Register to vote', 'Find my polling booth', 'What is VVPAT?']
      );
    }
  }, []);

  const addBotMessage = (text, options = null, widget = null) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { text, sender: 'bot', options, widget }]);
      setIsTyping(false);
    }, 800);
  };

  const addUserMessage = (text) => {
    setMessages(prev => [...prev, { text, sender: 'user' }]);
  };

  const handleSend = (text = inputValue) => {
    if (!text.trim()) return;
    addUserMessage(text);
    setInputValue('');
    processLogic(text, currentStep);
  };

  const processLogic = (input, step) => {
    const text = input.toLowerCase();
    
    if (text.includes('nota')) {
      addBotMessage("NOTA stands for 'None of the Above'. It allows you to express your disapproval of all contesting candidates.", ['Back to start']);
      return;
    }
    if (text.includes('vvpat')) {
      addBotMessage("VVPAT is an independent system attached to EVMs that allows voters to verify their vote via a paper slip.", ['Back to start']);
      return;
    }

    if (text.includes('register')) {
      addBotMessage("To register, visit the official Voters' Service Portal (voters.eci.gov.in) and fill Form 6.", ['Find my polling booth']);
    } else if (text.includes('booth') || text.includes('find')) {
      addBotMessage("Please provide your Pincode to find your polling booth.", null);
      setCurrentStep('find_booth');
    } else if (step === 'find_booth') {
      const location = text.length > 3 ? text : "your area";
      addBotMessage(
        `Based on ${location}, your designated polling station is typically a local school. For exact details, check the ECI portal.`,
        ['Show Map Example'],
        { type: 'map', query: `Polling Station near ${location}` }
      );
      setCurrentStep('greeting');
    } else {
      addBotMessage("I can help with registration, finding your booth, or explaining election terms.", ['Register to vote', 'Find my polling booth']);
    }
  };

  const renderMessageContent = (text) => {
    let html = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    return { __html: DOMPurify.sanitize(html, { ALLOWED_TAGS: ['strong', 'a', 'br'], ALLOWED_ATTR: ['href', 'target', 'rel'] }) };
  };

  return (
    <div className="chat-widget-wrapper">
      <div className={`chat-window ${!isOpen ? 'closed' : ''}`}>
        <div className="chat-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
            <Bot size={20} /> ElectionGuide AI
          </div>
          <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }} aria-label="Close Chat">
            <X size={20} />
          </button>
        </div>
        
        <div className="chat-body">
          {messages.map((msg, idx) => (
            <div key={idx} className={`message-wrapper ${msg.sender}`}>
              <div className="message-bubble">
                <span dangerouslySetInnerHTML={renderMessageContent(msg.text)} />
                
                {msg.widget && msg.widget.type === 'map' && (
                  <div style={{ marginTop: '0.5rem' }}>
                    <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(msg.widget.query)}`}
                       target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.85rem' }}>
                      <MapPin size={14} /> Open Maps
                    </a>
                  </div>
                )}

                {msg.options && (
                  <div className="options-container">
                    {msg.options.map((opt, i) => (
                      <button key={i} className="option-btn" onClick={() => handleSend(opt)} disabled={isTyping || idx !== messages.length - 1}>
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="message-wrapper bot">
              <div className="message-bubble">
                <div className="typing-indicator">
                  <div className="typing-dot"></div><div className="typing-dot"></div><div className="typing-dot"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="chat-input-area">
          <input type="text" className="chat-input" placeholder="Ask a question..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} aria-label="Chat input" />
          <button className="chat-send-btn" onClick={() => handleSend()} disabled={!inputValue.trim()} aria-label="Send message">
            <Send size={18} />
          </button>
        </div>
      </div>

      <button className="chat-toggle-btn" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Chat">
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
};

export default ChatWidget;
