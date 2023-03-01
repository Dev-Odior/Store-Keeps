import React from 'react'

const NoItem = ({ message }) => {
  return (
    <div className="no-item">
      <h3>You have no {message} !!! </h3>
    </div>
  )
}

export default NoItem
