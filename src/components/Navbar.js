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

                </Toolbar>
            </AppBar>
        )
    }
}

export default Navbar