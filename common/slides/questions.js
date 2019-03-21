import React from 'react';
import { css } from 'react-emotion';

import { Heading, Slide } from 'spectacle';

const headingStyle = css({
  position: 'relative',
  transform: 'rotate(-2deg)'
});

const lineStyle = css({
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    display: 'inline-block',
    width: '90px',
    height: '3px',
    background: '#ff0028',
    transform: 'rotate(-5.51deg)',
    top: '15px',
    left: '-85px',
    zIndex: -1
  }
});

export default class QuestionsSlide extends React.Component {
  render() {
    return (
      <Slide>
        <Heading textColor="secondary" className={headingStyle} fit>
          ВОПРОСЫ<span className={lineStyle}>&nbsp;</span>
        </Heading>
      </Slide>
    );
  }
}
