import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

// Components
import Navbar from './components/Navbar';
//Pages
import home from './pages/home';
import singlepost from './pages/singlepost';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#33c9dc',
      main: '#37474f',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff6333',
      main: '#ff3d00',
      contrastText: '#fff'
    },
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
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
      </MuiThemeProvider>
    )
  }
}

export default App;
