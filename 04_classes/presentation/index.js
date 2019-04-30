// Import React
import React from 'react';
import { css } from 'react-emotion';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text,
  CodePane
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import FrontSlide from '../../common/slides/wgforge';
import { CODE_THEME } from '../../common/constants';

const images = {
  // imageName: require('../assets/some-image.jpg'),
};

let forOfNodeList = `
let divs = document.querySelectorAll('div');
for (let div of divs) {
  console.log(div);
}
`.trim();

let forInObject = `
let user = {name: 'John', role: 'admin'};
for (let i in user) {
  console.log(i);
}
`.trim();

let objectHasOwnProperty = `
for (let i in user) {
  if (!user.hasOwnProperty(i)) continue;

  console.log(i);
}
`.trim();

let forOfObject = `
for (let key of Object.keys(user)) {
  console.log(key);
}
`.trim();

let forOfObjectSymbol = `
let user = {name: 'John', role: 'admin'};
user[Symbol('password')] = 'qqq111'; //😎
for (let key of Object.keys(user)) {
  console.log(key);
}
`.trim();

let symbolBrief = `
Symbol('password') === Symbol('password')
// false
Symbol.for('password') === Symbol.for('password')
// true
`.trim();

let symbolBrief2 = `
const symPwd = Symbol('password');
console.log(symPwd.description); // ES2019
// 'password' 👌
`.trim();

const code = {
  forInArray: 'for (let i in [1, 2, 3, 4, 5]) { \n    console.log(i);\n}',
  forOfArray: 'for (let i of [1, 2, 3, 4, 5]) { \n    console.log(i);\n}',
  forOfString: 'for (let i of "wgforge") { \n    console.log(i);\n}',
  forOfSet: 'for (let i of new Set("wgforge".split(\'\'))) { \n    console.log(i);\n}',
  forOfMap2: 'for (let [key, val] of colors) { \n    console.log(key, val);\n}',
  forOfNodeList,
  forInObject,
  objectHasOwnProperty,
  forOfObject,
  forOfObjectSymbol,
  symbolBrief,
  symbolBrief2
};

const stylish = css({
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

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['slide']} transitionDuration={500} theme={theme}>
        <FrontSlide />
        <Slide>
          <Heading>⏰ 📵 🔞 🗣 ✌️</Heading>
        </Slide>

        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            04 Классы
          </Heading>
        </Slide>

        <Slide>
          <Heading fit margin={20} size={5} className={stylish}>
            // live-coding<span className={lineStyle}>&nbsp;</span>
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
