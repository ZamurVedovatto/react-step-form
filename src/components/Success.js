import React, { Component, Fragment } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { IconButton, Typography, Toolbar } from '@material-ui/core'

export class Success extends Component {
  restart = e => {
    e.preventDefault()
    this.props.goToBegin()
  }

  render() {
    return (
      <Fragment >
        <AppBar position="static" color="transparent">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <AccountCircleIcon />
            </IconButton>
            <Typography variant="h6">
              Success
            </Typography>
          </Toolbar>
        </AppBar>
        <h1>Thank you for your submission</h1>
        <br/>
        <Button
          variant="outlined"
          style={styles.button}
          onClick={this.restart}
        >Go to Begin</Button>
      </Fragment>
    )
  }
}

const styles = {
  button: {
    margin: 15
  }
}

export default Success