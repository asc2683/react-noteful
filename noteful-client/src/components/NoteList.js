import React, {useContext} from 'react'
import {Link, useParams} from 'react-router-dom'
import {StoreContext} from './../contexts/StoreContext'

export const NoteList = () => {
  const {data, deleteNote} = useContext(StoreContext)
  const {id} = useParams()
  const notes = id && data.notes ? data.notes.filter((item) => item.folderId == id) : data.notes

  const noteItems = notes
    ? notes.map((item) => (
        <li key={item.id}>
          <Link
            to={{
              pathname: `/note/${item.id}`,
              state: {
                note: item,
                folderId: id
              }
            }}
          >
            {item.name}
          </Link>
          <button onClick={() => deleteNote(item.id)}>Delete</button>
        </li>
      ))
    : null

  return (
    <>
      <ul>{noteItems}</ul>
      <Link to="/add-note">Add note</Link>
    </>
  )
}
