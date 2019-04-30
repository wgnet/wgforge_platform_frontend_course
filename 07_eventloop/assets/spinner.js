import React from 'react';

const sleepTimeout = 5000;

class SleepySpinny extends React.Component {
  sleep() {
    const now = Date.now();
    while (Date.now() - now < sleepTimeout) {
      // zZzZz-z-z...
    }
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

    const spinnerStyles = {
      border: '20px solid #F2B50F',
      borderRightColor: '#0266C8',
      borderLeftColor: '#F90101',
      borderTopColor: '#00933B',
      width: '100px',
      height: '100px',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      margin: 'auto',
      borderRadius: '50%',
      zIndex: '1'
    };

    return (
      <div style={containerStyles}>
        <div id="spinner" style={spinnerStyles} />
        <button onClick={this.sleep}>sleep</button>
      </div>
    );
  }

  componentDidMount() {
    const spinner = document.querySelector('#spinner');
    let angle = 0;

    const animate = () => {
      angle += 16;
      angle = angle > 360 ? angle - 360 : angle;

      spinner.style.transform = `rotate(${angle}deg)`;
      requestAnimationFrame(animate);
    };

    animate();
  }
}

export default SleepySpinny;
