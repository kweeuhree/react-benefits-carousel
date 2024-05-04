import React from 'react';
import Url from './Url';

const Text = ( { title, text, url } ) => {
  return (
        <div className="text-url-container">
            {/* text container */}
            <div className="text-container">
                <div className="title">{title}</div>
                <div className="text">{text}</div>
            </div>
            {/* url container */}
           <Url url={url} />
        </div>
  )
}

export default Text;