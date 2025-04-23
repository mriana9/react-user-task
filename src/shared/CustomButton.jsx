import React from 'react'

export default function CustomButton(props) {
  return (
    <button className={`btn m-2 btn-outline-${props.type}`}>{props.text}</button>
  )
}
