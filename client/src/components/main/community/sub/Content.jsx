import React, { useState } from 'react'

const Content = ({title, content}) => {
  const [isContent, setIsContent] = useState(false);

  const handleMouseEnter = () => setIsContent(true);
  const handleMouseLeave = () => setIsContent(false);
  console.log(isContent)
  return (
    <div className="content" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {isContent ? content : <div className="title">{title} ?</div>}
    </div>
  )
}

export default Content
