import React from 'react'

export const FormInput = ({label, name, content, controlFunc, placeholder, inputType}) => {
  content = content || ''

  return (
    <>
      <label>{label}</label>
      <input
        name={name}
        type={inputType}
        onChange={controlFunc}
        placeholder={placeholder}
        value={content}
      />
    </>
  )
}
