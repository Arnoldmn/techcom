import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

class Navbar extends Component {
    render() {
        return (
            <AppBar>
                <Toolbar>
                    <h1>Logo</h1>
                    <Button color="inherit" component={Link} to="/">LOGO</Button>
                    <Button color="inherit" to="/">Home</Button>
                    <Button color="inherit" to="">Notifications</Button>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Navbar