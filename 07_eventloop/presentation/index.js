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
  S,
  Slide,
  Text,
  CodePane
} from 'spectacle';

import CodeSlide from 'spectacle-code-slide';
import SleepySpinny from '../assets/spinner';
import FakeAjax from '../assets/fake-ajax';
import Timeouter from '../assets/set-timeout';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import FrontSlide from '../../common/slides/wgforge';

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

const colors = {
  primary: '#fff',
  secondary: '#000',
  tertiary: '#03A9FC',
  quaternary: '#CECECE',
  jsYellow: '#f3df49',
  jsSlave: '#7a7a7a'
};
const theme = createTheme(colors, {
  primary: 'Arial',
  secondary: 'Helvetica'
});
console.log(theme);

const shadowStyle = style => {
  const shaddow = {
    dark: '4px -2px 0 #333',
    light: '-1px 1px 0 #666'
  };

  return {
    textShadow: shaddow[style]
  };
};

const code = {
  calc: require('raw-loader!../assets/callstack_calc.example'),
  blocking: require('raw-loader!../assets/callstack_blocking.example'),
  blockingDemo: require('raw-loader!../assets/callstack_blocking_demo.example'),
  blockingAjax: require('raw-loader!../assets/callstack_blocking_ajax.example'),

  callstack: require('raw-loader!../assets/callstack.example'),
  callstackError: require('raw-loader!../assets/callstack_error.example'),
  callstackLoop: require('raw-loader!../assets/callstack_loop.example'),

  setTimeout: require('raw-loader!../assets/set_timeout.example'),
  ajax: require('raw-loader!../assets/ajax.example')
};

const images = {
  eventLoop: require('../assets/event_loop.svg'),

  hourglass: require('../assets/hourglass.gif'),
  browser: require('../assets/browser.png'),

  engine: {
    callstack: require('../assets/callstack.png'),
    heap: require('../assets/heap.png')
  },

  callstack: {
    error: require('../assets/callstack_error.png'),
    loop: require('../assets/callstack_loop.png')
  },

  calc: {
    empty: require('../assets/callstack_empty.png')
  },

  fun: {
    crying: require('../assets/but_where.png'),
    wut: require('../assets/wut.gif')
  }
};

