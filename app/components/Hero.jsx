import React from 'react'

const Hero = () => {
  return (
    <section className="hero" id="top">
      <div className="hero-photo">
        <img src="/sections/london.jpg" alt="Tower Bridge in London at sunset" />
      </div>
      <div className="wrap hero-wrap">
        <div className="hero-copy">
          <p className="kicker">Creative agency in London</p>
          <h1>
            <span className="ln"><b style={{ "--d": "0s" }}>Bringing ideas</b></span>
            <span className="ln"><b className="accent" style={{ "--d": ".14s" }}>to life.</b></span>
          </h1>
          <p className="lead">Aura Studio helps brands express their identity through modern, minimalist design: branding, UI/UX and web.</p>
          <div className="actions">
            <a href="#contact" className="btn btn-solid">Start a project</a>
            <a href="#services" className="btn btn-line">Our services</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero
