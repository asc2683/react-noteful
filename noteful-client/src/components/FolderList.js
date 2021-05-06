import React, {useContext} from 'react'
import {NavLink, Link} from 'react-router-dom'
import {StoreContext} from './../contexts/StoreContext'

export const FolderList = () => {
  const {data} = useContext(StoreContext)
  const folders = data.folders

  const folderItems = folders
    ? folders.map((item) => (
        <li key={item.id}>
          <NavLink
            activeStyle={{
              fontWeight: 'bold',
              color: 'red'
            }}
            to={{
              pathname: `/folder/${item.id}`
            }}
          >
            {item.name}
          </NavLink>
        </li>
      ))
    : null

  return (
    <>
      <ul>{folderItems}</ul>
      <Link to="/add-folder">Add Folder</Link>
    </>
  )
}
