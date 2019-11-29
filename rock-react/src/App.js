import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css"


import Home from './Components/Page/Home'
import List from './Components/Page/List'
import { Hooks } from './Components/Page/Hooks'
import Express from './Components/Page/Express'
import MyWorks from './Components/Page/MyWorks'


export class App extends React.Component {

  navItems = [
    'Home', 'List', 'Hooks', 'Express', 'MyWorks'
  ]
  render() {
    return (
      <div>
        <Router>
          <nav className="nav-lists">
            {this.navItems.map(item => {
              return (
                <li className="nav-list-item" key={item}> <Link to={`/${item.toLowerCase()}`}>{item}</Link></li>
              )
            })}
          </nav>

          <main>

            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/list">
                <List />
              </Route>
              <Route path="/hooks">
                <Hooks />
              </Route>
              <Route path="/express">
                <Express />
              </Route>
              <Route path="/myworks">
                <MyWorks />
              </Route>
            </Switch>

          </main>
        </Router >
      </div >
    )
  }
}

