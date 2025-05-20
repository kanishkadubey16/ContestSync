import React from 'react';
import './FourthPage.css';

const steps = [
  {
    number: "1",
    title: "Find Upcoming Contests",
    description: "Browse contests from LeetCode, Codeforces, CodeChef and other top competitive programming platforms."
  },
  {
    number: "2",
    title: "Build Consistency and Skill",
    description: "Strengthen your problem-solving mindset through regular participation and continuous practice, preparing you for interviews and real-world challenges."
  },
  {
    number: "3",
    title: "Prepare for Tech Interviews",
    description: "Use coding contests to build confidence and familiarity with common interview patterns and technical questions."
  }
  
];

const FourthPage = () => {
  return (
    <section className="cp-section">
      <h2 className="cp-title">How Competitive Programming Works</h2>
      <p className="cp-subtitle">
        Our platform brings together the best coding contests from top programming platforms to help you improve your algorithmic skills and advance your career.
      </p>
      <div className="cp-steps">
        {steps.map((step, index) => (
          <div className="cp-step" key={index}>
            <div className="cp-number">{step.number}</div>
            <h3 className="cp-step-title">{step.title}</h3>
            <p className="cp-description">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FourthPage;
