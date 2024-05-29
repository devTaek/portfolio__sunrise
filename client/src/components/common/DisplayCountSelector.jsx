import React from 'react'

function DisplayCountSelector({setCurrentPage,setPostsPerPage}) {
  return (
    <div className='displayCount/ox'
      style={{
        display: `flex`,
        justifyContent: `flex-end`,
        }} 
    >
      <label htmlFor="displayCount"></label>
      <select
        id="displayCount"
        style={{
          color: `white`, 
          backgroundColor: `rgba(255,255,255,0.08)`, 
          padding: `8px 14px`, 
          fontSize: `16px`,
          border: `none`,
          borderRadius: `8px`,
          textAlign: `center`
        }}
        onChange={({ target: { value } }) => {
          setCurrentPage(1);
          setPostsPerPage(Number(value));
        }}
      >
        <option value="3">3</option>
        <option value="6">6</option>
        <option value="8">8</option>
        <option value="10">10</option>
        <option value="12">12</option>
        <option value="15">15</option>
      </select>
    </div>
  )
}

export default DisplayCountSelector
