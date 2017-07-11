import React, { Component } from 'react';
import {Route, Switch, NavLink} from 'react-router-dom'
import './App.css';

import Nasa from './Nasa'
import Pokeapi from './Pokeapi'
import Github from './Github'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className = "App-headings">
            <h3>Ain't no party like an</h3>
            <h1>API Party</h1>
          </div>
          <ul className="nav-links">
            <li>
              <NavLink to='/github'>Github API</NavLink>
            </li>
            <li>
              <NavLink to={'/nasa'}>NASA API</NavLink>
            </li>
            <li>
              <NavLink to ='/pokeapi'>Pokemon API</NavLink>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path='/github' component={Github}/>
          <Route path='/nasa' component={Nasa} />
          <Route path='/pokeapi' component={Pokeapi}/>
          <Route render={()=> <p>To get started, click one of the links above</p>}/>

        </Switch>
      </div>
    );
  }
}

export default App;
