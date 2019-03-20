import React from 'react';
import { css } from 'react-emotion';

import { Heading, Image, Slide, Typeface } from 'spectacle';

const images = {
  logo: require('../assets/logo.svg')
};

const headingStyle = css({
  transform: 'rotate(-2deg)'
});

const lineStyle = css({
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    display: 'inline-block',
    width: '160px',
    height: '10px',
    background: '#ff0028',
    transform: 'rotate(-5.51deg)',
    top: '16px',
    left: '-150px',
    zIndex: -1
  }
});

const noWrap = { whiteSpace: 'nowrap' };

export default function FrontSlide() {
  return (
    <Slide className={headingStyle}>
      <Typeface googleFont="Roboto">
        <Image src={images.logo} width={1000} marginBotton={50} />
        <br />
        <Heading caps fit textColor="secondary">
          Platform <span style={noWrap}>FRONT-END</span>
          <span className={lineStyle}>&nbsp;</span>
        </Heading>
      </Typeface>
    </Slide>
  );
}
