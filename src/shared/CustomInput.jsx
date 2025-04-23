import React from 'react'

export default function CustomInput(props) {
  return (
    <>
         <label htmlFor={props.name} className="form-label text-capitalize">
              {props.name}
            </label>
            <input type={props.type} className="form-control" id={props.name} />
    </>
  )
}
