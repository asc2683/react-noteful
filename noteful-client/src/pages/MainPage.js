import React from 'react'
import {FolderList} from './../components/FolderList'
import {NoteList} from './../components/NoteList'
import './../App.css'

export const MainPage = () => {
  return (
    <>
      <div className="column">
        <FolderList />
      </div>
      <div className="column">
        <NoteList />
      </div>
    </>
  )
}
