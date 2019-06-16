import React from 'react'
import './badge.css'

export default ({ className, name }) => {
  let colorClass = 'badge ';
  switch(className) {
    case 'white':
      colorClass += 'badge-secondary';
      break;
    case 'black':
    default:
      colorClass += 'badge-dark';
  }
  return (
    <div className={colorClass}>
      <div>{name}</div>
    </div>
  )
}
