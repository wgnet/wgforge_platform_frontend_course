// Import React
import React from 'react';
import { css } from 'react-emotion';

// Import Spectacle Core tags
import {
  Appear,
  Deck,
  Code,
  CodePane,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Notes,
  Slide
} from 'spectacle';

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

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
    codeBg: '#2d2d2d',
    jsYellow: '#f3df49'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

const code = {
  callback: {
    func: require('raw-loader!../assets/callback_func.example'),
    chain: require('raw-loader!../assets/callback.example'),
    named: require('raw-loader!../assets/callback_named.example'),
    nesting: require('raw-loader!../assets/callback_nesting.example'),
    retrn: require('raw-loader!../assets/callback_return.example')
  },
  promise: {
    api: require('raw-loader!../assets/promise.example'),
    resolve: require('raw-loader!../assets/promise_resolve.example'),
    reject: require('raw-loader!../assets/promise_reject.example'),
    throw: require('raw-loader!../assets/promise_throw.example'),
    nested: require('raw-loader!../assets/promise_nested.example'),
    chain: require('raw-loader!../assets/promise_chain.example'),
    all: require('raw-loader!../assets/promise_all.example'),
    unhandled: require('raw-loader!../assets/promise_unhandled.example'),
    unhandledFix: require('raw-loader!../assets/promise_unhandled_fix.example')
  },
  async: {
    example: require('raw-loader!../assets/async.example'),
    explained: require('raw-loader!../assets/async_explained.example'),
    error: require('raw-loader!../assets/async_error.example')
  }
};

const images = {
  cry: require('../assets/cry.png'),
  erase: require('../assets/erase_mem.gif'),
  callback: {
    hell: require('../assets/callback_hell.gif')
  },
  promise: {
    state: require('../assets/promise.png')
  },
  async: require('../assets/async_in_da_house.jpg')
};

