import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

class Navbar extends Component {
    render() {
        return (
            <AppBar>
                <Toolbar>
                    <Button color="inherit">LOGO</Button>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">Notifications</Button>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Navbar