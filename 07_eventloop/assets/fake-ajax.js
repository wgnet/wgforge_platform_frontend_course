import React from 'react';

/* eslint no-alert: 0 */

class FakeAjaxExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  alert() {
    alert('he there!');
  }

  clean() {
    this.setState({
      users: []
    });
  }

  loadUsers() {
    const now = Date.now();
    while (Date.now() - now < 3000) {
      // zZzZz-z-z...
    }

    this.setState({
      users: [
        { firstname: 'Walter', lastname: 'White' },
        { firstname: 'Jessy', lastname: 'Pinkman' },
        { firstname: 'Saul', lastname: 'Goodman' }
      ]
    });
  }

  render() {
    const containerStyles = {
      position: 'relative',
      minHeight: '50vh',
      backgroundColor: '#999',
      border: '5px solid #eee',
      borderTopWidth: '20px',
      borderRadius: '4px 4px 0 0',
      paddingTop: '20px'
    };

    const users = this.state.users;

    return (
      <div style={containerStyles}>
        <button onClick={() => this.clean()}>reset</button>
        &nbsp;
        <button onClick={() => this.loadUsers()}>load users</button>
        &nbsp;
        <button onClick={this.alert}>alert</button>
        <ul>
          {users.map(user => (
            <li>
              {user.firstname} {user.lastname}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FakeAjaxExample;
