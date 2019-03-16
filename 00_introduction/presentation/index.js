// Import React
import React from 'react';

// Import Spectacle Core tags
import {
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
  S,
  Slide,
  Text
} from 'spectacle';

import FrontSlide from '../../common/slides/wgforge';
import QuestionsSlide from '../../common/slides/questions';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {
  // formidagon: require('../assets/formidable-logo.svg'),
  eich: require('../assets/brendaneich.jpg')
};

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
        <FrontSlide textColor="secondary"/>

        <Slide transition={[]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            00 Вступление
          </Heading>
        </Slide>
        <Slide>
          <Layout>
            <Fill>
              <Image src={images.eich} />
            </Fill>

            <Fill>
              <Heading fit size={6} lineHeight={1} textColor="secondary">
                4 октября 1995
              </Heading>
              <Heading size={4} caps lineHeight={1} textColor="secondary">
                Netscape нанимает Брендана Эйха
              </Heading>
            </Fill>
          </Layout>
          <p />
          <Layout>
            <Fill>
              <Text>
                разработать «язык для склеивания» составляющих частей веб-ресурса: изображений,
                плагинов, Java-апплетов, который был бы удобен для веб-дизайнеров и программистов,
                не обладающих высокой квалификацией
              </Text>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={6} caps lineHeight={1} textColor="secondary" margin={50}>
            история
          </Heading>

          <Text textAlign="left">
            <p>
              <b>1995</b> - релиз JavaScript от Netscape 🧭
            </p>
          </Text>

          <Text textAlign="left">
            <p>
              <b>1996</b> - JScript от Microsoft 💛 Internet Explorer 3.0
            </p>
          </Text>

          <Text textAlign="left">
            <p>
              <b>1997</b> - JavaScript стандартизует ECMA. ECMAScript 1.1 спецификация
            </p>
          </Text>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Text textAlign="left">
            <p>
              <b>1998</b> - ECMAScript 2 без изменений 🤷‍♂️
            </p>
          </Text>

          <Text textAlign="left">
            <p>
              <b>1999</b> - ECMAScript 3:
            </p>
            <ul>
              <li>RegExp</li>
              <li>Исключения, try/catch</li>
              <li>Новые функции массивов и строк</li>
              <li>...</li>
            </ul>
          </Text>

          <Text textAlign="left">
            <p>
              <b>2000</b> - выход Netscape Navigator 6 с поддержкой ECMAScript 3
            </p>
          </Text>
          <Text textAlign="left">
            <p>
              рождение <b>XMLHttpRequest</b>
            </p>
          </Text>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Text textAlign="left">
            <p>
              <b>1999 - 2008</b> - разработка стандарта ECMAScript 4
            </p>
          </Text>
          <Text textAlign="left" textSize="38">
            <ul>
              <li>классы, интерфейсы, пространства имён</li>
              <li>аннотации типов, статическая проверка, структурные типы</li>
              <li>итераторы, генераторы, интроспекция</li>
            </ul>
          </Text>

          <Text textAlign="left">
            <p>
              <b>2008</b> - Дуглас Крокфорд и "раскол" комитета
            </p>
          </Text>
          <Text textAlign="left" textSize="38">
            <ul>
              <li>
                <b>ECMAScript 3.1</b>– только практичные улучшения
              </li>
              <li>
                отказ от <b>ECMAScript 4.0</b> 🚮
              </li>
              <li>путь к Гармонии</li>
            </ul>
          </Text>

          <Text textAlign="left" textSize="28">
            Adobe разрабатывает ActionScript, основанный на ранней версии ECMAScript 4
          </Text>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Text textAlign="left">
            <p>
              <b>2009</b> - завершён и одобрен всеми участниками комитета ECMAScript 3.1
            </p>
          </Text>
          <Text textAlign="left">
            <p>
              <b>2009</b> - ECMAScript 3.1 переименован в ECMAScript 5 🥳
            </p>
          </Text>
          <Text textAlign="left" textSize="32">
            <ul>
              <li>геттеры/сеттеры; JSON; strict-режим</li>
              <li>новые методы объектов, массивов, Date, строк</li>
              <li>undefined, NaN, Infinity - неизменяемые глобальные объекты</li>
            </ul>
          </Text>

          <S type="bold" textAlign="left" textColor="secondary" textSize="28">
            * Firefox 4 (2011), Chrome 19 (2012), Internet Explorer 10 (2012), Opera 12.10 (2012) и
            Safari 6 (2012)
          </S>

          <Text textAlign="left">
            <p>
              <b>2011</b> - обновление ECMAScript 5.1
            </p>
          </Text>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={6} caps lineHeight={1} textColor="secondary" margin={50}>
            новейшая история
          </Heading>
          <Text textAlign="left">
            <p>
              <b>2015</b> - ECMAScript 6 (2015) и ТС-39
            </p>
          </Text>
          <Text textAlign="left">
            <ul>
              <li>от Гармонии в ооочень большой релиз (~6&nbsp;лет)</li>
              <li>появление и развитие транспайлеров (Babel, Traceur)</li>
              <li>регулярные встречи ТС-39</li>
              <li>переход на ежегодный релизный цикл</li>
            </ul>
          </Text>

          <Text textAlign="left">
            ECMAScript <b>2016</b>, <b>2017</b>, <b>2018</b>, <b>2019</b>...
          </Text>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={5} lineHeight={1} textColor="secondary" margin={50}>
            The TC39 Process
          </Heading>
          <Heading size={6} lineHeight={1} textColor="secondary" margin={50}>
            <Link href="https://tc39.github.io/process-document/">tc39.github.io</Link>
          </Heading>

          <Text textAlign="left" textSize="32">
            <p>
              <b>Stage 0: Strawman</b> - "идея" в произвольной форме
            </p>

            <p>
              <b>Stage 1: Proposal</b> - "чемпион" из ТС-39, описание решаемой задачи,
              высокоуровневое API, полифил/демо
            </p>

            <p>
              <b>Stage 2: Draft</b> - формальное описание семантики и синтаксиса, требуются две
              экспериментальные реализации (Babel)
            </p>

            <p>
              <b>Stage 3: Candidate</b> - полное описание, две реализации по спецификации, ревьюверы
              (назначаются ТС-39)
            </p>

            <p>
              <b>Stage 4: Finished</b> - две имплементации, которые проходят приемочные тесты{' '}
              <Link href="https://github.com/tc39/test262">Test262</Link>. Готово к включению в
              спецификацию ECMAScript
            </p>
          </Text>
        </Slide>

        <QuestionsSlide />
      </Deck>
    );
  }
}
