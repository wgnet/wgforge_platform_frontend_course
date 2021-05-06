// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Notes,
  S,
  Slide,
  Text
} from 'spectacle';

import FrontSlide from '../../common/slides/wgforge';
import QuestionsSlide from '../../common/slides/questions';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const code = {
  smoosh: require('raw-loader!../assets/smoosh.js.example'),
  flat: require('raw-loader!../assets/flat.js.example')
};

const images = {
  mosaic: require('../assets/NCSAMosaic.jpg'),
  andreessen: require('../assets/mark_andreessen.jpg'),
  eich: require('../assets/brendaneich.jpg'),
  smoosh: require('../assets/smooshgate.png')
};

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
    javascript: '#f7df1e'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

// importing in such way to make sure <Notes> properly works
const slidesToImport = [
  new Promise((resolve, reject) =>
    import('../../common/slides/rules')
      .then(m => resolve(['RulesSlide', m]))
      .catch(reject)
  )
];

export default class Presentation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: {}
    };
  }

  componentDidMount() {
    Promise.all(Object.values(slidesToImport))
      .then(loadedSlides => {
        const slides = {};

        loadedSlides.forEach(([name, s]) => {
          slides[name] = s.default();
        });

        this.setState({ slides });
      })
      .catch(e => console.error(e));
  }

  render() {
    const { RulesSlide = <Slide>loading…</Slide> } = this.state.slides;

    return (
      <Deck transition={['slide']} transitionDuration={500} theme={theme}>
        <FrontSlide textColor="secondary" />

        {RulesSlide}

        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            00 Вступление
          </Heading>
          <Notes>
            <p>Давайте перенесёмся в 1995 год…</p>
            <p>
              Netscape Communicator завоёвывает популярность, обходя Mosaic - первый популярный
              веб-браузер
            </p>
            <p>
              Стоит отметить, что Netscape была основана людьми, участвовавшими в разработке Mosaic
              в начале 90-х
            </p>
            <p>
              Основатель Netscape и бывший разработчик Mosaic считал, что веб должен быть более
              динамичным
            </p>
          </Notes>
        </Slide>

        <Slide>
          <Image src={images.mosaic} />
          <Text textAlign="right" textSize="16" textColor="#aaa">
            Автор:{' '}
            <Link
              textColor="#333"
              href="//ru.wikipedia.org/wiki/%D0%9D%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D1%86%D0%B5%D0%BD%D1%82%D1%80_%D1%81%D1%83%D0%BF%D0%B5%D1%80%D0%BA%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80%D0%BD%D1%8B%D1%85_%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B9"
              title="Национальный центр суперкомпьютерных приложений"
            >
              National Center for Supercomputing Applications
            </Link>
            <br />
            (NCSA) - NCSA Image Archive (
            <Link
              textColor="#333"
              rel="nofollow"
              class="external free"
              href="http://www.ncsa.uiuc.edu/News/Images"
            >
              http://www.ncsa.uiuc.edu/News/Images
            </Link>
            )<br />
            <Link textColor="#333" href="https://ru.wikipedia.org/w/index.php?curid=1704032">
              Добросовестное использование
            </Link>
          </Text>
        </Slide>

        <Slide>
          <Layout>
            <Fill>
              <Image src={images.andreessen} />
            </Fill>
          </Layout>

          <Layout>
            <Fill>
              <Text textAlign="center">Mark Andreessen - основатель Netscape Communications</Text>
            </Fill>
          </Layout>
          <Notes>
            <div style={{ fontSize: '1.75rem' }}>
              <div>
                Мистер Андриссен верил в то что анимации, интерактивные элементы и взаимодействие с
                пользователем должны стать частью веб-страниц
              </div>
              <div>
                По его мнению вебу не хватало скриптового языка, способного взаимодействовать с DOM
                (который ещё не был стандартизирован)
              </div>
              <div>
                Новый скриптовый язык предназначался для дизайнеров, а не программистов на Java,
                который становился всё популярнее в то время
              </div>
              <div>
                Он должен был стать частью браузера и быть лёгким и понятным для обычных людей
              </div>
              <div>
                Так родилась идея создания Mocha - простого динамического скриптового языка для
                браузера
              </div>
            </div>
          </Notes>
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
                Netscape нанимает Брэндона Эйка
              </Heading>
            </Fill>
          </Layout>

          <Layout>
            <Fill>
              <Text>
                разработать «язык для склеивания» составляющих частей веб-ресурса: изображений,
                плагинов, Java-апплетов, который был бы удобен для веб-дизайнеров и программистов,
                не обладающих высокой квалификацией
              </Text>
            </Fill>
          </Layout>
          <Notes>
            <div>
              Как раз в это время Netscape нанимает Б.Эйка, который должен был разработать Mocha
            </div>
            <div>Претендентом стал язык Scheme - диалект Lisp</div>
            <div>
              В то же время Sun заканчивали работу над Java. Инженеры Netscape даже пытались сделать
              свою Java-VM встроенную в браузер, но не смогли добиться совместимости с VM от Sun. Ну
              и отлично!
            </div>
            <div>
              Задачей Эйка было разработать прототип в кротчайшие сроки. Претендентами в основу были
              Python, Tcl, Scheme
            </div>
            <div>
              Прототип был разработан и внедрён в Netscape Communicator буквально за пару недель.
              Учитывая что Sun заключали сделку с Netscape, язык должен был стать похожим на Java
            </div>
          </Notes>
        </Slide>

        <Slide>
          <Heading size={6} caps lineHeight={1} textColor="secondary" margin={50}>
            древняя история
          </Heading>

          <Text textAlign="left">
            <b>1995</b> - релиз JavaScript от Netscape 🧭
          </Text>

          <Text textAlign="left">
            <b>1996</b> - JScript от Microsoft 💛 Internet Explorer 3.0
          </Text>

          <Text textAlign="left">
            <b>1997</b> - JavaScript стандартизует ECMA. ECMAScript 1.1 спецификация
          </Text>
          <Notes>
            <p>
              Mocha была переименована в LiveScript по настоянию маркетологов. А после закрытия
              сделки с Sun - в JavaScript, чтоб стать ближе к Java. JavaScript - для выполнения
              небольших клиентских задач в браузере, тогда как Java стал полноценным ЯП
            </p>
            <p>
              Microsoft видя успех JS в Netscape решили разработать свою реализацию. Так как
              получился JScript, без Java - чтобы избежать проблем с торговой маркой
            </p>
            <p>
              Но отличия были и в реализации работы, например с некоторыми DOM-функциями, т.к. эти
              стандарты были всё еще сырые
            </p>
          </Notes>
        </Slide>

        <Slide>
          <iframe
            src="https://player.vimeo.com/video/208796657"
            width="800"
            height="600"
            frameBorder="0"
            allowFullScreen
          />
        </Slide>

        <Slide bgColor="#eee">
          <BlockQuote fit>
            <Text textSize="40" textAlign="justify">
              «Решение использовать готовый язык вместо изобретения своего никаким образом не
              зависело от меня. Установка, поступившая с самых верхов, звучала так: “Язык должен
              выглядеть как Java”. Это сразу исключило Perl, Python и Tcl вместе со Scheme. […] Я не
              горжусь, но я счастлив, что я выбрал в качестве основных ингредиентов функции первого
              класса по подобию Scheme и прототипное программирование Self. Влияние Java, особенно
              баги с датами в 2000 году и чувствительность к регистру, стало досадным
              недоразумением.»
            </Text>
            <Cite textColor="black">
              <Link href="https://brendaneich.com/2008/04/popularity/" textColor="#333">
                Brendan Eich's blog: Popularity
              </Link>
            </Cite>
          </BlockQuote>
          <Notes>
            <div>Scheme — функциональный язык программирования, диалект языка Лисп</div>
            <div>
              Self — объектно-ориентированный язык программирования основанный на концепции
              прототипов. Является диалектом Smalltalk, в языке поддерживается динамическая
              типизация, в нём реализована эффективная JIT-компиляция. Язык разрабатывался в
              1985-1995 гг. в лаборатории Xerox PARC. В 1991 году команда разработчиков языка была
              принята на работу в лабораторию Sun Microsystems[2].
            </div>
          </Notes>
        </Slide>

        <Slide>
          <Text textAlign="left">
            <b>1998</b> - ECMAScript 2 без изменений 🤷‍♂️
          </Text>

          <Text textAlign="left">
            <b>1999</b> - ECMAScript 3:
          </Text>
          <List>
            <ListItem>RegExp</ListItem>
            <ListItem>Исключения, try/catch</ListItem>
            <ListItem>Новые функции массивов и строк</ListItem>
            <ListItem>...</ListItem>
          </List>

          <Text textAlign="left">
            <b>2000</b> - выход Netscape Navigator 6 с поддержкой ECMAScript 3
          </Text>
          <Text textAlign="left">
            рождение <b>XMLHttpRequest</b>
          </Text>
        </Slide>

        <Slide>
          <Text textAlign="left">
            <b>1999 - 2008</b> - разработка стандарта ECMAScript 4
          </Text>
          <List textSize="38">
            <ListItem>классы, интерфейсы, пространства имён</ListItem>
            <ListItem>аннотации типов, статическая проверка, структурные типы</ListItem>
            <ListItem>итераторы, генераторы, интроспекция</ListItem>
          </List>

          <Text textAlign="left">
            <b>2008</b> - Дуглас Крокфорд и "раскол" комитета
          </Text>
          <List textSize="38">
            <ListItem>
              <b>ECMAScript 3.1</b>– только практичные улучшения
            </ListItem>
            <ListItem>
              отказ от <b>ECMAScript 4.0</b> 🚮
            </ListItem>
            <ListItem>путь к Гармонии</ListItem>
          </List>

          <Text textAlign="left" textSize="28">
            Adobe разрабатывает ActionScript, основанный на ранней версии ECMAScript 4
          </Text>
        </Slide>

        <Slide>
          <Text textAlign="left">
            <b>2009</b> - завершён и одобрен всеми участниками комитета ECMAScript 3.1
          </Text>
          <br />
          <Text textAlign="left">
            <b>2009</b> - ECMAScript 3.1 переименован в ECMAScript 5 🥳
          </Text>
          <List>
            <ListItem>геттеры/сеттеры; JSON; strict-режим</ListItem>
            <ListItem>новые методы объектов, массивов, Date, строк</ListItem>
            <ListItem>undefined, NaN, Infinity - неизменяемые глобальные объекты</ListItem>
          </List>

          <Text>
            <S type="bold" textAlign="left" textColor="secondary" textSize="28">
              * Firefox 4 (2011), Chrome 19 (2012), Internet Explorer 10 (2012), Opera 12.10 (2012)
              и Safari 6 (2012)
            </S>
          </Text>

          <br />
          <Text textAlign="left">
            <b>2011</b> - обновление ECMAScript 5.1
          </Text>
        </Slide>

        <Slide>
          <Heading size={6} caps lineHeight={1} textColor="secondary" margin={50}>
            новейшая история
          </Heading>
          <Text textAlign="left">
            <b>2015</b> - ECMAScript 6 (2015) и ТС-39
          </Text>
          <List>
            <ListItem textSize="95%">от Гармонии в ооочень большой релиз (~6&nbsp;лет)</ListItem>
            <ListItem textSize="95%">появление и развитие транспайлеров (Babel, Traceur)</ListItem>
            <ListItem textSize="95%">регулярные встречи ТС-39</ListItem>
            <ListItem textSize="95%">переход на ежегодный релизный цикл</ListItem>
          </List>

          <Text textAlign="left">
            ECMAScript <b>2016</b>,{' '}
            <small>
              <b>2017</b>, <b>2018</b>, <b>2019</b>, <b>2020</b>,
            </small>{' '}
            <b>2021</b>...
          </Text>
        </Slide>

        <Slide>
          <Heading size={5} textColor="secondary">
            The TC39 Process
          </Heading>
          <Text>
            <Link textColor="secondary" href="https://tc39.github.io/">
              tc39.github.io
            </Link>
          </Text>
          <br />
          <Text textAlign="left" textSize="32">
            <b>Stage 0: Strawman</b> - "идея" в произвольной форме
          </Text>
          <br />
          <Text textAlign="left" textSize="32">
            <b>Stage 1: Proposal</b> - "чемпион" из ТС-39, описание решаемой задачи, высокоуровневое
            API, полифил/демо
          </Text>
          <br />
          <Text textAlign="left" textSize="32">
            <b>Stage 2: Draft</b> - формальное описание семантики и синтаксиса, требуются две
            экспериментальные реализации (Babel)
          </Text>
          <br />
          <Text textAlign="left" textSize="32">
            <b>Stage 3: Candidate</b> - полное описание, две реализации по спецификации, ревьюверы
            (назначаются ТС-39)
          </Text>
          <br />
          <Text textAlign="left" textSize="32">
            <b>Stage 4: Finished</b> - две имплементации, которые проходят приемочные тесты{' '}
            <Link href="https://github.com/tc39/test262">Test262</Link>. Готово к включению в
            спецификацию ECMAScript
          </Text>
        </Slide>

        <Slide>
          <Heading size={5}>#SmooshGate</Heading>
          <Appear margin={50}>
            <div>
              <Heading>
                <Code>Array.prototype.flatten</Code>
              </Heading>
              <CodePane theme="light" textSize={32} lang="javascript" source={code.smoosh} />
            </div>
          </Appear>
        </Slide>

        <Slide>
          <Layout>
            <Fill>
              <Heading size={5}>
                <Link href="https://mootools.net/core/docs/1.6.0/Types/Array#Array:flatten">
                  <Code>MooTools.Types.Array.flatten</Code>
                </Link>
              </Heading>
              <Appear>
                <Heading>
                  <Code>flatten => smoosh</Code>
                </Heading>
              </Appear>
              <Appear>
                <Heading>
                  <Code>Array.prototype.smoosh </Code>🍹
                </Heading>
              </Appear>
              <Appear order={42}>
                <div>
                  <Heading size={6} margin="50px 0 20px">
                    <b>ES2019</b> 🚀
                  </Heading>

                  <Code>Array.prototype.flat</Code>
                  <br />
                  <Code>Array.prototype.flatMap</Code>
                </div>
              </Appear>
            </Fill>
            <Fill>
              <Appear>
                <Image src={images.smoosh} />
              </Appear>
            </Fill>
          </Layout>
        </Slide>

        <Slide>
          <Heading size={6}>
            <s>#SmooshGate</s>
          </Heading>
          <Heading size={5}>ES2019</Heading>
          <div>
            <Heading>
              <Code>Array.prototype.flat</Code>
            </Heading>
            <CodePane theme="light" textSize={32} lang="javascript" source={code.flat} />
          </div>
        </Slide>

        <Slide>
          <Heading textColor="secondary" fit>
            Полезные (но это не точно) предложения,
            <br /> которые ждут своего времени:
          </Heading>
          <br />
          <Heading textAlign="left" margin="50px 0 20px" size={6}>
            <Link textColor="secondary" href="https://github.com/tc39/proposal-observable">
              Тип Observable
            </Link>
          </Heading>
          <List>
            <ListItem>представлен в мае 2017</ListItem>
            <ListItem>Stage 1</ListItem>
          </List>

          <Heading textAlign="left" margin="50px 0 20px" size={6}>
            <Link textColor="secondary" href="https://github.com/tc39/proposal-pipeline-operator">
              Pipeline Operator
            </Link>
          </Heading>
          <List>
            <ListItem>представлен в марте 2015</ListItem>
            <ListItem>Stage 1</ListItem>
          </List>
          <Code>let result = "hello"</Code>
          <br />
          <Code>|> doubleSay</Code>
          <br />
          <Code>|> capitalize</Code>
          <br />
          <Code>|> exclaim;</Code>
        </Slide>

        <Slide>
          <Heading textColor="secondary" fit>
            Полезные (но это не точно) предложения,
            <br /> которые ждут своего времени:
          </Heading>
          <br />
          <Heading textAlign="left" margin="50px 0 20px" size={6}>
            <Link textColor="secondary" href="https://github.com/tc39/proposal-bind-operator">
              Синтаксис привязки контекста функций – This-bind Syntax (::)
            </Link>
          </Heading>
          <List>
            <ListItem>представлен в марте 2015</ListItem>
            <ListItem>Stage 0</ListItem>
          </List>
        </Slide>

        <QuestionsSlide />
      </Deck>
    );
  }
}
