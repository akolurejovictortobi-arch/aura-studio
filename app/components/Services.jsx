import React from 'react'

const list = [
  { t: "Branding", d: "Identities with a clear voice, from the first sketch to the finished guidelines.", p: "M12 3l9 16H3L12 3z", img: "/sections/service-branding.jpg" },
  { t: "UI/UX Design", d: "Human-centred interfaces built around real journeys, so every screen feels natural.", p: "M3 5h18v12H3zM8 21h8M12 17v4", img: "/sections/service-uiux.jpg" },
  { t: "Web Design", d: "Clean, responsive websites that tell your story and turn visitors into clients.", p: "M8 7l-5 5 5 5M16 7l5 5-5 5", img: "/sections/service-web.jpg" },
];
const Services = () => {
  return (
    <section className="section plat" id="services"><div className="wrap">
      <div className="head"><p className="label">Services</p><h2>What we do <span className="accent">best</span></h2></div>
      <div className="svc-row">
        {list.map((s) => (
          <article key={s.t} className="svc" style={{ backgroundImage: `url(${s.img})` }}>
            <span className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d={s.p} /></svg></span>
            <h3>{s.t}</h3><p>{s.d}</p>
            <a href="#contact" className="more">Enquire</a>
          </article>
        ))}
      </div>
    </div></section>
  );
}

export default Services
