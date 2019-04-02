// Import React
import React from 'react';
import { css } from 'react-emotion';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import FrontSlide from '../../common/slides/wgforge';
import QuestionsSlide from '../../common/slides/questions';
import { CODE_THEME } from '../../common/constants';

const images = {
  opPrecedence: require('../assets/op_precedence.png')
};

const headingRotateStyle = css({
  transform: 'rotate(-2deg)'
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

const code = {
  if: require('raw-loader!../assets/if.example'),
  switchIf: require('raw-loader!../assets/switch_if.example'),
  switch: require('raw-loader!../assets/switch.example'),
  switchGroup: require('raw-loader!../assets/switch_group.example'),
  while: require('raw-loader!../assets/while.example'),
  doWhile: require('raw-loader!../assets/do_while.example'),
  for: require('raw-loader!../assets/for.example'),
  loopLabels: require('raw-loader!../assets/loop_labels.example')
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
            01 Основы - часть 2
          </Heading>
          <List margin="50px 150px">
            <ListItem>операторы</ListItem>
            <ListItem>приведение типов</ListItem>
            <ListItem>циклы</ListItem>
            <ListItem>условные конструкции</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Терминология
          </Heading>

          <Appear>
            <Heading>
              <Code margin={30} padding={20}>
                2 * 2
              </Code>
            </Heading>
          </Appear>

          <Appear>
            <Heading margin="0 0 50px">
              <Code padding={20}>операнд оператор операнд</Code>
            </Heading>
          </Appear>

          <Layout>
            <Appear>
              <Fill>
                <Heading size={5}>операторы:</Heading>
                <Heading size={6}>↝ унарные</Heading>
                <Heading size={6}>↝ бинарные</Heading>
                <Heading size={6}>↝ смешанные</Heading>
              </Fill>
            </Appear>
          </Layout>
        </Slide>

        <Slide>
          <Heading size={5} caps>
            унарные
          </Heading>

          <List>
            <ListItem>
              <Code>+(new Date())</Code>
            </ListItem>
            <ListItem>
              <Code>-y</Code>
            </ListItem>
            <ListItem>
              <Code>~10</Code>
            </ListItem>
            <ListItem>
              <Code>!true</Code>
            </ListItem>
            <ListItem>
              <Code>x++</Code>
            </ListItem>
            <ListItem>
              <Code>--y</Code>
            </ListItem>
            <ListItem>
              <Code>typeof</Code>
            </ListItem>
            <ListItem>
              <Code>delete</Code>
            </ListItem>
            <ListItem>
              <Code>void</Code>
            </ListItem>
          </List>
          <Notes>
            Унарные
            <ul>
              <li>+ (-) преобразует в Number (меняет знак)</li>
              <li>~ побитовое NOT (только Numbers)</li>
              <li>! логическое NOT</li>
              <li>delete удаляет свойство из объекта</li>
              <li>void отбрасывает возвращаемое значение</li>
              <li>typeof определяет тип переданного объекта</li>
            </ul>
          </Notes>
        </Slide>

        <Slide>
          <Heading size={5} caps>
            бинарные
          </Heading>

          <List bulletStyle="star">
            <ListItem>
              Арифметические
              <List>
                <ListItem>
                  <Code>+</Code>&nbsp;<Code>-</Code>&nbsp;<Code>*</Code>&nbsp;<Code>/</Code>&nbsp;
                  <Code>%</Code>&nbsp;<Code>**</Code>
                </ListItem>
              </List>
            </ListItem>

            <ListItem>
              Реляционные
              <List>
                <ListItem>
                  <Code>in</Code>&nbsp;<Code>instanceof</Code>
                </ListItem>
                <ListItem>
                  <Code>{'<'}</Code>&nbsp;<Code>{'>'}</Code>&nbsp;<Code>{'<='}</Code>&nbsp;
                  <Code>{'>='}</Code>
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              Операторы равенства
              <List>
                <ListItem>
                  <Code>{'='}</Code>&nbsp;<Code>{'==/!='}</Code>&nbsp;<Code>{'===/!=='}</Code>
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              Побитовые операторы
              <List>
                <ListItem>
                  <Code>{'>>'}</Code>&nbsp;<Code>{'<<'}</Code>&nbsp;<Code>{'>>>'}</Code>
                </ListItem>
                <ListItem>
                  <Code>{'&'}</Code>&nbsp;<Code>{'|'}</Code>&nbsp;<Code>{'^'}</Code>
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              Логические операторы
              <List>
                <ListItem>
                  <Code>{'&&'}</Code>&nbsp;<Code>{'||'}</Code>
                </ListItem>
              </List>
            </ListItem>
          </List>

          <Notes>
            <div>Арифметические – + ; - ; {'/'} ; * ; % ; **</div>
            <div>
              Реляционные операторы, возвращает Boolean
              <ul>
                <li>in определяет, содержит ли объект указанное свойство</li>
                <li>
                  instanceof определяет, является ли объект экземпляром потомком Prototype (или
                  экземпляром) другого объекта
                </li>
              </ul>
            </div>
            <div>побитовые работают с 32 числами</div>
          </Notes>
        </Slide>

        <Slide>
          <Heading size={5} margin="0 0 50px" caps>
            совмещённая арифметика
          </Heading>

          <Text>
            <Code>x += 10</Code>&nbsp;<small>вместо</small>&nbsp;<Code>x = x + 10</Code>
          </Text>
          <br />
          <Text>
            <Code>+=</Code>&nbsp;<Code>-=</Code>&nbsp;<Code>/=</Code>&nbsp;<Code>*=</Code>&nbsp;
            <Code>%=</Code>&nbsp;<Code>&=</Code>&nbsp;<Code>|=</Code>&nbsp;<Code>^=</Code>&nbsp;
            <Code>{'<<='}</Code>&nbsp;<Code>{'>>='}</Code>&nbsp;<Code>{'>>>='}</Code>
          </Text>

          <Appear>
            <div>
              <Heading size={5} margin="100px 0 50px" caps>
                запятая
              </Heading>

              <Text>
                <Code>let digit = 5, 6;</Code>&nbsp;<small>или</small>&nbsp;
                <Code>let digit = (5, 6);</Code>
              </Text>
            </div>
          </Appear>

          <Notes>
            запятая - можем перечислять выражения, они выполняются, возвращается результат
            последнего
            <br />
            часто можно встретить в минимизированном коде для уменьшения размера
          </Notes>
        </Slide>

        <Slide>
          <Heading size={5} margin="0 0 20px" caps>
            операторы сравнения
          </Heading>

          <Appear>
            <div>
              <Text>строки</Text>
              <List>
                <ListItem>строки сравниваются побуквенно</ListItem>
                <ListItem>
                  используется Unicode&nbsp;<Code>'а' &gt; 'Я'</Code>
                </ListItem>
              </List>
            </div>
          </Appear>

          <Appear>
            <div>
              <Text>сравнение разных типов</Text>
              <List>
                <ListItem>
                  <Code>10 > '2'; // true</Code>
                </ListItem>
                <ListItem>
                  <Code>'10' > '2'; // false ¯\_(ツ)_/¯</Code>
                </ListItem>
              </List>
            </div>
          </Appear>

          <Appear>
            <div>
              <Text>нестрогое равенство</Text>
              <List>
                <ListItem>
                  <Code>0 == false; // true</Code>
                </ListItem>
                <ListItem>
                  <Code>'' == false; // true</Code>
                </ListItem>
              </List>
            </div>
          </Appear>

          <Appear>
            <Heading size={5} margin="50px 0" caps fit>
              ️️ ⚠️используй `===/!==` во имя добра ⚠️
            </Heading>
          </Appear>

          <Notes>// TODO</Notes>
        </Slide>

        <Slide>
          <Heading size={6} margin="0 0 20px" caps>
            OMGScript!
          </Heading>

          <Appear>
            <div>
              <Text>null</Text>
              <div>
                <Code textSize={30}>null &gt; 0;</Code>&nbsp;
                <Appear>
                  <Code textSize={30}>// false</Code>
                </Appear>
              </div>
              <br />
              <Appear>
                <div>
                  <Code textSize={30}>null &lt; 0;</Code>&nbsp;
                  <Appear>
                    <Code textSize={30}>// false</Code>
                  </Appear>
                </div>
              </Appear>
              <br />
              <Appear>
                <div>
                  <Code textSize={30}>null == 0;</Code>&nbsp;
                  <Appear>
                    <Code textSize={30}>// false</Code>
                  </Appear>
                </div>
              </Appear>
              <br />
              <Appear>
                <div>
                  <Code textSize={30}>null &gt;= 0; null &lt;= 0;</Code>&nbsp;
                  <Code textSize={30}>// true 😳</Code>
                </div>
              </Appear>
            </div>
          </Appear>
          <br />
          <Appear>
            <div>
              <Text>undefined</Text>
            </div>
          </Appear>

          <Appear>
            <div>
              <Code textSize={30}>undefined &gt; 0; undefined &lt; 0; undefined == 0;// false</Code>
            </div>
          </Appear>
          <br />
          <Appear>
            <div>
              <Code textSize={30}>undefined &gt;= 0; undefined &lt;= 0; // false 🙂</Code>
            </div>
          </Appear>

          <Appear>
            <div>
              <Code textSize={30}>undefined == null; // true 😫</Code>
            </div>
          </Appear>

          <Notes>
            <p>
              Часто в сравниваемые операнды могут попадать значения null/undefined, это ситуация
              может вызвать неочевидное поведение вашего приложения.
            </p>

            <p>Выводы:</p>
            <ul>
              <li>строки сравниваются побуквенно</li>
              <li>операнды приводятся к числу, кроме строгой проверки</li>
              <li>null/undefined - только строгое сравнение</li>
              <li>undefined == null - по стандарту</li>
            </ul>
          </Notes>
        </Slide>

        <Slide>
          <Heading size={5} caps>
            <Link
              href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence"
              textColor="secondary"
              target="_blank"
            >
              приоритет операторов
            </Link>
          </Heading>

          <Appear>
            <div>
              <Image src={images.opPrecedence} width="400px" />
            </div>
          </Appear>
        </Slide>

        <Slide>
          <Heading size={5} margin="0 0 20px" caps>
            приведение типов 👻
          </Heading>

          <Heading size={6} margin="0 0 50px">
            Строковое / String() / +
          </Heading>

          <Appear>
            <div>
              <div>
                <Code>String(10) === "10"</Code>
              </div>
              <br />
              <div>
                <Code>String(null) === "null"</Code>
              </div>
              <br />
              <div>
                <Code>String(undefined) === "undefined"</Code>
              </div>
              <br />
              <div>
                <Code>String(﹛﹜) === "[object Object]"</Code>
              </div>
              <br />
              <div>
                <Code>String([]) === ""</Code>
              </div>
              <br />
              <div>
                <Code>String(['a', 'b', 'c']) === "a,b,c"]</Code>
              </div>
            </div>
          </Appear>

          <Notes>
            В строку преобразуется или явно или при сложении со строкой с помощью оператора "+"
          </Notes>
        </Slide>

        <Slide>
          <Heading size={5} margin="0 0 20px" caps>
            приведение типов
          </Heading>

          <Heading size={6} margin="0 0 50px">
            Численное / Number() / +
          </Heading>

          <Appear>
            <div>
              <div>
                <Code>Number("42") === 42</Code>
              </div>
              <br />
              <div>
                <Code>Number("20.19") === 20.19</Code>
              </div>
              <br />
              <div>
                <Code>Number("20,19") === NaN</Code>
              </div>
              <br />
              <div>
                <Code>Number(null) === 0</Code>
              </div>
              <br />
              <div>
                <Code>Number(undefined) === NaN</Code>
              </div>
              <br />
              <div>
                <Code>Number("42billion") === NaN</Code>
              </div>
              <br />
              <div>
                <Code>Number(true) === 1</Code>
              </div>
              <br />
              <div>
                <Code>Number(false) === 0</Code>
              </div>
            </div>
          </Appear>
        </Slide>

        <Slide>
          <Heading size={5} margin="0 0 20px" caps>
            приведение типов
          </Heading>

          <Heading size={6} margin="0 0 50px">
            логическое / Boolean() / !!
          </Heading>

          <Appear>
            <div>
              <div>
                <Code>Boolean(0 || NaN) === false</Code>
              </div>
              <br />
              <div>
                <Code>Boolean(Number) === true</Code>
              </div>
              <br />
              <div>
                <Code>Boolean("") === false</Code>
              </div>
              <br />
              <div>
                <Code>Boolean("0") === true</Code>
              </div>
              <br />
              <div>
                <Code>Boolean(String) === true</Code>
              </div>
              <br />
              <div>
                <Code>Boolean(Object) === true</Code>
              </div>
              <br />
              <div>
                <Code>Boolean(null) === false</Code>
              </div>
              <br />
              <div>
                <Code>Boolean(undefined) === false</Code>
              </div>
            </div>
          </Appear>
        </Slide>

        <Slide>
          <Heading className={headingRotateStyle} textColor="red" size={1} caps>
            БЛИЦ!!!
          </Heading>

          <br />
          <Appear>
            <Heading margin="50px 0" fit>
              <Code textFont="Monospace">&gt; 'b' + 'a' + + 'g' + 'a';</Code>
            </Heading>
          </Appear>

          <Appear>
            <Heading fit>
              <Code textFont="Monospace">"baNaNa"</Code>
            </Heading>
          </Appear>

          <Appear>
            <Heading margin="50px 0">🍌😱🍌</Heading>
          </Appear>
        </Slide>

        <Slide>
          <Heading size={5} margin="0 0 20px" caps>
            условные операторы
          </Heading>

          <Heading size={6} margin="0 0 50px">
            if / ?
          </Heading>

          <Appear>
            <div>
              <div>
                <Text>
                  if (условие) {'{ ... }'} else {'{ ... }'}
                </Text>
              </div>
              <br />
              <Text>
                <b>условие</b> – Boolean или выражение
              </Text>
              <Text>
                <b>выражение</b> - неявное преобразование типа возвращаемого значения
              </Text>
            </div>
          </Appear>

          <Appear>
            <div>
              <Heading margin="50px 0 20px" size={6}>
                тернарный оператор
              </Heading>
              <Code>(условие) ? значение_для_true : значение_для_false </Code>
            </div>
          </Appear>

          <Notes>
            <Text>в условии тернарного оператора скобки не обязательны</Text>
            <Text>можно вкладывать один оператор в другой</Text>
            <Text>ухудшает читаемость кода</Text>
            <Text>при подсчёте покрытия будет выделена вся строка (в большинстве случаев)</Text>
          </Notes>
        </Slide>

        <Slide>
          <CodePane textSize={24} fit theme={CODE_THEME} source={code.if} lang="javascript" />
        </Slide>

        <Slide>
          <Heading size={5} caps>
            switch
          </Heading>

          <Appear>
            <div>
              <Text>Замена множественных if-ов</Text>
              <br />
              <Layout>
                <Fill>
                  <CodePane
                    textSize={22}
                    theme={CODE_THEME}
                    source={code.switchIf}
                    lang="javascript"
                  />
                </Fill>

                <Fill>
                  <CodePane
                    textSize={22}
                    theme={CODE_THEME}
                    source={code.switch}
                    lang="javascript"
                  />
                </Fill>
              </Layout>
              <Text>
                <strong>break</strong>- опциональный
              </Text>
            </div>
          </Appear>
        </Slide>

        <Slide>
          <Heading margin="-50px 0 20px" size={5} caps>
            switch с группировкой
          </Heading>

          <Appear>
            <div>
              <CodePane
                textSize={20}
                theme={CODE_THEME}
                source={code.switchGroup}
                lang="javascript"
              />
            </div>
          </Appear>
        </Slide>

        <Slide>
          <Heading margin="-50px 0 20px" size={6} caps>
            циклы while <small>с предусловием</small>
          </Heading>

          <CodePane textSize={22} theme={CODE_THEME} source={code.while} lang="javascript" />
        </Slide>

        <Slide>
          <Heading margin="-50px 0 20px" size={6} caps>
            циклы while <small>с постусловием</small>
          </Heading>

          <CodePane textSize={20} theme={CODE_THEME} source={code.doWhile} lang="javascript" />
        </Slide>

        <Slide>
          <Heading textAlign="right" margin="-50px 0 20px" size={6} caps>
            циклы for
            <small style={{ color: '#ccc' }}>
              без <b>for..in</b> и <b>for..of</b>
            </small>
          </Heading>

          <CodePane textSize={22} theme={CODE_THEME} source={code.for} lang="javascript" />
          <Appear>
            <div>
              <Link
                textColor="secondary"
                href="https://codeburst.io/javascript-the-label-statement-a391cef4c556"
                target="_blank"
              >
                метки для break/continue 👆🏻
              </Link>
              <CodePane
                textSize={20}
                theme={CODE_THEME}
                source={code.loopLabels}
                lang="javascript"
              />
            </div>
          </Appear>
        </Slide>

        <QuestionsSlide />
      </Deck>
    );
  }
}
