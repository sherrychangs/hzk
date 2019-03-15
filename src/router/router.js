import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect, Switch, NavLink } from 'react-router-dom'

import Login from '../components/login/login'
import Home from '../components/home/home'
class RouterComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  render() {
    return (
      <Router>
        <div>
          {/* <NavLink to="/">Home</NavLink>
          <NavLink to="/login">Login</NavLink> */}
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
          </Switch>
        </div>
      </Router>
    )
  }
}
export default RouterComponent