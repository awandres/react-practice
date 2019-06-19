import React from 'react';
import Greetings from './Greetings.js'
import style from './style'
import TextField from './TextField'
import FirstNameField from './FirstNameField'
import LastNameField from './LastNameField'

class SimpleForm extends React.Component {

state = {
  firstName: "",
  firstNameError: "",
  lastName: "",
  lastNameError: "",
}

validateName = name => {
  const regex = /[A-Za-z]{3,}/;

  return !regex.test(name)
  ? "The name must contain 3 or more letters. Special characters are not allowed"
  : ""
}

onFirstNameBlur = () => {
  const {firstName} = this.state

  const firstNameError = this.validateName(firstName)

  return this.setState({firstNameError})
}

onLastNameBlur = () => {
  const {lastName} = this.state

  const lastNameError = this.validateName(lastName)

  return this.setState({lastNameError})
}

onFirstNameChange = event =>
  this.setState({
    firstName: event.target.value
  });

onLastNameChange = event =>
  this.setState({
    lastName: event.target.value
  });

  render() {

    const {firstNameError, firstName, lastNameError, lastName} = this.state

    return (
      <div style={style.form}>
      <FirstNameField
        error={firstNameError}
        onBlur={this.onFirstNameBlur}
        onChange={this.onFirstNameChange} />

      <LastNameField
        error={lastNameError}
        onBlur={this.onLastNameBlur}
        onChange={this.onLastNameChange}  />
      </div>
    )
  }
}

const App = () => (
  <div>
    <SimpleForm />
  </div>
)

export default SimpleForm
