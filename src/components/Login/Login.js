import React from 'react';
import Password from '../Password/Password';
import User from '../User/User';
import './Login.module.css';

class Login extends React.Component{

  render() {
    return (
      <div>
         <form onSubmit={this.props.submitLogin}>
            <h2>Welcome Back!</h2>
            <fieldset>
              <legend>Log In</legend>
              <ul>
              <User
              name={this.props.name}
              handleChangeName={this.props.handleChangeName}/>
              <Password
              pass={this.props.pass}
              handleChangePass={this.props.handleChangePass}/>
              </ul>
             
            </fieldset>
            <button type="submit">Login</button>
            <button type="button" onClick={ this.props.changeView}>Create an Account</button>
          </form>
      </div>
    )
  }
}

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
