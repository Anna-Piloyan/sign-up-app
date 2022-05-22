import React from 'react';
import './Register.module.css';
import Email from '../Email/Email';
import Password from '../Password/Password';
import User from '../User/User';

class Register extends React.Component {
  render(){
    return(
      <div className="register">
      <form onSubmit={this.props.submitRegister}>
      <h2>Sign Up!</h2>
      <fieldset>
              <legend>Create Account</legend>
              <ul>
              <User
                name={this.props.name}
                handleChangeName={this.props.handleChangeName} />
              <Email
                email={this.props.email}
                handleChangeEmail={this.props.handleChangeEmail} />
              <Password
                pwd1={this.props.pwd1}
                handleChangePass={this.props.handleChangePass} />
              </ul>
            </fieldset>
            <button>Submit</button>
            <button type="button" onClick={ this.props.changeView}>Have an Account?</button>
      </form>
      </div>
    )
    }
}

Register.propTypes = {};

Register.defaultProps = {};

export default Register;
