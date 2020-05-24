import React, { Component, Fragment } from 'react'
import AppBar from '@material-ui/core/AppBar'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { IconButton, Typography, Toolbar } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault()
    this.props.nextStep()
  }

  back = e => {
    e.preventDefault()
    this.props.prevStep()
  }

  render() {
    const { values, handleChange } = this.props
    return (
      <Fragment >
        <AppBar position="static" color="transparent">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <AccountCircleIcon />
            </IconButton>
            <Typography variant="h6">
              Enter Personal Details
            </Typography>
          </Toolbar>
        </AppBar>
        <TextField 
          helperText="Enter your Occupation"
          label="Occupation"
          onChange={handleChange('occupation')}
          defaultValue={values.occupation}
        />
        <br/>
        <TextField 
          helperText="Enter your City"
          label="City"
          onChange={handleChange('city')}
          defaultValue={values.city}
        />
        <br/>
        <TextField 
          helperText="Enter your Bio"
          label="Bio"
          onChange={handleChange('bio')}
          defaultValue={values.bio}
        />
        <br/>
        <Button
          variant="outlined"
          style={styles.button}
          onClick={this.back}
        >Back</Button>

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

export default FormPersonalDetails