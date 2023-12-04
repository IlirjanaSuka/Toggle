import React, { useState } from 'react';
import './index.css'; // Import the CSS file for styling

function FAQItem({ question, answer }) {
  const [isExpanded, setExpanded] = useState(false);

  const toggleAnswer = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className={`faq-item ${isExpanded ? 'expanded' : ''}`}>
      <div className="question-wrapper" onClick={toggleAnswer}>
        <div className="dropdown-header">
          <h3 className="question">
            {question}
          </h3>
          <span className={`toggle-icon ${isExpanded ? 'up' : 'down'}`}>{isExpanded ? '↑' : '↓'}</span>
        </div>
      </div>
      <div className="answer-wrapper">
        <hr />
        <p className="answer">{answer}</p>
      </div>
    </div>
  );
}

function FAQList() {
  const faqItems = [
    {
      question: 'Why park a domain name in a Parkname?',
      answer: 'Parkname is a leading industry standard for domain name parking and monetization services. We offer a wide variety of services to help you achieve success.',
    },
    // Add more FAQ items as needed
  ];

  return (
    <div>
      <div className="faq-items-wrapper">
        {faqItems.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
}

export default FAQList;
