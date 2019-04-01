// Import React
import React from 'react';

// Import Spectacle Core tags
import { CodePane, Deck, Heading, List, ListItem, Slide } from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import FrontSlide from '../../common/slides/wgforge';
import QuestionsSlide from '../../common/slides/questions';
import { CODE_THEME } from '../../common/constants';

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

const code = {
  f_declaration: require('raw-loader!../assets/f_declaration.example'),
  f_expression: require('raw-loader!../assets/f_expression.example'),
  seaf: require('raw-loader!../assets/seaf.example'),
  seaf_isolated: require('raw-loader!../assets/seaf_isolated.example'),
  f_constructor: require('raw-loader!../assets/f_constructor.example'),
  rest_params: require('raw-loader!../assets/rest_params.example'),
  f_spread_params: require('raw-loader!../assets/f_spread_params.example'),
  context_base: require('raw-loader!../assets/context_base.example'),
  context: require('raw-loader!../assets/context.example'),
  context_strict: require('raw-loader!../assets/context_strict.example'),
  bind: require('raw-loader!../assets/bind.example'),
  bind_context: require('raw-loader!../assets/bind_context.example'),
  call: require('raw-loader!../assets/call.example'),
  apply: require('raw-loader!../assets/apply.example'),
  f_destructor_params: require('raw-loader!../assets/f_destructor_params.example'),
  closures: require('raw-loader!../assets/closures.example')
};

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
            02 Функции
          </Heading>
          <List margin="50px 150px">
            <ListItem>Function declaration</ListItem>
            <ListItem>Function expression</ListItem>
            <ListItem>Function constructor</ListItem>
            <ListItem>Named function expression</ListItem>
            <ListItem>Self-Executing Anonymous Functions</ListItem>
            <ListItem>Recursion</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Function declaration
          </Heading>
          <CodePane
            textSize={24}
            fit
            theme={CODE_THEME}
            source={code.f_declaration}
            lang="javascript"
          />
        </Slide>

        <Slide>
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Function expression
          </Heading>
          <CodePane
            textSize={24}
            fit
            theme={CODE_THEME}
            source={code.f_expression}
            lang="javascript"
          />
        </Slide>

        <Slide>
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Function constructor
          </Heading>
          <CodePane
            textSize={24}
            fit
            theme={CODE_THEME}
            source={code.f_constructor}
            lang="javascript"
          />
        </Slide>

        <Slide>
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Self-Executing Anonymous Functions
          </Heading>
          <CodePane textSize={22} fit theme={CODE_THEME} source={code.seaf} lang="javascript" />
        </Slide>

        <Slide>
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            SEAF используются для "изоляции" переменных
          </Heading>
          <CodePane
            textSize={24}
            fit
            theme={CODE_THEME}
            source={code.seaf_isolated}
            lang="javascript"
          />
        </Slide>

        <Slide>
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Контекст выполнения (execution context), оператор this, bind, call, apply
          </Heading>
          <List>
            <ListItem>
              Контекст выполнения функции - ссылка на объект в контексте которого была вызвана
              функция
            </ListItem>
            <ListItem>Оператор this возвращает ссылку на объект контекста вызова функции</ListItem>
            <ListItem>bind, call, apply - методы функции</ListItem>
            <ListItem>
              bind, call, apply - переназначают контекст выполнения функции и могут передавать
              параметры
            </ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Проверим контекст выполнения функции
          </Heading>
          <CodePane
            textSize={24}
            fit
            theme={CODE_THEME}
            source={code.context_base}
            lang="javascript"
          />
        </Slide>

        <Slide>
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Пример с контекстом
          </Heading>
          <CodePane textSize={24} fit theme={CODE_THEME} source={code.context} lang="javascript" />
        </Slide>

        <Slide>
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Пример с контекстом и "use strict"
          </Heading>
          <CodePane
            textSize={24}
            fit
            theme={CODE_THEME}
            source={code.context_strict}
            lang="javascript"
          />
        </Slide>

        <Slide>
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            bind
          </Heading>
          <CodePane textSize={24} fit theme={CODE_THEME} source={code.bind} lang="javascript" />
        </Slide>

        <Slide>
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            bind пример с потерянным контекстом и "use strict"
          </Heading>
          <CodePane
            textSize={24}
            fit
            theme={CODE_THEME}
            source={code.bind_context}
            lang="javascript"
          />
        </Slide>

        <Slide>
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            call
          </Heading>
          <CodePane textSize={24} fit theme={CODE_THEME} source={code.call} lang="javascript" />
        </Slide>

        <Slide>
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            apply
          </Heading>
          <CodePane textSize={24} fit theme={CODE_THEME} source={code.apply} lang="javascript" />
        </Slide>

        <Slide>
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Rest (оставшиеся) параметры функции
          </Heading>
          <CodePane
            textSize={20}
            fit
            theme={CODE_THEME}
            source={code.rest_params}
            lang="javascript"
          />
        </Slide>

        <Slide>
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Передача параметров функции через spreed оператор
          </Heading>
          <CodePane
            textSize={24}
            fit
            theme={CODE_THEME}
            source={code.f_spread_params}
            lang="javascript"
          />
        </Slide>

        <Slide>
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Деструктуризация в параметрах функции
          </Heading>
          <CodePane
            textSize={24}
            fit
            theme={CODE_THEME}
            source={code.f_destructor_params}
            lang="javascript"
          />
        </Slide>

        <Slide>
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Замыкания
          </Heading>
          <CodePane textSize={24} fit theme={CODE_THEME} source={code.closures} lang="javascript" />
        </Slide>

        <QuestionsSlide />
      </Deck>
    );
  }
}
