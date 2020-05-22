import React, { Component } from 'react'

class UserForm extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: ''
  }

  // Proceed to next step
  nextStep = () => {
    const { step } = step.state;
    this.setState({
      step: step + 1
    })
  }

  // Go back to previous step
  prevStep = () => {
    const { step } = step.state;
    this.setState({
      step: step - 1
    })
  }

  // Handle field change
  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    })
  }

  render() {
    return (
      <div></div>
    )
  }
}

export default UserForm