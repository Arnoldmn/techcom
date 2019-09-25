import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
// Components
import Navbar from './components/Navbar';
//Pages
import home from './pages/home'
import singlepost from './pages/singlepost'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Router>
          <div className="container">
            <Switch>
              <Route exact path="/" component={home} />
              <Route path="/singlepost" component={singlepost} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
