import React, { Component } from 'react'
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

class home extends Component {
    state = {
        comments: null
    }
    componentDidMount() {
        axios.get('/comments')
            .then(res => {
                this.setState({
                    comments: res.data
                })
            }).catch(err => console.log(err))
    }
    render() {
        let recentComment = this.state.comment ? (
            this.state.comments.map((comment) => <p>comment.body</p>)
        ) : (<p>Loading...</p>);
        return (
            <Grid container spacing={16}>
                <Grid item sm={8} xs={12}>
                    {recentComment}
                </Grid>
                <Grid item sm={4} xs={12}>
                    <p>Adverts..</p>
                </Grid>
            </Grid>
        )
    }
}

export default home;