import React from 'react'
import Button from './Button';
import Picture from './Picture';
import Text from './Text';

const Card = ({ title, text, picture, url }) => {
  return (
    <div className='card-container'>
        {/* Picture container */}
        <Picture title={title} picture={picture}/>

        {/* non picture container */}
        <div className="non-picture-container">

            <Text title={title} text={text} url={url} />

            {/* buttons container */}
             <div className="buttons-container">
                <Button action={moveForward} type={">"} />
                <Button action={moveBackward} type={"<"} />
            </div>
        </div>

    </div>
  )
}

export default Card;