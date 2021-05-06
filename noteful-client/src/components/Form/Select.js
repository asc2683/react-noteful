import React from 'react'

export const FormSelect = ({label, name, selectedOption, controlFunc, placeholder, options}) => {
  return (
    <>
      <label>{label}</label>
      <select name={name} value={selectedOption} onChange={controlFunc}>
        <option value="">{placeholder}</option>
        {options.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </>
  )
}