export default class Presentation extends React.Component {
  render() {
    const ajaxLoader = (
      <div>
        XHR
        <img height="56px" src={images.hourglass.replace('/', '')} />
      </div>
    );

    return (
      <Deck transition={['slide']} transitionDuration={500} theme={theme}>
        <FrontSlide />
        {/* <Slide>
          <Heading>⏰ 📵 🔞 🗣 ✌️</Heading>
        </Slide> */}

        <Slide>
          <Heading
            size={1}
            fit
            textColor={colors.jsYellow}
            style={{ WebkitTextStroke: '0.25px black' }}
          >
            JavaScript
          </Heading>
          <Appear>
            <Heading size={2} caps textColor="red" className={stylish}>
              что ты такое?
            </Heading>
          </Appear>
        </Slide>

        <Slide>
          <Heading
            textAlign="left"
            size={4}
            style={{ WebkitTextStroke: '0.75px black', color: colors.jsYellow }}
          >
            JavaScript
          </Heading>
          <BlockQuote textAlign="left">
            <Quote style={{ fontSize: '3rem' }} textColor="jsSlave">
              высокоуровневый…
            </Quote>
            <Quote style={{ fontSize: '3rem' }} textColor="jsSlave">
              мультипарадигменный…
            </Quote>
            <Quote style={{ fontSize: '3rem' }} textColor="jsSlave">
              динамическая типизация…
            </Quote>
            <Quote style={{ fontSize: '3rem' }} textColor="jsSlave">
              слабая типизация…
            </Quote>
            <Quote style={{ fontSize: '3rem' }} textColor="secondary">
              интерпретируемый…
            </Quote>
            <Quote style={{ fontSize: '3rem' }} textAlign="right">
              <Cite style={{ color: colors.tertiary }}>
                <a
                  target="_blank"
                  href="https://ru.wikipedia.org/wiki/JavaScript"
                  style={{ textDecoration: 'none', color: colors.tertiary }}
                >
                  Wikipedia
                </a>
              </Cite>
            </Quote>
          </BlockQuote>
        </Slide>

        <Slide>
          <Heading size={2} fit>
            как выполняется
          </Heading>
          <Heading
            size={1}
            fit
            textColor={colors.jsYellow}
            style={{ WebkitTextStroke: '0.25px black' }}
          >
            JavaScript-код
          </Heading>
          <Heading size={2}>в браузере?</Heading>
        </Slide>

        <Slide>
          <Heading textAlign="left" size={4}>
            этапы:
          </Heading>
          <BlockQuote>
            <Quote style={{ fontSize: '3rem' }} textColor="secondary">
              html-парсер ⬇
            </Quote>
            <Quote style={{ fontSize: '3rem' }} textColor="secondary">
              загрузка js-скриптов ⬇
            </Quote>
            <Quote style={{ fontSize: '3rem' }} textColor="secondary">
              токенизация ⬇
            </Quote>
            <Quote style={{ fontSize: '3rem' }} textColor="secondary">
              парсинг/препарсинг ⬇
            </Quote>
            <Quote
              style={{ fontSize: '3rem', WebkitTextStroke: '0.75px black', color: colors.jsYellow }}
            >
              интерпретация ⬇
            </Quote>
            <Quote style={{ fontSize: '3rem' }} textColor="secondary">
              оптимизирующий компилятор ⬇⬆
            </Quote>
            <Quote style={{ fontSize: '3rem' }} textAlign="right">
              <Cite style={{ color: colors.tertiary }}>
                <a
                  target="_blank"
                  href="https://www.youtube.com/watch?v=voDhHPNMEzg"
                  style={{ textDecoration: 'none', color: colors.tertiary }}
                >
                  🎥 Chrome University 2018: Life of a Script 👀{' '}
                </a>
              </Cite>
            </Quote>
          </BlockQuote>
        </Slide>

        <Slide>
          <BlockQuote>
            <Quote textSize={60} textColor="secondary">
              До 2008-2009 гг. движок JavaScript (называемый также интерпретатор JavaScript и
              реализация JavaScript) реализовывался как интерпретатор, считывающий и исполняющий
              исходный код на JavaScript.
            </Quote>
            <Quote style={{ fontSize: '3rem' }} textAlign="right">
              <Cite style={{ color: colors.tertiary }}>
                <a
                  target="_blank"
                  href="https://ru.wikipedia.org/wiki/Движок_JavaScript"
                  style={{ textDecoration: 'none', color: colors.tertiary }}
                >
                  Wikipedia
                </a>
              </Cite>
            </Quote>
          </BlockQuote>

          <Notes>
            Движок JavaScript — специализированная программа, обрабатывающая JavaScript, в
            частности, в браузерах.
            <br />
            SpiderMonkey - первый движок JavaScript был создан Брэндоном Эйком в Netscape
            Communications для браузера Netscape Navigator на языке программирования Си.
          </Notes>
        </Slide>

        <Slide>
          <Heading size={2}>
            JavaScript движок
            <Text
              italic
              bold
              fit
              textColor={colors.jsYellow}
              style={{ WebkitTextStroke: '0.25px black' }}
            >
              однопоточный
            </Text>
          </Heading>
          <Text bold fit>
            с единым стеком вызовов
          </Text>
          <Text bold fit textColor="jsSlave">
            в определенный момент времени выполняет
          </Text>
          <Text bold fit>
            только{' '}
            <span style={{ color: colors.jsYellow, WebkitTextStroke: '0.25px black' }}>
              какую-то одну задачу
            </span>
          </Text>
        </Slide>

        <CodeSlide
          lang="js"
          code={code.callstack}
          ranges={[
            { loc: [0, 15], title: 'интерпретатор' },
            { loc: [0, 4], note: 'define function "getTheAnswer"' },
            { loc: [5, 11], note: 'define function askBro' },
            { loc: [11, 12], note: 'call function askBro' },
            { loc: [6, 7], note: 'enter function, skip on comment' },
            { loc: [7, 8], note: 'skip on another comment' },
            { loc: [8, 9], note: 'call getTheAnswer' },
            { loc: [1, 2], note: 'silly comment again' },
            { loc: [2, 3], note: 'here we got some answer' },
            { loc: [8, 9], note: 'get back with return value "42"' },
            { loc: [9, 10], note: 'nothing to execute, exiting function' },
            { loc: [11, 12], note: 'function executed' },
            { loc: [12, 13], note: 'wow!', title: "That's all, Folks!" }
          ]}
        />

        <Slide
          notes="what engine consists of<br>
          the heap - for memory allocation<br>
          callstack - the sake of execution"
        >
          <Heading fit size={4} textColor="jsYellow" style={shadowStyle('light')}>
            V8, SpiderMonkey, ChakraCore
          </Heading>
          <Heading size={3} textColor="quaternary" style={shadowStyle('dark')}>
            heap + call stack
          </Heading>
          <Layout>
            <Fill>
              <Image src={images.engine.heap.replace('/', '')} height="400px" />
            </Fill>
            <Fill>
              <Image src={images.engine.callstack.replace('/', '')} height="400px" />
            </Fill>
          </Layout>
        </Slide>

        <CodeSlide
          transition={['slide']}
          lang="js"
          code={code.calc}
          ranges={[
            { loc: [0, 17], title: 'погружение в call stack' },
            { loc: [0, 17], title: 'задача: y = x + x²' },
            { loc: [0, 3], note: '↑ call stack ↑' },
            { loc: [4, 8], note: '↑ call stack ↑' },
            { loc: [8, 11], note: '↑ call stack ↑' },
            { loc: [12, 15], note: '↑ call stack ↑' },
            {
              loc: [12, 15],
              note: (
                <div>
                  [ console.log(solve(12)) ]<br />↑ call stack ↑
                </div>
              )
            },
            {
              loc: [13, 14],
              note: (
                <div>
                  [ solve(12) ]<br />[ console.log(solve(12)) ]<br />↑ call stack ↑
                </div>
              )
            },
            {
              loc: [8, 11],
              note: (
                <div>
                  [ solve(12) ]<br />[ console.log(solve(12)) ]<br />↑ call stack ↑
                </div>
              )
            },
            {
              loc: [9, 10],
              note: (
                <div>
                  [ sum(x, square(x)) ]<br />[ solve(12) ]<br />
                  [ console.log(solve(12)) ]<br />↑ call stack ↑
                </div>
              )
            },
            {
              loc: [9, 10],
              note: (
                <div>
                  [ square(x) ]<br />[ sum(x, square(x)) ]<br />
                  [ solve(12) ]<br />[ console.log(solve(12)) ]<br />↑ call stack ↑
                </div>
              )
            },
            {
              loc: [4, 8],
              note: (
                <div>
                  [ square(x) ]<br />[ sum(x, square(x)) ]<br />
                  [ solve(12) ]<br />[ console.log(solve(12)) ]<br />↑ call stack ↑
                </div>
              )
            },
            {
              loc: [5, 6],
              note: (
                <div>
                  [ x * x ]<br />[ square(x) ]<br />[ sum(x, square(x)) ]<br />
                  [ solve(12) ]<br />[ console.log(solve(12)) ]<br />↑ call stack ↑
                </div>
              )
            },
            {
              loc: [6, 7],
              note: (
                <div>
                  [ square(x) ]<br />[ sum(x, square(x)) ]<br />[ solve(12) ]<br />[
                  console.log(solve(12)) ]<br />↑ call stack ↑
                </div>
              )
            },
            {
              loc: [9, 10],
              note: (
                <div>
                  [ sum(x, square(x)) ]<br />[ solve(12) ]<br />
                  [ console.log(solve(12)) ]<br />↑ call stack ↑
                </div>
              )
            },
            {
              loc: [0, 4],
              note: (
                <div>
                  [ sum(x, square(x)) ]<br />[ solve(12) ]<br />
                  [ console.log(solve(12)) ]<br />↑ call stack ↑
                </div>
              )
            },
            {
              loc: [1, 2],
              note: (
                <div>
                  [ a + b ]<br />[ sum(x, square(x)) ]<br />
                  [ solve(12) ]<br />[ console.log(solve(12)) ]<br />↑ call stack ↑
                </div>
              )
            },
            {
              loc: [2, 3],
              note: (
                <div>
                  [ sum(x, square(x)) ]<br />[ solve(12) ]<br />
                  [ console.log(solve(12)) ]<br />↑ call stack ↑
                </div>
              )
            },
            {
              loc: [9, 10],
              note: (
                <div>
                  [ solve(12) ]<br />[ console.log(solve(12)) ]<br />↑ call stack ↑
                </div>
              )
            },
            {
              loc: [10, 11],
              note: (
                <div>
                  [ solve(12) ]<br />[ console.log(solve(12)) ]<br />↑ call stack ↑
                </div>
              )
            },
            {
              loc: [12, 15],
              note: (
                <div>
                  [ console.log(solve(12)) ]<br />↑ call stack ↑
                </div>
              )
            },
            {
              loc: [15, 16],
              note: (
                <div>
                  ✨<br />↑ call stack ↑
                </div>
              )
            },
            { loc: [15, 16] }
          ]}
        />

        <CodeSlide
          transition={['slide']}
          lang="js"
          code={code.callstackError}
          notes="what's happen when error occur<br>
            let's simulate an error thrown<br>
            error stops execution<br>"
          ranges={[
            { loc: [0, 17], title: 'Errors' },
            { loc: [0, 12], note: '↑ call stack ↑' },
            {
              loc: [12, 14],
              note: (
                <div>
                  [ bar() ]<br />↑ call stack ↑
                </div>
              )
            },
            {
              loc: [9, 11],
              note: (
                <div>
                  [ foo() ]<br />[ bar() ]<br />↑ call stack ↑
                </div>
              )
            },
            {
              loc: [5, 7],
              note: (
                <div>
                  [ oops() ]<br />[ foo() ]<br />[ bar() ]<br />↑ call stack ↑
                </div>
              )
            },
            {
              loc: [1, 3],
              note: (
                <div>
                  [ oops() ]<br />[ foo() ]<br />[ bar() ]<br />↑ call stack ↑
                </div>
              )
            },
            {
              loc: [1, 3],
              note: React.createElement('img', {
                src: images.callstack.error.replace('/', ''),
                style: { width: '100%' }
              })
            }
          ]}
        />

        <CodeSlide
          transition={['slide']}
          lang="javascript"
          notes="to understand recursion you must understand recursion<br>
            but js engine doesn't care<br>
            it will watch for your code<br>
            and prevent long execution"
          code={code.callstackLoop}
          ranges={[
            { loc: [0, 7], title: 'рекурсия' },
            { loc: [0, 4], note: '' },
            { loc: [4, 6], note: '' },
            { loc: [1, 3], note: '[ foo() ]' },
            {
              loc: [1, 3],
              note: <span dangerouslySetInnerHTML={{ __html: '[ foo() ]<br>'.repeat(2) }} />
            },
            {
              loc: [1, 3],
              note: <span dangerouslySetInnerHTML={{ __html: '[ foo() ]<br>'.repeat(3) }} />
            },
            {
              loc: [1, 3],
              note: <span dangerouslySetInnerHTML={{ __html: '[ foo() ]<br>'.repeat(7) }} />
            },
            {
              loc: [1, 3],
              note: <span dangerouslySetInnerHTML={{ __html: '[ foo() ]<br>'.repeat(11) }} />
            },
            {
              loc: [1, 3],
              note: <span dangerouslySetInnerHTML={{ __html: '[ foo() ]<br>'.repeat(21) }} />
            },
            {
              loc: [1, 3],
              note: <span dangerouslySetInnerHTML={{ __html: '[ foo() ]<br>'.repeat(37) }} />
            },
            {
              loc: [1, 3],
              note: React.createElement('img', {
                src: images.callstack.loop.replace('/', ''),
                style: { width: '100%' }
              })
            }
          ]}
        />

        <Slide notes="what does it mean from engine point?">
          <Heading
            fit
            size={2}
            textColor="jsYellow"
            style={Object.assign({ WebkitTextStroke: '0.25px black' }, shadowStyle('light'))}
          >
            …blocking…
          </Heading>
        </Slide>

        <CodeSlide
          transition={['slide']}
          lang="js"
          notes="consider we have long running function<br>
            executing this function will block call stack<br>
            as it's run code lines one after the other<br>
            it's not going to do something before heavy calculations is done"
          code={code.blocking}
          ranges={[
            { loc: [0, 14], title: 'блокировка основного потока' },
            { loc: [0, 9], note: '' },
            { loc: [9, 10], note: '[ console.log(…) ]' },
            { loc: [9, 10], note: ' ' },
            { loc: [10, 11], note: ' [ sleep(10) ] ' },
            {
              loc: [10, 11],
              note: React.createElement('img', {
                src: '//media.giphy.com/media/l3V0BVDTyuMzwpS1i/giphy.gif',
                width: 500,
                style: {
                  display: 'block',
                  margin: ' auto'
                }
              })
            },
            { loc: [11, 12], note: '[ console.log(…) ]' },
            {
              loc: [12, 14],
              note: React.createElement('span', {
                dangerouslySetInnerHTML: { __html: '&#x2728;' }
              })
            }
          ]}
        />

        <Slide
          notes="what does it mean from browser point<br>
            if we call some have computation<br>
            browser will be 'frozen'<br>
            and won't react until callstack is unblocked"
        >
          <Layout style={{ marginTop: '0px' }}>
            <Fill style={{ marginRight: '1rem' }}>
              <Heading
                style={{
                  fontSize: '60px',
                  color: colors.jsYellow,
                  WebkitTextStroke: '0.75px black'
                }}
              >
                index.html
              </Heading>
              <CodePane textSize={14} lang="html" source={code.blockingDemo} />
            </Fill>
            <Fill style={{ marginLeft: '1rem' }}>
              <Heading
                style={{
                  fontSize: '60px',
                  color: colors.jsYellow,
                  WebkitTextStroke: '0.75px black'
                }}
              >
                The Browser
              </Heading>
              <div>&nbsp;</div>
              <SleepySpinny />
            </Fill>
          </Layout>
        </Slide>

        <Slide
          notes="most slow op is a I/O<br>
          let's think of ajax when we talk about browser<br>
          networking is slow and has a bunch of stuff to do<br>
          not only bytes transfer – dns, https, redirects<br>
          then we need to decode recieved bytes<br>
          translate them in language object<br>
          so if ajax would be sync end user will have problems"
        >
          <Layout>
            <Fill style={{ marginRight: '1rem' }}>
              <Heading
                style={{
                  fontSize: '60px',
                  color: colors.jsYellow,
                  WebkitTextStroke: '0.75px black'
                }}
              >
                index.html
              </Heading>
              <CodePane textSize={16} lang="html" source={code.blockingAjax} />
            </Fill>
            <Fill style={{ marginRight: '1rem' }}>
              <Heading
                style={{
                  fontSize: '60px',
                  color: colors.jsYellow,
                  WebkitTextStroke: '0.75px black'
                }}
              >
                The Browser
              </Heading>
              <div>&nbsp;</div>
              <FakeAjax />
            </Fill>
          </Layout>
        </Slide>

        <Slide>
          <Heading
            size={4}
            fit
            textColor="jsYellow"
            style={Object.assign({ WebkitTextStroke: '0.25px black' }, shadowStyle('light'))}
          >
            …но где же вся асинхронная &#x2728; магия?!?!
          </Heading>
          <Appear fid="1">
            <Image src={images.fun.crying.replace('/', '')} width="60%" />
          </Appear>
        </Slide>

        <Slide>
          <Heading
            style={{
              WebkitTextStroke: '1px black',
              color: colors.secondary,
              fontVariant: 'small-caps'
            }}
          >
            the
          </Heading>
          <Heading
            fit
            style={{ WebkitTextStroke: '0.5px black', color: colors.jsYellow, marginTop: '-7%' }}
          >
            Browser
          </Heading>
        </Slide>

        <Slide
          notes="exept JS engine browser has plenty of stuff</br>
          WEB APIs - the web platform parts<br>
          callback queue and mysterious event loop"
          style={{ marginTop: '-5%' }}
        >
          <Heading size={4}>внутри браузера</Heading>

          <Image height="70vh" src={images.browser.replace('/', '')} />
        </Slide>

        <Slide notes="let's start on simple and check how timeout works">
          <Heading
            style={{ fontSize: '60px', color: colors.jsYellow, WebkitTextStroke: '0.75px black' }}
          >
            Как работает setTimeout?
          </Heading>

          <Layout style={{ marginTop: '5%' }}>
            <Fill style={{ marginRight: '1rem' }}>
              <Heading style={{ fontSize: '29px', color: colors.secondary }}>my-awesome.js</Heading>
              <CodePane textSize={26} lang="js" source={code.setTimeout} />
            </Fill>
            <Fill style={{ marginLeft: '1rem' }}>
              <Heading style={{ fontSize: '29px', color: colors.secondary }}>console</Heading>
              <Timeouter />
            </Fill>
          </Layout>
        </Slide>

        <CodeSlide
          transition={['slide']}
          lang="js"
          notes="to understand it we need to became JS engine again<br>
            assume black bar in bottom represent our callstack"
          code={code.setTimeout}
          ranges={[
            { loc: [0, 9], title: 'setTimeout', note: '' },
            { loc: [0, 1], note: '  ' },
            { loc: [0, 1], note: '[ console.log("Hello") ]' },
            {
              loc: [0, 1],
              note: React.createElement('span', {
                dangerouslySetInnerHTML: { __html: '&nbsp;' }
              })
            },
            { loc: [2, 8], note: '[ setTimeout(...) ]' },
            { loc: [2, 8], note: '  ' },
            { loc: [9, 10], note: '[ console.log("people!") ]' },
            { loc: [10, 11], note: ' EOF ' },
            { loc: [3, 6], note: '[ anonymous function ]' },
            {
              loc: [4, 5],
              note: (
                <div>
                  [ console.log("WGForge") ]<br />[ anonymous function ]
                </div>
              )
            },
            { loc: [3, 6], note: '[ anonymous function ]' },
            { loc: [3, 6], note: '  ' },
            {
              loc: [10, 11],
              note: React.createElement(
                'a',
                {
                  target: '_blank',
                  href:
                    'http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coIkhlbGxvIik7CgpzZXRUaW1lb3V0KAogICAgZnVuY3Rpb24gKCkgewogICAgICAgIGNvbnNvbGUubG9nKCJXR0ZvcmdlIik7CiAgICB9LCAKICAgIDMwMDAKKTsKCmNvbnNvbGUubG9nKCJwZW9wbGUhIik7Cg%3D%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D',
                  style: {
                    color: 'yellow'
                  }
                },
                'demo'
              )
            }
          ]}
        />

        <CodeSlide
          transition={['slide']}
          lang="js"
          notes="oh well! what about ajax?<br>
            spinning hourglasses means that web api executes some call"
          code={code.ajax}
          ranges={[
            { loc: [0, 10], title: 'AJAX' },
            { loc: [0, 1], note: '   ' },
            { loc: [0, 1], note: '[ console.log(...) ]' },
            { loc: [0, 1], note: '   ' },
            { loc: [2, 8], note: '[ $.getJSON(...) ]' },
            {
              loc: [2, 8],
              note: '   ',
              title: ajaxLoader
            },
            { loc: [9, 10], note: '   ', title: ajaxLoader },
            { loc: [9, 10], note: '[ console.log(...) ]', title: ajaxLoader },
            { loc: [9, 10], note: '   ', title: ajaxLoader },
            { loc: [10, 11], note: '   ', title: ajaxLoader },
            { loc: [10, 11], note: '   ', title: 'XHR done' },
            { loc: [4, 7], note: '[ anonymous function  ]' },
            {
              loc: [5, 6],
              note: (
                <div>
                  [ console.log(data) ]<br />[ anonymous function ]
                </div>
              )
            },
            { loc: [4, 7], note: '[ anonymous function  ]' },
            { loc: [10, 11], note: ' 🔥 ' }
          ]}
        />

        <Slide>
          <Image
            style={{ marginTop: '-10%' }}
            height="70vh"
            src={images.browser.replace('/', '')}
          />
        </Slide>

        <Slide>
          <Heading
            size={6}
            style={{
              WebkitTextStroke: '1px black',
              color: colors.secondary,
              fontVariant: 'small-caps'
            }}
          >
            the
          </Heading>
          <Heading
            fit
            style={{ marginTop: '-20px', color: colors.jsYellow, WebkitTextStroke: '0.25px black' }}
          >
            Event Loop
          </Heading>
          <Appear fid="1">
            <Link
              textColor="secondary"
              href="http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coIkhpISIpOwoKJC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIGNvbnNvbGUubG9nKCdZb3UgY2xpY2tlZCB0aGUgYnV0dG9uIScpOyAgICAKfSk7CgpzZXRUaW1lb3V0KGZ1bmN0aW9uIHRpbWVvdXQoKSB7CiAgICBjb25zb2xlLmxvZygiQ2xpY2sgdGhlIGJ1dHRvbiEiKTsKfSwgNTAwMCk7Cgpjb25zb2xlLmxvZygiV2VsY29tZSB0byBsb3VwZS4iKTs%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D"
            >
              demo time!
            </Link>
          </Appear>
        </Slide>

        <Slide>
          <Heading size={4}>подведем итог</Heading>
          <List>
            <Appear>
              <ListItem>JavaScript однопоточный</ListItem>
            </Appear>
            <Appear>
              <ListItem>"тяжелые" операции приводят к блокировке</ListItem>
            </Appear>
            <Appear>
              <ListItem>блокировка основного потока приводят к "подвисанию"</ListItem>
            </Appear>
            <Appear>
              <ListItem>асинхронные API - часть браузера, а не движка</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide>
          <Heading size={5}>что почитать? что посмотреть?</Heading>

          <div style={{ textAlign: 'left', lineHeight: '3rem' }}>
            <Link
              textColor="black"
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop"
            >
              📖 MDN - Concurrency model and Event Loop
            </Link>
            <br />
            <Link
              textColor="black"
              target="_blank"
              href="http://altitudelabs.com/blog/what-is-the-javascript-event-loop/"
            >
              📖 What is the JavaScript Event Loop?
            </Link>
            <br />
            <Link
              textColor="black"
              target="_blank"
              href="http://blog.carbonfive.com/2013/10/27/the-javascript-event-loop-explained/"
            >
              📖 The JavaScript Event Loop: Explained
            </Link>
            <br />

            <Link
              textColor="black"
              target="_blank"
              href="https://nolanlawson.com/2015/09/29/indexeddb-websql-localstorage-what-blocks-the-dom/"
            >
              📖 IndexedDB, WebSQL, LocalStorage – what blocks the DOM?
            </Link>
            <br />

            <Link
              textColor="black"
              target="_blank"
              href="https://www.youtube.com/watch?v=8aGhZQkoFbQ"
            >
              🎥 Philip Roberts: What the heck is the event loop anyway? | JSConf EU 2014
            </Link>
            <br />

            <Link
              textColor="black"
              target="_blank"
              href="https://www.youtube.com/watch?v=voDhHPNMEzg"
            >
              🎥 Chrome University 2018: Life of a Script 👀
            </Link>
            <br />

            <Link
              textColor="black"
              target="_blank"
              href="https://www.youtube.com/watch?v=7Rrv9qFMWNM"
            >
              🎥 The main thread is overworked & underpaid (Chrome Dev Summit 2019)
            </Link>
          </div>
        </Slide>

        <Slide>
          <Heading fit margin={20} size={5} className={stylish}>
            // вопросы?<span className={lineStyle}>&nbsp;</span>
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
