import React from 'react';
import './Password.module.css';

class Password extends React.Component {
  render(){
    return(
      <li>
      <label htmlFor="password">Password:</label>
      <input className="validate" type="password"
        value={this.props.pass}
        onChange={this.props.handleChangePass}
        id="password" required />
        </li>
    )
  }
}

Password.propTypes = {};

Password.defaultProps = {};

export default Password;
