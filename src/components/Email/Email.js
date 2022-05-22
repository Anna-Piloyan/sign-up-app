import React from 'react';
import './Email.module.css';

class Email extends React.Component {
  render() {
    return (
      <li>
        <label htmlFor="email">Email:</label>
        <input
          value={this.props.email}
          onChange={this.props.handleChangeEmail}
          className="validate"
          type="email" id="email"
          required />
      </li>
    )
  }
}

Email.propTypes = {};

Email.defaultProps = {};

export default Email;
