import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import VolunteerIndex from './VolunteerIndex'
import VolunteerShowContainer from './VolunteerShowContainer'
import OrgIndex from './OrgIndex'
import OrgShowContainer from './OrgShowContainer'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
         <Route exact path='/' component={VolunteerIndex}></Route>
         <Route exact path='/users' component={VolunteerIndex}></Route>
         <Route exact path='/users/:id' component={VolunteerShowContainer}></Route>
         <Route exact path='/organizations' component={OrgIndex}></Route>
         <Route exact path='/organizations/:id' component={OrgShowContainer}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
