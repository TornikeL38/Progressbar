import React from 'react';
import "./style.css"

const ProgressBar = ({ percentage }) => {

  return (
    <div className="progress">
      <div className="progress-bar" style={{width: percentage}}></div>
    </div>
  );
};

export default ProgressBar;

