import React from 'react'
import styled from 'styled-components'

const Gallery = ({galleryList}) => {
  return (
    <GalleryContainer>
      <ul>
        {galleryList.map((item, id)=> (
          <li key={id}>
            <img src={`./img/${item.img}`} alt="" />
          </li>
        ))}
      </ul>
    </GalleryContainer>
  )
}

export default Gallery

const GalleryContainer = styled.div`
  width: 100%;
  ul {
    width: 100%;
    display: flex;
    flex-flow: wrap;
    padding: 80px 0;
    align-items: center;
    justify-content: center;
    li {
      overflow: hidden;
      img {
        width: 400px;
        height: 400px;
        transition: all 0.6s;
              &:hover {
                transform: scale(1.1);
              }
      }
    }
  }
`