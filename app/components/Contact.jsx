"use client";
import React, { useState } from 'react'

const Contact = () => {
  const [v, setV] = useState({ name: "", email: "", message: "" });
  const [err, setErr] = useState({});
  const [ok, setOk] = useState("");
  const on = (e) => { setV({ ...v, [e.target.name]: e.target.value }); setErr({ ...err, [e.target.name]: "" }); setOk(""); };
  const submit = (e) => {
    e.preventDefault();
    const n = {};
    if (!v.name.trim()) n.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) n.email = "Enter a valid email address.";
    if (v.message.trim().length < 10) n.message = "Write at least 10 characters.";
    setErr(n); if (Object.keys(n).length) return;
    setOk(`Thanks, ${v.name.trim().split(" ")[0]}. We'll reply soon.`); // no backend yet
    setV({ name: "", email: "", message: "" });
  };
  const field = (k, label, ph, area) => (
    <div className={`field ${err[k] ? "bad" : ""}`}>
      <label htmlFor={k}>{label}</label>
      {area ? <textarea id={k} name={k} rows={4} placeholder={ph} value={v[k]} onChange={on} /> : <input id={k} name={k} type={k === "email" ? "email" : "text"} placeholder={ph} value={v[k]} onChange={on} />}
      <small>{err[k]}</small>
    </div>
  );
  return (
    <section className="section dark" id="contact"><div className="wrap">
      <div className="cta">
        <div>
          <p className="label">Contact us</p>
          <h2>Ready to bring your <span className="accent">idea to life?</span></h2>
          <p className="lead">Tell us about your project and we will reply as soon as we can.</p>
          <a className="mail" href="mailto:hello@aurastudio.co">hello@aurastudio.co</a>
        </div>
        <form className="form" onSubmit={submit} noValidate>
          {field("name", "Name", "Your full name")}
          {field("email", "Email", "you@company.com")}
          {field("message", "Message", "What are you building?", true)}
          <button className="btn btn-solid" type="submit">Send message</button>
          <p className="ok" role="status">{ok}</p>
        </form>
      </div>
    </div></section>
  );
}

export default Contact
