import React from 'react'

const vals = [
  ["Purpose", "Every decision has a reason, and we can explain it.", "M12 3l8 4.5v9L12 21l-8-4.5v-9zM12 8v8"],
  ["Simplicity", "Less noise, more meaning. We take away until it works.", "M4 12h16M12 4v16"],
  ["Elegance", "Details that feel effortless to the people using them.", "M4 17c4-11 12-11 16 0"],
];
const About = () => {
  return (
    <section className="section white" id="about"><div className="wrap">
      <div className="about-top">
        <p className="label">About us</p>
        <p className="about-lead">Aura Studio is a London-based creative agency helping brands express their identity through modern, minimalist design. We focus on clean aesthetics, strong visuals and storytelling through design. Our goal is to make every brand we touch stand out with purpose, simplicity and elegance.</p>
      </div>
      <ul className="vals">
        {vals.map(([t, d, p]) => (
          <li key={t}>
            <span className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d={p} /></svg></span>
            <h3>{t}</h3><p>{d}</p>
          </li>
        ))}
      </ul>
    </div></section>
  );
}

export default About
