// Import React
import React from 'react';
import { css } from 'react-emotion';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
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
let key = Symbol.for('bazinga')
console.log(Symbol.keyFor(key))
// 'bazinga'
`.trim();

let symbolBrief2 = `
const symPwd = Symbol('password');
console.log(symPwd.description); // ES2019
// 'password' 👌
`.trim();

let symbolIterIface = `
someObject[Symbol.iterator] = function() {
  ...
  return {
    next: function() {
      return { value: "wassup", done: false };
    }
  };
};
`.trim();

let genSpec = `
function* gen() {
  yield 'hello';
}
`.trim();

let genInfinite = `
function* count() {
  let i = 0;
  while (true) {
    yield i++;
  }
}
`.trim();

let genYield = `
function* count() {
  let i = 0;
  while (true) {
    let current = yield i++;
    if (current) {
      i = 0;
    }
  }
}
`.trim();

let genYieldUsage = `
const counter = count();
console.log(counter.next().value); // 0
console.log(counter.next().value); // 1
console.log(counter.next().value); // 2
console.log(counter.next(true).value); // 0
console.log(counter.next().value); // 1

`.trim();


const code = {
  forInArray: 'for (let i in [1, 2, 3, 4, 5]) { \n    console.log(i);\n}',
  forOfArray: 'for (let i of [1, 2, 3, 4, 5]) { \n    console.log(i);\n}',
  forOfString: 'for (let i of "wgforge") { \n    console.log(i);\n}',
  forOfSet: 'for (let i of new Set("wgforge".split(\'\'))) { \n    console.log(i);\n}',
  forOfMap: require('raw-loader!../assets/for_of_map.example'),
  forOfMap2: 'for (let [key, val] of colors) { \n    console.log(key, val);\n}',
  forOfNodeList,
  forInObject,
  objectHasOwnProperty,
  forOfObject,
  forOfObjectSymbol,
  symbolBrief,
  symbolBrief2,
  symbolIterIface,
  genSpec,
  genInfinite,
  genYield,
  genYieldUsage,
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
            03 Итераторы
          </Heading>
        </Slide>

        <Slide>
          <Text fill>
            Итератор — интерфейс, предоставляющий доступ к элементам коллекции (массива или
            контейнера) и навигацию по ним.
          </Text>
          <Text textAlign="right">
            <small>
              <Link textColor="secondary" href="https://ru.wikipedia.org/wiki/Итератор">
                wikipedia
              </Link>
            </small>
          </Text>
        </Slide>

        <Slide>
          <Heading margin={20} size={4}>
            итерируем Array
          </Heading>
          <Appear>
            <div>
              <Heading margin={20} size={5}>
                for .. in
              </Heading>
              <CodePane
                textSize={32}
                theme={CODE_THEME}
                lang="javascript"
                source={code.forInArray}
              />
            </div>
          </Appear>

          <Appear>
            <div>
              <Heading margin="50px 0 20px" size={5}>
                for .. of
              </Heading>
              <CodePane
                textSize={32}
                theme={CODE_THEME}
                lang="javascript"
                source={code.forOfArray}
              />
            </div>
          </Appear>
        </Slide>

        <Slide>
          <Heading margin={20} size={5}>
            String 🎻
          </Heading>
          <CodePane textSize={32} theme={CODE_THEME} lang="javascript" source={code.forOfString} />

          <Appear>
            <div>
              <Heading margin="50px 0 20px" size={5}>
                Set 🥞
              </Heading>

              <CodePane textSize={32} theme={CODE_THEME} lang="javascript" source={code.forOfSet} />
            </div>
          </Appear>
        </Slide>

        <Slide>
          <Heading margin={20} size={5}>
            Map 🗺
          </Heading>

          <Appear>
            <div>
              <CodePane textSize={32} theme={CODE_THEME} lang="javascript" source={code.forOfMap} />
            </div>
          </Appear>
          <Appear>
            <div>
              <CodePane
                textSize={32}
                theme={CODE_THEME}
                lang="javascript"
                source={code.forOfMap2}
              />
            </div>
          </Appear>
        </Slide>

        <Slide>
          <Heading margin={20} size={5}>
            NodeList
          </Heading>

          <Appear>
            <div>
              <CodePane
                textSize={32}
                theme={CODE_THEME}
                lang="javascript"
                source={code.forOfNodeList}
              />
            </div>
          </Appear>
        </Slide>

        <Slide>
          <Heading margin={20} size={5}>
            how to iterate Objects
          </Heading>

          <Appear>
            <div>
              <CodePane
                textSize={32}
                theme={CODE_THEME}
                lang="javascript"
                source={code.forInObject}
              />
            </div>
          </Appear>
          <Appear>
            <div>
              <CodePane
                textSize={32}
                theme={CODE_THEME}
                lang="javascript"
                source={code.objectHasOwnProperty}
              />
            </div>
          </Appear>
          <Appear>
            <div>
              <CodePane
                textSize={32}
                theme={CODE_THEME}
                lang="javascript"
                source={code.forOfObject}
              />
            </div>
          </Appear>
        </Slide>

        <Slide>
          <Heading margin={20} size={5}>
            Symbol
          </Heading>

          <Appear>
            <div>
              <CodePane
                textSize={28}
                theme={CODE_THEME}
                lang="javascript"
                source={code.forOfObjectSymbol}
              />
            </div>
          </Appear>
          <Appear>
            <div>
              <CodePane
                textSize={28}
                theme={CODE_THEME}
                lang="javascript"
                source={code.symbolBrief}
              />
            </div>
          </Appear>
          <Appear>
            <div>
              <CodePane
                textSize={28}
                theme={CODE_THEME}
                lang="javascript"
                source={code.symbolBrief2}
              />
            </div>
          </Appear>
        </Slide>

        <Slide>
          <Heading margin={20} size={5}>
            <Link
              textColor="secondary"
              href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Iteration_protocols"
            >
              [Symbol.iterator]
            </Link>
          </Heading>
          <Appear>
            <div>
              <CodePane
                textSize={32}
                theme={CODE_THEME}
                lang="javascript"
                source={code.symbolIterIface}
              />
            </div>
          </Appear>
        </Slide>
        <Slide>
          <Heading fit margin={20} size={5} className={stylish}>
            // live-coding<span className={lineStyle}>&nbsp;</span>
          </Heading>
        </Slide>
        <Slide>
          <Heading fit margin={20} size={5} className={stylish}>
            – вопросы?...
            <br />– а что такое <span style={{ color: '#ff0028' }}>генераторы</span>?<br />– 😤
          </Heading>
        </Slide>

        <Slide>
          <Heading size={6}>Генератор</Heading>
          <Appear>
            <div fit>
              это <b>объект</b>, возвращаемый{' '}
              <b style={{ color: '#ff0028' }}>функцией-генератором</b> и соответствующий как{' '}
              <b>"итерируемому"</b> протоколу, так и протоколу <b>"итератор"</b>.
            </div>
          </Appear>
        </Slide>
        <Slide>
          <Heading size={5}>функция является генератором если:</Heading>
          <List>
            <Appear>
              <ListItem>
                объявлена с помощью <Code>function*</Code>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                содержит хотя бы один <Code>yield</Code>
              </ListItem>
            </Appear>
          </List>
          <div>
          <Appear>
            <div>
              <CodePane textSize={28} theme={CODE_THEME} lang="javascript" source={code.genSpec} />
            </div>
          </Appear>
          </div>
        </Slide>

        <Slide>
          <Heading size={6}>бесконечный генератор</Heading>
          <br/>
          <Appear>
            <div>
              <CodePane textSize={32} theme={CODE_THEME} lang="javascript" source={code.genInfinite} />
            </div>
          </Appear>
        </Slide>

        <Slide>
          <Heading size={6}>передача значений в генератор</Heading>
          <br/>
          <Appear>
            <div>
              <CodePane textSize={28} theme={CODE_THEME} lang="javascript" source={code.genYield} />
            </div>
          </Appear>
          <Appear>
            <div>
              <CodePane textSize={28} theme={CODE_THEME} lang="javascript" source={code.genYieldUsage} />
            </div>
          </Appear>
        </Slide>
      </Deck>
    );
  }
}
