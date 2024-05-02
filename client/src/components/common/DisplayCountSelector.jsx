import React from 'react'

function DisplayCountSelector({setCurrentPage,setPostsPerPage}) {
  return (
    <div className='displayCountBox'
      style={{
        display: `flex`,
        justifyContent: `flex-end`,
        marginRight: `20px`}} 
    >
      <label htmlFor="displayCount"></label>
      <select
        id="displayCount"
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
