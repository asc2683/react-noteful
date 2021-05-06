import React, {useContext} from 'react'
import {FormInput} from './Form/Input'
import {StoreContext} from './../contexts/StoreContext'

export const AddFolder = (props) => {
  const {createFolder} = useContext(StoreContext)

  return (
    <>
      <h1>Add Folder</h1>
      <FormInput
        inputType="text"
        name="name"
        label="Folder name"
        placeholder="Type here"
        content={props.value.name}
        controlFunc={props.handleChange}
      />
      <button onClick={() => createFolder(props.value)}>Create Folder</button>
    </>
  )
}
