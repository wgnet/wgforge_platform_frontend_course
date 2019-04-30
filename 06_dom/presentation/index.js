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

let insertAdjacent = `
// <!-- beforebegin -->
// <p id="message">
//   <!-- afterbegin -->
//     foo
//   <!-- beforeend -->
// </p>
// <!-- afterend -->

const msg = document.getElementById('message');
msg.insertAdjacentHTML('beforeend', '<div>⚠️</div>');

// <p id="message">
//     foo
//     <div>⚠️</div>
// </p>
`.trim();

const documentFragment = `
let fragment = document.createDocumentFragment();
for (...) {
  const li = document.createElement('li');
  li.innerHtml = '...';
  fragment.appendChild(li);
}

const ul = document.getElementById('menu');
ul.appendChild(fragment);
`.trim();

const event = `
const pwdField = document.getElementById('password');
const event = new Event('focus');
pwdField.dispatchEvent(event);
`.trim();

const code = {
  insertAdjacent,
  documentFragment,
  event
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
            04 DOM
          </Heading>
        </Slide>

        <Slide>
          <Heading size={2} caps>
            поиск элементов
          </Heading>
          <br />
          <Text>getElementById / window.id</Text>
          <br />
          <Text>getElementsByTagName</Text>
          <br />
          <Text>getElementsByName</Text>
          <br />
          <Text>getElementsByClassName</Text>
          <br />
          <hr />
          <Text>querySelector</Text>
          <br />
          <Text>querySelectorAll</Text>
        </Slide>

        <Slide>
          <Heading size={6} caps>
            создание элементов
          </Heading>
          <br />
          <Text>document.createElement(tag)</Text>
          <Text>document.createTextElement(content)</Text>
          <br />
          <Heading size={6} caps>
            добавление элементов
          </Heading>
          <br />
          <Text>parent.appendChild(element)</Text>
          <Text>parent.insertBefore(element, targetElement)</Text>
          <br />
          <Heading size={6} caps>
            удаление элементов
          </Heading>
          <br />
          <Text>element.remove()</Text>
          <Text>parent.removeChild(element)</Text>
          <Text>parent.replaceChild(newElement, element)</Text>
        </Slide>

        <Slide>
          <Heading size={6} caps>
            множественное добавление
          </Heading>
          <br />
          <Text fit>element.innerHTML = "{'<li>1</li><li>2</li><li>3</li>'}"</Text>
          <br />
          <Text>element.insertAdjacentElement()</Text>
          <Text>element.insertAdjacentHTML()</Text>
          <Text>element.insertAdjacentText()</Text>
          <br />
          <Text>DocumentFragment</Text>
        </Slide>

        <Slide>
          <Heading size={6}>insertAdjacent*</Heading>
          <br />
          <CodePane
            fit
            textSize={30}
            theme={CODE_THEME}
            lang="javascript"
            source={code.insertAdjacent}
          />
        </Slide>

        <Slide>
          <Heading size={6}>DocumentFragment</Heading>
          <br />
          <CodePane
            fit
            textSize={30}
            theme={CODE_THEME}
            lang="javascript"
            source={code.documentFragment}
          />
        </Slide>

        <Slide>
          <Heading size={6}>
            <Link href="https://caniuse.com/#feat=dom-manip-convenience" textColor="secondary">
              jQuery-like методы
            </Link>{' '}
            // !IE 🙄
          </Heading>
          <br />
          <Text>element.append(...elems)</Text>
          <Text>element.prepend(...elems)</Text>
          <Text>element.after(...elems)</Text>
          <Text>element.before(...elems)</Text>
          <Text>element.replaceWith(...elems)</Text>
        </Slide>

        <Slide>
          <Heading size={5}>события</Heading>
          <br />
          <Text fit>addEventListener(type, cb) / removeEventListener(cb)</Text>
          <br />
          <Appear>
            <div>
              <CodePane
                fit
                textSize={30}
                theme={CODE_THEME}
                lang="javascript"
                source={code.event}
              />
              <br />
            </div>
          </Appear>
          <Appear>
            <Text fit>
              abort, abort, abort, afterprint, animationend, animationiteration, animationstart,
              audioprocess, beforeprint, beforeunload, beginEvent, blocked, blur, cached, canplay,
              canplaythrough, change, chargingchange, chargingtimechange, checking, click, close,
              compassneedscalibration, complete, complete, compositionend, compositionstart,
              compositionupdate, contextmenu, copy, cut, dblclick, devicelight, devicemotion,
              deviceorientation, deviceproximity, dischargingtimechange, DOMActivate ,
              DOMAttributeNameChanged , DOMAttrModified , DOMCharacterDataModified ,
              DOMContentLoaded, DOMElementNameChanged , DOMFocusIn , DOMFocusOut , DOMNodeInserted ,
              DOMNodeInsertedIntoDocument , DOMNodeRemoved , DOMNodeRemovedFromDocument ,
              DOMSubtreeModified , downloading, drag, dragend, dragenter, dragleave, dragover,
              dragstart, drop, durationchange, emptied, ended, ended, endEvent, error, error, error,
              error, error, error, focus, focusin, focusout, fullscreenchange, fullscreenerror,
              gamepadconnected, gamepaddisconnected, hashchange, input, invalid, keydown, keypress,
              keyup, levelchange, load, load, loadeddata, loadedmetadata, loadend, loadstart,
              message, message, message, message, mousedown, mouseenter, mouseleave, mousemove,
              mouseout, mouseover, mouseup, noupdate, obsolete, offline, online, open, open,
              orientationchange, pagehide, pageshow, paste, pause, pointerlockchange,
              pointerlockerror, play, playing, popstate, progress, progress, ratechange,
              readystatechange, repeatEvent, reset, resize, scroll, seeked, seeking, select, show,
              stalled, storage, submit, success, suspend, SVGAbort, SVGError, SVGLoad, SVGResize,
              SVGScroll, SVGUnload, SVGZoom, timeout, timeupdate, touchcancel, touchend, touchenter,
              touchleave, touchmove, touchstart, transitionend, unload, updateready, upgradeneeded,
              userproximity, versionchange, visibilitychange, volumechange, waiting, wheel
            </Text>
          </Appear>
        </Slide>

        <Slide>
          <Heading size={6}>
            <Link
              href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events"
              textColor="secondary"
            >
              событийная модель браузера
            </Link>
          </Heading>
          <br />
          <Image
            width="100%"
            src="https://mdn.mozillademos.org/files/14075/bubbling-capturing.png"
          />
        </Slide>
        <Slide>
          <Heading size={6}>let event = new Event("click");</Heading>
          <br />
          <Text>event.type</Text>
          <br />
          <Text>event.currentTarget</Text>
          <br />
          <Text>event.target</Text>
          <br />
          <Text>event.preventDefault()</Text>
          <br />
          <Text>event.stopPropagation()</Text>
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
