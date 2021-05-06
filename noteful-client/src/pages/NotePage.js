import React, {useContext} from 'react'
import {useLocation, useHistory} from 'react-router-dom'
import {NoteItem} from './../components/NoteItem'
import {StoreContext} from './../contexts/StoreContext'

export const NotePage = () => {
  const {data} = useContext(StoreContext)
  const {state} = useLocation()
  const history = useHistory()
  const folders = data.folders
  const folderId = state.folderId ? state.folderId : state.note.folderId
  const folder = folders.find((item) => item.id == folderId)

  const noteItem = Object.entries(state.note).map(([key, value]) => (
    <li key={key + value.id}>{value}</li>
  ))

  return (
    <>
      <div className="column">
        <h2>{folder.name}</h2>
        <button onClick={() => history.goBack()}>Back</button>
      </div>
      <div className="column">
        <NoteItem note={noteItem} />
      </div>
    </>
  )
}
