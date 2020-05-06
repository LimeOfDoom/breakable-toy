import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import TestComponent from './TestComponent'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
         <Route exact path='/' component={TestComponent}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
