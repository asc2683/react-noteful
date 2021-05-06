import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {MainPage, NotePage, FolderPage, NotFoundPage, FormPage} from './pages'
import {StoreProvider} from './contexts/StoreContext'
import './App.css'

function App() {
  return (
    <main className="row">
      <Router>
        <StoreProvider>
          <Switch>
            <Route path="/" exact>
              <MainPage />
            </Route>
            <Route path="/folder/:id">
              <FolderPage />
            </Route>
            <Route path="/note/:id">
              <NotePage />
            </Route>
            <Route path="/add-folder">
              <FormPage />
            </Route>
            <Route path="/add-note">
              <FormPage />
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </StoreProvider>
      </Router>
    </main>
  )
}

export default App
