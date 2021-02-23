import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

// pages
import Home from '../pages/Home'
import News from '../pages/News'
import Navbar from '../components/module/navbar/Navbar'
import Footer from '../components/module/footer/Footer'
export default function Routes () {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact component={Home}/>
        <Route exact component={News}/>
      </Switch>
      <Footer/>
    </Router>
  )
}