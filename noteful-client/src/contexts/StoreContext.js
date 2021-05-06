import React, {useState, createContext, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

export const StoreContext = createContext()

const baseUrl = 'http://localhost:9090/'
const endpoints = {
  all: 'db',
  folders: 'folders',
  notes: 'notes'
}

export const StoreProvider = (props) => {
  const history = useHistory()
  const [data, setData] = useState([])

  useEffect(() => {
    loadData()
  }, [])

  const loadData = () => {
    const apiUrl = baseUrl + endpoints.all
    useFetch(apiUrl)
      .then((db) => {
        setData(db)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const createFolder = (input) => {
    const apiUrl = baseUrl + endpoints.folders
    const requestOptions = {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(input)
    }

    useFetch(apiUrl, requestOptions)
      .then((obj) => {
        const notes = data.notes
        const folders = [...data.folders, obj]
        setData({
          notes,
          folders
        })
        history.goBack()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const createNote = (input) => {
    input.modified = new Date()
    const apiUrl = baseUrl + endpoints.notes
    const requestOptions = {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(input)
    }

    useFetch(apiUrl, requestOptions)
      .then((obj) => {
        const notes = [...data.notes, obj]
        const folders = data.folders
        setData({
          notes,
          folders
        })
        history.goBack()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const deleteNote = (noteId) => {
    const apiUrl = baseUrl + `notes/${noteId}`
    const requestOptions = {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    }

    useFetch(apiUrl, requestOptions)
      .then(() => {
        const notes = data.notes.filter((item) => item.id !== noteId)
        const folders = data.folders
        setData({
          notes,
          folders
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const useFetch = async (apiUrl, requestOptions) => {
    let response = await fetch(apiUrl, requestOptions)

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }

    let json = await response.json()
    return json
  }

  const providerValue = {
    data,
    deleteNote,
    createNote,
    createFolder
  }

  return <StoreContext.Provider value={providerValue}>{props.children}</StoreContext.Provider>
}
