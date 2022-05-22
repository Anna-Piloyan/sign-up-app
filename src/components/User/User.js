import React from 'react';
import './User.module.css';

class User extends React.Component {
  render(){
    return(
      <li>
        <label htmlFor="name" >Username:</label>
        <input
          className="validate" value={this.props.name}
          onChange={this.props.handleChangeName}
          type="text" id="name" required />
      </li>
    )
  }
}

User.propTypes = {};

User.defaultProps = {};

export default User;
