import React from 'react'
import styled from 'styled-components'
import BoardTilte from '../../common/BoardTilte'

const Gallery = ({galleryList}) => {
  console.log(galleryList)
  return (
    <GalleryContainer>
      <BoardTilte title='갤러리' />
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
  padding: 80px 0;
  ul {
    width: 100%;
    display: flex;
    flex-flow: wrap;
      align-items: center;
      justify-content: center;
    li {
      img {
        width: 400px;
        height: 400px;
      }
    }
  }
`