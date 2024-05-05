import React from 'react';

const Dot = ({ current }) => {
  return (
    <div className={`dot ${current ? 'current-dot' : 'dot'}`}>o</div>
  )
}

export default Dot;