import React from 'react'

const words = ["Branding", "UI/UX Design", "Web Design"];
const Marquee = () => {
  const row = [...words, ...words, ...words, ...words];
  return (
    <div className="marquee" aria-hidden="true"><div className="track">
      {[0, 1].map((g) => (<div className="grp" key={g}>{row.map((w, k) => (<span key={k}>{w}<i /></span>))}</div>))}
    </div></div>
  );
}

export default Marquee
