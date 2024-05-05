const Card = ({ title, text, picture, url }) => {

  return (
    <div className='card-container'>
        {/* Picture container */}
            <div className="picture-container">
                <img src={picture} alt={title} className="picture" />
            </div>

        {/* non picture container */}
        <div className="non-picture-container">
            <div className="text-url-container">
                {/* text container */}
                <div className="text-container">
                    <div className="title">{title}</div>
                    <div className="text">{text}</div>
                </div>

                {/* url container */}
                <div className="url-container">
                    <div className="url">Further reading: {url}</div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Card;