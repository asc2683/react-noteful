import React, {useState} from 'react'
import {useLocation, useHistory} from 'react-router-dom'
import {AddNote} from './../components/AddNote'
import {AddFolder} from './../components/AddFolder'
import './../App.css'

export const FormPage = () => {
  const [value, setValue] = useState('')

  const handleChange = (event) => {
    const target = event.target
    const input = target.value
    const name = target.name

    setValue({
      ...value,
      [name]: input
    })
  }

  const history = useHistory()
  const location = useLocation()
  const path = location.pathname

  return (
    <>
      <div className="column">
        <button onClick={() => history.goBack()}>Back</button>
      </div>
      <div className="column">
        {path == '/add-folder' ? (
          <AddFolder handleChange={handleChange} value={value} />
        ) : (
          <AddNote handleChange={handleChange} value={value} />
        )}
      </div>
    </>
  )
}
