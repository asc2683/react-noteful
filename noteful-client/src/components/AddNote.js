import React, {useContext} from 'react'
import {FormInput} from './Form/Input'
import {FormTextArea} from './Form/TextArea'
import {FormSelect} from './Form/Select'
import {StoreContext} from './../contexts/StoreContext'

export const AddNote = (props) => {
  const {createNote} = useContext(StoreContext)
  const {data} = useContext(StoreContext)
  const folders = data.folders

  return (
    <>
      <h1>Add Note</h1>
      <FormInput
        inputType="text"
        name="name"
        label="Name"
        placeholder="Type here"
        content={props.value.name}
        controlFunc={props.handleChange}
      />
      <FormTextArea
        name="content"
        inputType="text"
        label="Content"
        placeholder="Type here"
        content={props.value.content}
        controlFunc={props.handleChange}
      />
      <FormSelect
        name="folderId"
        label="Folder"
        placeholder="Select"
        controlFunc={props.handleChange}
        selectedOption={props.value.folderId}
        options={folders}
      />
      <button onClick={() => createNote(props.value)}>Create Note</button>
    </>
  )
}
