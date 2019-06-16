import React, { Fragment } from 'react'
import Badge from '../badge/badge'

export default ({ title = 'Interests', interests = [] }) => {
  return (
    <Fragment>
      <h1>{title}</h1>
      <div>
        {interests.map((interest, index) => (
          <Badge key={index} className='white' name={interest.name}></Badge>
        ))}
      </div>
    </Fragment>
  )
}
