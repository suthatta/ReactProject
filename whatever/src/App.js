import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

import Home from './Components/Home'
import Api from './Components/Api'
import Counter from './Components/Counter'
import Foo from './Components/Foo'

export default function defaultExample() {

  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Foo">Foo</Link>
        </li>
        <li>
          <Link to="/Api">Api</Link>
        </li>
        <li>
          <Link to="/Counter">Counter</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/Api"><Api /></Route>
        <Route exact path="/Foo"><Foo name="Suthatta" />
          <Foo name="Maya" /></Route>
        <Route exact path="/Counter"><Counter /></Route>
      </Switch>
    </Router>
  )
}
