import React, { Component, Fragment } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { IconButton, Typography, Toolbar, List, ListItem, ListItemText } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

class Confirm extends Component {
  continue = e => {
    e.preventDefault()
    // Proccess form and send data to API
    this.props.nextStep()
  }

  back = e => {
    e.preventDefault()
    this.props.prevStep()
  }

  render() {
    const { values: { firstName, lastName, email, occupation, city, bio } } = this.props
    return (
      <Fragment >
        <AppBar position="static" color="transparent">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <AccountCircleIcon />
            </IconButton>
            <Typography variant="h6">
              Confirm Your Details
            </Typography>
          </Toolbar>
        </AppBar>

        <List>
          <ListItem>
            <ListItemText
              primary="First Name"
              secondary={firstName ? firstName : null}
            ></ListItemText>

            <ListItemText
              primary="Last Name"
              secondary={lastName ? lastName : null}
            ></ListItemText>

            <ListItemText
              primary="Email"
              secondary={email ? email : null}
            ></ListItemText>

            <ListItemText
              primary="Occupation"
              secondary={occupation ? occupation : null}
            ></ListItemText>

            <ListItemText
              primary="City"
              secondary={city ? city : null}
            ></ListItemText>

            <ListItemText
              primary="Bio"
              secondary={bio ? bio : null}
            ></ListItemText>

          </ListItem>
        </List>

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
        >Confirm</Button>
      </Fragment>
    )
  }
}

const styles = {
  button: {
    margin: 15
  }
}

export default Confirm