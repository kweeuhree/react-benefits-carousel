const Card = ({ title, text, picture, url, shortcut }) => {
    console.log('this is picture ', picture)
  return (
    <div className='card-container'>
        {/* Picture container */}
            <div className="picture-container">
                <img className="picture" src={picture} alt={title} />
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
                    <div className="url">Further reading: <a href={url} rel="noreferrer" target="_blank">{shortcut}</a></div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Card;