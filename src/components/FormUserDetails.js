import React, { Component, Fragment } from 'react'
import AppBar from '@material-ui/core/AppBar'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { IconButton, Typography, Toolbar } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault()
    this.props.nextStep()
  }

  render() {
    const { values } = this.props
    const { handleChange } = this.props
    return (
      <Fragment >
        <AppBar position="static" color="transparent">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <AccountCircleIcon />
            </IconButton>
            <Typography variant="h6">
              Enter User Details
            </Typography>
          </Toolbar>
        </AppBar>
        <TextField 
          helperText="Enter your First Name"
          label="First Name"
          onChange={handleChange('firstName')}
          defaultValue={values.firstName}
        />
        <br/>
        <TextField 
          helperText="Enter your Last Name"
          label="Last Name"
          onChange={handleChange('lastName')}
          defaultValue={values.lastName}
        />
        <br/>
        <TextField 
          helperText="Enter your Email"
          label="Email"
          onChange={handleChange('email')}
          defaultValue={values.email}
        />
        <br/>
        <Button
          color="primary"
          variant="outlined"
          style={styles.button}
          onClick={this.continue}
        >Next</Button>
      </Fragment>
    )
  }
}

const styles = {
  button: {
    margin: 15
  }
}

export default FormUserDetails