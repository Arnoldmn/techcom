import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import Posts from './components/Posts';
import './App.css';
//pages
import home from './pages/home'
import singlepost from './pages/singlepost'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={home} />
            <Route path="/singlepost" component={singlepost} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
