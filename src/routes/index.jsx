import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

// pages
import Home from '../pages/Home'
import Nasional from '../components/module/news/Nasional/Nasional'
import Internasional from '../components/module/news/Internasional/Internasional'
import Navbar from '../components/module/navbar/Navbar'
import Footer from '../components/module/footer/Footer'
export default function Routes () {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/nasional" component={Nasional}/>
        <Route path="/internasional" component={Internasional}/>
      </Switch>
      <Footer/>
    </Router>
  )
}