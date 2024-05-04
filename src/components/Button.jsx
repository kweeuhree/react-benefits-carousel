import React from 'react';

const Button = ( { action, type } ) => {
  return (
    <div className='btn' onClick={action}>{type}</div>
  )
}

export default Button;