import React from 'react'
import { Switch, Router, Route } from 'react-router-dom'

// pages
import Home from '../pages/Home'
import News from '../pages/News'

export default function Routes () {
  return (
    <Router>
      <Switch>
        <Route exact component={Home}/>
        <Route exact component={News}/>
      </Switch>
    </Router>
  )
}