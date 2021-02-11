import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from './components/Container/Container'

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Container} />
      </Switch>
    </Router>
  )
}

export default App
