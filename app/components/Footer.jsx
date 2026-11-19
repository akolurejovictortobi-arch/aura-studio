import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="footer"><div className="wrap frow">
      <Image src="/sections/aura-logo.png" alt="Aura Studio" width={160} height={40} />
      <nav aria-label="Footer"><a href="#about">About</a><a href="#services">Services</a><a href="#contact">Contact</a></nav>
      <p>© {2026}. Aura Studio. London, UK.</p>
    </div></footer>
  );
  
}

export default Footer