export default class Presentation extends React.Component {
  render() {
    const biggerFont = {
      fontSize: '2.5vh'
    };

    return (
      <Deck transition={['slide']} transitionDuration={500} theme={theme}>
        <FrontSlide />
        <Slide>
          <Heading>⏰ 📵 🔞 🗣 ✌️</Heading>
        </Slide>

        <Slide>
          <Heading size={1} fit caps textColor="secondary">
            Асинхронный
            <br />
            JavaScript
          </Heading>
        </Slide>

        <Slide bgColor="codeBg">
          <Heading textColor="jsYellow" size={2}>
            Callbacks
          </Heading>
        </Slide>

        <Slide bgColor="codeBg">
          <CodePane
            lang="js"
            theme="external"
            style={Object.assign({ paddingLeft: '15%' }, biggerFont)}
            source={code.callback.func}
          />
        </Slide>

        <Slide bgColor="codeBg">
          <CodePane theme="external" lang="js" style={biggerFont} source={code.callback.chain} />
        </Slide>

        <Slide bgColor="codeBg">
          <Heading size={2} fit textColor="primary">
            в чём проблемы?
          </Heading>
          <Appear order={4}>
            <Heading textColor="jsYellow" size={2}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});
            </Heading>
          </Appear>
          <Appear order={3}>
            <Heading textColor="jsYellow" size={2}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});
            </Heading>
          </Appear>
          <Appear order={2}>
            <Heading textColor="jsYellow" size={2}>
              &nbsp;&nbsp;});
            </Heading>
          </Appear>
          <Appear order={1}>
            <Heading textColor="jsYellow" size={2}>
              });&nbsp;&nbsp;
            </Heading>
          </Appear>
        </Slide>

        <Slide bgImage={images.callback.hell.replace('/', '')} />

        <Slide bgColor="#ddd" textColor="jsYellow">
          <Heading size={5} fit>
            Escape from Callback Hell
          </Heading>
          <br />
          <Appear>
            <Heading size={4}>именованные коллбэки</Heading>
          </Appear>
          <Appear>
            <Heading size={4}>исключить вложенность</Heading>
          </Appear>
          <Appear>
            <Heading size={4}>использовать return*</Heading>
          </Appear>
          <Appear>
            <Heading size={4}>использовать Promises</Heading>
          </Appear>
        </Slide>

        <Slide bgColor="codeBg">
          <CodePane theme="external" lang="js" style={biggerFont} source={code.callback.chain} />
          <Notes>давайте вспомним наш пример кода</Notes>
        </Slide>

        <Slide bgColor="codeBg">
          <Heading size={4} textColor="jsYellow">
            именованные коллбэки
          </Heading>
          <br />
          <CodePane
            theme="external"
            lang="js"
            style={{ fontSize: '2vh', paddingLeft: '20%' }}
            source={code.callback.named}
          />
        </Slide>

        <Slide bgColor="codeBg">
          <Heading size={4} textColor="jsYellow">
            исключить вложенность
          </Heading>
          <br />
          <CodePane
            theme="external"
            lang="js"
            style={{ fontSize: '2vh', paddingLeft: '20%' }}
            source={code.callback.nesting}
          />
        </Slide>

        <Slide bgColor="codeBg">
          <Heading size={4} textColor="jsYellow">
            использовать return
          </Heading>
          <br />
          <CodePane
            theme="external"
            lang="js"
            style={{ fontSize: '2vh', paddingLeft: '20%' }}
            source={code.callback.retrn}
          />
        </Slide>

        <Slide>
          <Heading fit size={3}>
            &nbsp;Promises&nbsp;
          </Heading>
        </Slide>

        <Slide>
          <Notes>что такое Promise?</Notes>
          <Heading size={3}>
            <Link textColor="secondary" href="https://promisesaplus.com/">
              Promises/A+
            </Link>
          </Heading>
          <List>
            <ListItem textSize="2.3rem">
              “promise” is an object or function with a “then” method
            </ListItem>
            <ListItem textSize="2.3rem">
              “then” accepts two arguments onFulfilled and onRejected, both are optional
            </ListItem>
            <ListItem textSize="2.3rem">“value” is any legal JavaScript value</ListItem>
            <ListItem textSize="2.3rem">
              A promise must be in one of three states: pending, fulfilled, or rejected
            </ListItem>
          </List>
          <Image height="235px" src={images.promise.state.replace('/', '')} />
        </Slide>

        <Slide bgColor="codeBg">
          <CodePane theme="external" lang="js" style={biggerFont} source={code.promise.api} />

          <Image height="180px" src={images.promise.state.replace('/', '')} />
          <Notes>
            <ul>
              <li>Promise - это объект или функция</li>
              <li>
                начальное состояние <b>"pending"</b>
              </li>
              <li>метод then принимает два коллбэка</li>
              <li>оба опциональны</li>
              <li>catch это алиас</li>
              <li>Когда Promise меняет состояние вызывается соответствующий коллбэк</li>
            </ul>
          </Notes>
        </Slide>

        <Slide bgColor="codeBg">
          <Heading size={4} textColor="jsYellow">
            Fulfilled promise
          </Heading>
          <br />
          <CodePane
            theme="external"
            lang="js"
            style={{ fontSize: '3vh' }}
            source={code.promise.resolve}
          />
        </Slide>

        <Slide bgColor="codeBg">
          <Heading size={4} textColor="jsYellow">
            Rejected promise
          </Heading>
          <br />
          <CodePane
            theme="external"
            lang="js"
            style={{ fontSize: '3vh' }}
            source={code.promise.reject}
          />
        </Slide>

        <Slide bgColor="codeBg">
          <Heading size={4} textColor="jsYellow">
            Throw to reject
          </Heading>
          <br />
          <CodePane
            theme="external"
            lang="js"
            style={{ fontSize: '3vh' }}
            source={code.promise.throw}
          />
          <Notes>synchronous throw considered as rejection</Notes>
        </Slide>

        <Slide bgColor="codeBg">
          <Heading size={4} fit textColor="jsYellow">
            время рефакторить наш код!
          </Heading>
          <br />
          <CodePane
            theme="external"
            lang="js"
            style={{ fontSize: '2.2vh', paddingLeft: '20%' }}
            source={code.callback.retrn}
          />
          <Notes>ещё раз вспомним наш пример и перепишем его используя Promises</Notes>
        </Slide>

        <Slide bgColor="codeBg">
          <Heading size={5} textColor="jsYellow">
            Promisify all the things
          </Heading>
          <br />
          <CodePane
            theme="external"
            lang="js"
            style={{ fontSize: '2.5vh' }}
            source={code.promise.nested}
          />
          <Notes>
            <ul>
              <li>consider all API functions also promises</li>
              <li>we create new Promise with executor - function that describe behaviour</li>
              <li>executor is expected to initiate some asynchronous work</li>
              <li>
                once that completes, call either the resolve or reject function to resolve the
                promise's final value
              </li>
              <li>or else reject it if an error occurred</li>
            </ul>
          </Notes>
        </Slide>

        <Slide bgColor="codeBg">
          <Heading size={4} textColor="jsYellow">
            Promise chaining
          </Heading>
          <br />
          <CodePane theme="external" lang="js" style={biggerFont} source={code.promise.chain} />
          <Notes>
            <ul>
              <li>instead of nesting promise into promise</li>
              <li>we can return new promise in then callback</li>
              <li>so it can be chained</li>
              <li>and allows to add .then and .catch to new promise</li>
            </ul>
          </Notes>
        </Slide>

        <Slide bgColor="codeBg">
          <Heading size={4} textColor="jsYellow">
            Promise.all
          </Heading>
          <br />
          <CodePane
            theme="external"
            lang="js"
            style={{ fontSize: '2.2vh' }}
            source={code.promise.all}
          />
          <Notes>
            <ul>
              <li>
                returns a promise that resolves when all of the promises in the argument have
                resolved
              </li>
              <li> or rejects with the reason of the first passed promise that rejects.</li>
            </ul>
          </Notes>
        </Slide>

        <Slide bgColor="codeBg">
          <Heading size={4} textColor="red" fit>
            unhandled rejections
          </Heading>
          <br />
          <CodePane theme="external" lang="js" style={biggerFont} source={code.promise.unhandled} />
          <Notes>
            <ul>
              <li>but promises is not a silver bullet</li>
              <li>it also has some cons</li>
              <li>most common is an unhandled rejections</li>
              <li>if the Promise rejected in doSomethingComplicated()</li>
              <li>there no catchers on it</li>
              <li>and promise from fetch is returned</li>
              <li>another example of silent promise</li>
              <li>that is not visible/catchable from outside of main()</li>
            </ul>
          </Notes>
        </Slide>

        <Slide bgColor="codeBg">
          <Heading size={4} textColor="jsYellow">
            исправляем!
          </Heading>
          <br />
          <CodePane
            theme="external"
            lang="js"
            style={biggerFont}
            source={code.promise.unhandledFix}
          />
          <Notes>
            <ul>
              <li> to fix</li>
              <li> return the last then</li>
              <li> return always</li>
              <li>window.addEventListener('unhandledrejection', cb)</li>
            </ul>
          </Notes>
        </Slide>

        <Slide>
          <Heading size={5}>fetch.then(...)</Heading>
          {new Array(14).fill('').map((_, key) => {
            return (
              <Heading key={key} size={5}>
                &nbsp;.then(...)
              </Heading>
            );
          })}
          <Heading size={5}>&nbsp;.then(...)</Heading>
          <Notes>.then is cool, yep? seems, you're doing something wrong</Notes>
        </Slide>

        <Slide>
          <Heading size={6}>итого</Heading>
          <br />
          <Layout fit>
            <Fill style={{ marginRight: '10%' }}>
              <Heading size={2} text>
                Callbacks
              </Heading>
              <Appear>
                <List>
                  <ListItem>тяжело поддерживать</ListItem>
                  <ListItem>тяжело отлаживать</ListItem>
                  <ListItem>нужно заботиться о качестве кода</ListItem>
                  <Appear>
                    <ListItem textColor="#ccc">
                      напоминают о поездке в Египет<sup>&#9786;</sup>
                    </ListItem>
                  </Appear>
                </List>
              </Appear>
            </Fill>
            <Fill>
              <Heading size={2}>Promises</Heading>
              <Appear>
                <List>
                  <ListItem>понятное/простое API</ListItem>
                  <ListItem>упорядоченный код&#42;</ListItem>
                  <ListItem>Promise.all</ListItem>
                  <ListItem>unhandled rejections</ListItem>
                  <ListItem>нельзя отменить&#42;</ListItem>
                </List>
              </Appear>
            </Fill>
          </Layout>
        </Slide>

        <Slide bgColor="black">
          <Heading fit textColor="#efefef" style={{ fontWeight: 'normal' }}>
            One more thing…
          </Heading>
        </Slide>

        <Slide>
          <Heading size={3} fit>
            async / await
          </Heading>
          <Appear>
            <Heading size={2}>since ES2017</Heading>
          </Appear>
        </Slide>

        <Slide>
          <Heading size={3}>
            Async/await - способ писать читабельный код в синхронном стиле с асинхронным
            неблокирующим выполнением
          </Heading>
        </Slide>

        <Slide bgColor="codeBg">
          <CodePane
            theme="external"
            lang="js"
            style={{ fontSize: '3vh' }}
            source={code.async.example}
          />
        </Slide>

        <Slide bgColor="codeBg">
          <CodePane
            theme="external"
            lang="js"
            style={{ fontSize: '3vh' }}
            source={code.async.explained}
          />
        </Slide>

        <Slide bgColor="codeBg">
          <Heading size={2} textColor="jsYellow">
            обработка ошибок
          </Heading>
          <br />
          <CodePane
            theme="external"
            lang="js"
            style={{ fontSize: '1.5rem' }}
            source={code.async.error}
          />
        </Slide>

        <Slide>
          <Heading size={5}>полезные ссылки</Heading>
          <List>
            <ListItem textSize="2vh">
              <Link textColor="secondary" href="https://promisesaplus.com/">
                Promises/A+
              </Link>
            </ListItem>
            <ListItem textSize="2vh">
              <Link textColor="secondary" href="https://learn.javascript.ru/promise">
                JavaScript.ru – Promise
              </Link>
            </ListItem>
            <ListItem textSize="2vh">
              <Link
                textColor="secondary"
                href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise"
              >
                MDN – JavaScript reference - Promise
              </Link>
            </ListItem>
            <ListItem textSize="2vh">
              <Link
                textColor="secondary"
                href="http://robotlolita.me/2015/11/15/how-do-promises-work.html"
              >
                How do Promises Work?
              </Link>
            </ListItem>
            <ListItem textSize="2vh">
              <Link
                textColor="secondary"
                href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
              >
                MDN – Web APIs – Fetch API
              </Link>
            </ListItem>
            <ListItem textSize="2vh">
              <Link textColor="secondary" href="https://www.youtube.com/watch?v=y8xPMYwQ0U8">
                Let's write code – What is Async JavaScript?
              </Link>
            </ListItem>
            <ListItem textSize="2vh">
              <Link textColor="secondary" href="https://www.youtube.com/watch?v=qN0dkXj7jc0">
                Let's write code – Mastering JavaScript Callbacks
              </Link>
            </ListItem>
            <ListItem textSize="2vh">
              <Link textColor="secondary" href="https://www.youtube.com/watch?v=g90irqWEqd8">
                Let's write code – Async JavaScript with Promises
              </Link>
            </ListItem>
            <ListItem textSize="2vh">
              <Link textColor="secondary" href="https://www.youtube.com/watch?v=lil4YCCXRYc">
                Jafar Husain: Async Programming in ES7 | JSConfUS '15&#42;
              </Link>
            </ListItem>
            <ListItem textSize="2vh">
              <Link textColor="secondary" href="https://www.youtube.com/watch?v=QtgR94Q2pt4">
                Jeremy Fairbank: The rise of async JavaScript | Fluent Conf '16&#42;
              </Link>
            </ListItem>
            <ListItem textSize="2vh">
              <Link textColor="secondary" href="https://github.com/stevekane/promise-it-wont-hurt">
                promise-it-wont-hurt – Promises Workshop for JavaScript!
              </Link>
            </ListItem>
            <ListItem textSize="2vh">
              <Link
                textColor="secondary"
                href="https://github.com/Thinkful-Ed/callbacks-promises-and-async-functions"
              >
                callbacks-promises-and-async-functions – Advanced Async Workshop
              </Link>
            </ListItem>
            <ListItem textSize="2vh">
              <Link
                textColor="secondary"
                href="http://exploringjs.com/es2016-es2017/ch_async-functions.html"
              >
                Exploring ES2016 and ES2017 @ Dr. Axel Rauschmayer
              </Link>
            </ListItem>
          </List>
        </Slide>

        <Slide bgColor="#0f0f0f">
          <Heading textColor="lime">Coding Time!</Heading>
          <br />
          <div style={{ textAlign: 'left' }}>
            <Code style={{ color: 'white', whiteSpace: 'nowrap', fontSize: '1.4rem' }}>
              $ mkdir i-know-async-kung-fu && cd $_
            </Code>
            <br />
            <Code style={{ color: 'white', whiteSpace: 'nowrap', fontSize: '1.4rem' }}>
              $ git clone https://github.com/PavloKovalov/async-js-workbook.git
            </Code>
          </div>
          <hr />
          <br />
          <Heading size={4} textColor="jsYellow">
            http://bit.do/asyncjs
          </Heading>
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
