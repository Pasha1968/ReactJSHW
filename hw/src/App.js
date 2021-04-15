import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import List from './List.js'
import Bookadd from './components/Bookadd.js'

function App() {
  return (
   <BrowserRouter>
    <Switch>
      <Route  exact component={List} path="/"/>
      <Route  exact component={Bookadd} path="/create"/>
    </Switch>
   </BrowserRouter>
  );
}

export default App;