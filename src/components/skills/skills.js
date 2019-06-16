import React, { Fragment } from 'react'
import Badge from '../badge/badge'

export default ({ title = 'Skills', skills = [] }) => {
  return (
    <Fragment>
      <h1>{title}</h1>
      <div>
          {skills.map((skill, index) => (
            <Badge key={index} className='black' name={skill.name}></Badge>
          ))}
      </div>
    </Fragment>
  )
}
