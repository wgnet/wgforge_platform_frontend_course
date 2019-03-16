import React from 'react';

import { Heading, Image, S, Slide, Typeface } from 'spectacle';

const noWrap = { whiteSpace: 'nowrap' };

const images = {
  logo: require('../assets/logo.svg')
};

export default class FrontSlide extends React.Component {
  render() {
    return (
      <Slide>
        <Typeface googleFont="Roboto">
          <Image src={images.logo} width={1000} marginBotton={50} />
          <hr color="black" />
          <Heading caps fit textColor="secondary">
            Platform <span style={noWrap}>FRONT-END</span>
          </Heading>
        </Typeface>
      </Slide>
    );
  }
}
