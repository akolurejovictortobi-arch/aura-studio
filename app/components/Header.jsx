"use client";
import React, { useEffect, useState } from 'react'

const links = [["Home", "top"], ["About", "about"], ["Services", "services"], ["Contact", "contact"]];
const Header = () => {
  const [open, setOpen] = useState(false);
  const [edge, setEdge] = useState(false);
  const [active, setActive] = useState("top");
  useEffect(() => {
    const f = () => setEdge(window.scrollY > 10);
    f(); window.addEventListener("scroll", f, { passive: true });
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    links.forEach(([, id]) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => { window.removeEventListener("scroll", f); io.disconnect(); };
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);
  const go = () => setOpen(false);
  return (
    <header className={`site-header ${edge ? "edge" : ""}`}>
      <div className="wrap bar">
        <a href="#top" className="brand" aria-label="Aura Studio home" onClick={go}><img src="/sections/aura-logo.png" alt="Aura Studio" /></a>
        <nav className={`menu ${open ? "open" : ""}`} aria-label="Main">
          {links.map(([l, id]) => (<a key={id} href={`#${id}`} className={active === id ? "on" : ""} onClick={go}>{l}</a>))}
          <a href="#contact" className="btn btn-solid menu-cta" onClick={go}>Let&apos;s talk</a>
        </nav>
        <button className={`burger ${open ? "open" : ""}`} aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /></button>
      </div>
    </header>
  );
}

export default Header
