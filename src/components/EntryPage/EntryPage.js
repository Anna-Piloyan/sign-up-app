import React from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';

import './EntryPage.module.css';

class EntryPage extends React.Component {
  constructor() {
    super()
    this.state = {
      currentView: "signUp",
      name: '',
      email: '',
      pass: ''
    }
    this.submitRegister = this.submitRegister.bind(this)
    this.submitLogin = this.submitLogin.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangePass = this.handleChangePass.bind(this)
  }

  handleChangeEmail(e) {
    this.setState({ email: e.target.value })
  }
  handleChangeName(e) {
    this.setState({ name: e.target.value })
  }

  handleChangePass(e) {
    this.setState({pass: e.target.value})
  }

  submitRegister(e) {
    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email) &&
      /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(this.state.name)) {
      e.preventDefault()
      alert(`You are registered!!!`)


      let user = {
        name: this.state.name,
        password: this.state.pass
      }

      let u = JSON.stringify(user)

      localStorage.setItem('user', u)

      this.setState({
        name: '', email: '', pass: '', currentView: "logIn"
      })
    }
    else {
      alert('Please check data! Something Wrong!!')
    }
  }

  submitLogin() {
    let localUser = JSON.parse(localStorage.getItem('user'))

    if (localUser) {
      if (localUser.name === this.state.name && localUser.password === this.state.pass) {

        alert('Logged In')
      }
    }
    this.setState({
      name: '', email: '', pass: '', currentView: "logIn"
    })
  }

  changeView = (view) => {
    this.setState({
      currentView: view
    })
  }

  currentView = () => {
    switch (this.state.currentView) {
      case "signUp":
        return (
          <Register
            submitRegister={this.submitRegister}
            changeView={() => this.changeView("logIn")}
            name={this.state.name}
            handleChangeName={this.handleChangeName}
            email={this.state.email}
            handleChangeEmail={this.handleChangeEmail}
            pass={this.state.pass}
            handleChangePass={this.handleChangePass}
          />
         
        )
      
    
      case "logIn":
        return (
          <Login
            submitLogin={this.submitLogin}
            changeView={() => this.changeView("signUp")}
            name={this.state.name}
            handleChangeName={this.handleChangeName}
            email={this.state.email}
            handleChangeEmail={this.handleChangeEmail}
            pass={this.state.pass}
            handleChangePass={this.handleChangePass}
          />
        )
       
      default:
        break;
    }
  }

  render() {
    return (
      <section id="entry-page">
        {this.currentView()}
      </section>
    )
  }
}

export default EntryPage;