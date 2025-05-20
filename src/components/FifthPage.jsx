import React from 'react';
import './FifthPage.css';

const testimonials = [
  {
    name: "Ayushi Mittal",
    role: "Competitive Programmer",
    feedback: "Participating in contests has helped me improve my problem-solving skills and prepared me for interviews. It gave me the confidence to tackle real-world challenges.",
    stars: 5,
    image: "https://i.pravatar.cc/100?img=47" 
  },
  {
    name: "Badal Arya",
    role: "Software Engineer at Google",
    feedback: "Regular participation in LeetCode contests improved my problem-solving skills tremendously. It was a key factor in landing my dream job at a top tech company.",
    stars: 5,
    image: "https://i.pravatar.cc/100?img=12"
  },
  {
    name: "Manshu Saini",
    role: "CS Student",
    feedback: "Codeforces helped me build strong foundations in algorithms. The diversity of problems kept me challenged and motivated throughout my academic journey.",
    stars: 5,
    image: "https://i.pravatar.cc/100?img=32"
  }
];

const FifthPage = () => {
  return (
    <section className="testimonial-section">
      <h2 className="testimonial-title">What Competitive Programmers Say</h2>
      <p className="testimonial-subtitle">
        Hear from developers who have improved their skills through competitive programming contests.
      </p>
      <div className="testimonial-cards">
        {testimonials.map((t, idx) => (
          <div className="testimonial-card" key={idx}>
            <img src={t.image} alt={t.name} className="testimonial-img" />
            <h3 className="testimonial-name">{t.name}</h3>
            <p className="testimonial-role">{t.role}</p>
            <p className="testimonial-feedback">"{t.feedback}"</p>
            <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FifthPage;
