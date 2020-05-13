import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import VolunteerIndex from './VolunteerIndex'
import VolunteerShowContainer from './VolunteerShowContainer'
import OrgIndex from './OrgIndex'
import OrgShowContainer from './OrgShowContainer'
import RepShowContainer from './RepShowContainer'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
         <Route exact path='/users' component={VolunteerIndex}></Route>
         <Route exact path='/users/:id' component={VolunteerShowContainer}></Route>
         <Route exact path='/organizations' component={OrgIndex}></Route>
         <Route exact path='/organizations/:id' component={OrgShowContainer}></Route>
         <Route exact path='/organizations/:id/users/:id' component={RepShowContainer}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
