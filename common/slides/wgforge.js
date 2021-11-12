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
    width: '255px',
    height: '12px',
    background: '#ff0028',
    transform: 'rotate(-2.51deg)',
    top: '-4px',
    left: '-255px',
    zIndex: -1,
    opacity: 0.3
  }
});

const noWrap = { whiteSpace: 'nowrap' };

export default function FrontSlide() {
  return (
    <Slide className={headingStyle}>
      <Typeface googleFont="Roboto">
        <Image src={images.logo} width={1000} marginBotton={50} />
        <br />
        <Heading textColor="secondary" style={{ fontSize: '24px' }}>
          <span style={{ fontVariant: 'small-caps' }}>powered by</span>
          <br />
          <span style={{ textTransform: 'uppercase' }}>
            Platform <span style={noWrap}>FRONT-END</span>
          </span>
          <span className={lineStyle}>&nbsp;</span>
        </Heading>
      </Typeface>
    </Slide>
  );
}
