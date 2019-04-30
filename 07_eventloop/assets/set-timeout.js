import React from 'react';

const spinner = require('./hourglass.gif');

class FakeAjaxExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      log: []
    };
  }

  run() {
    this.setState({
      loading: true,
      log: []
    });

    setTimeout(() => {
      this.setState({
        log: ['Hello']
      });
    }, 300);

    setTimeout(() => {
      this.setState({
        log: ['Hello', 'people!']
      });
    }, 600);

    setTimeout(() => {
      this.setState({
        loading: false,
        log: ['Hello', 'people!', 'Wargaming']
      });
    }, 3500);
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

    const btnStyles = {
      position: 'absolute',
      bottom: 0,
      right: 0
    };

    const pStyles = {
      margin: '0',
      textAlign: 'left',
      paddingLeft: '10px',
      borderBottom: '1px solid #bbb',
      fontFamily: 'Menlo, Monaco, monospace',
      color: 'white'
    };

    let loading;
    if (this.state.loading) {
      loading = <img height="24px" src={spinner.replace('/', '')} />;
    } else {
      loading = 'run';
    }

    return (
      <div style={containerStyles}>
        <button style={btnStyles} onClick={() => this.run()}>
          {loading}
        </button>
        <div>
          {this.state.log.map((item, i) => (
            <p style={pStyles} key={i}>
              {item}
            </p>
          ))}
        </div>
      </div>
    );
  }
}

export default FakeAjaxExample;
