import React from 'react'
import './NotefulForm.css'

export default function NotefulForm(props) {
  const { className, ...otherProps } = props
  console.log(otherProps)
  return (
    <form
      className={['Noteful-form', className].join(' ')}
      action='#'
      {...otherProps}
    />
  )
}
