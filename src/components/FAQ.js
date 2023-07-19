import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function FAQ() {
  const faqs = [
    {
      id: 1,
      question: 'Can I purchase products right now?',
      answer: 'Yes you can, just email us so we can get your details and send you some product. Currently we do not have the option to deliver since we are a startup',
    },
    {
      id: 2,
      question: 'Can I put ice cream in my gym or wellness center?',
      answer: 'Absolutely! We will install our personal Ice Gainz display freezer with the desired ice cream bars and quantity',
    },
    {
      id: 3,
      question: 'Can I request specific flavors of ice cream?',
      answer: 'We encourage you to send us an email with ideas for ice cream! Our team works tiredlessly to provide you your favorite flavor of ice cream.',
    },
    {
      id: 4,
      question: 'Are there any alternatives to traditional ice cream?',
      answer: 'Not currently, but we are in the process of creating a cutting and vegan collection to support all dietary choices ',
    },
  ];

  const colors = ['#F8D3E2', '#B4E6FE', '#FFCCE5', '#9BD3E2'];
  const [expandedId, setExpandedId] = useState(null);

  const handleToggle = (id) => {
    setExpandedId((prevExpandedId) => (prevExpandedId === id ? null : id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <section
        style={{
          backgroundColor: '#B4E6FE',
          padding: '50px 0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <h1
          style={{
            textAlign: 'center',
            fontSize: '48px',
            marginBottom: '16px',
            color: '#000000',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
            fontFamily: 'FrozenFont, Arial, sans-serif',
            letterSpacing: '1px',
            borderRadius: '20px',
            padding: '10px 20px',
          }}
        >
          FAQ
        </h1>
      </section>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div
          key={faq.id}
          style={{
            backgroundColor: colors[index % colors.length],
            padding: '20px',
            borderRadius: '8px',
            marginBottom: '10px',
            position: 'relative',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
            }}
            onClick={() => handleToggle(faq.id)}
          >
            <h3 style={{ margin: 0 }}>{faq.question}</h3>
            <span style={{ fontSize: '20px', transform: expandedId === faq.id ? 'rotate(180deg)' : 'none' }}>▼</span>
          </div>
          {expandedId === faq.id && (
            <div style={{ marginTop: '10px' }}>
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <p>Are your questions not answered? Email us <Link to="/contact">here</Link>.</p>
      </div>
    </div>
  );
}

export default FAQ;