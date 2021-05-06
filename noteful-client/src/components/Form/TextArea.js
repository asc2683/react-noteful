import React from 'react'

export const FormTextArea = ({label, name, content, controlFunc, placeholder, inputType}) => {
  return (
    <>
      <label>{label}</label>
      <textarea
        name={name}
        type={inputType}
        onChange={controlFunc}
        placeholder={placeholder}
        value={content}
      />
    </>
  )
}
