import React from 'react';
import './section.css'; 

const SectionLine = ({ label }) => (
  <div className="section-line">
    <hr />
    {label && <span className="section-label">{label}</span>}
  </div>
);



export default SectionLine;
