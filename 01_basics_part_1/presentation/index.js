// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  CodePane,
  Deck,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Notes,
  Slide,
  Text
} from 'spectacle';

import FrontSlide from '../../common/slides/wgforge';
import QuestionsSlide from '../../common/slides/questions';
import { CODE_THEME } from '../../common/constants';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const code = {
  _getTag: require('raw-loader!../assets/getTag.js.example'),
  _isBoolean: require('raw-loader!../assets/isBoolean.js.example'),
  _isNull: require('raw-loader!../assets/isNull.js.example'),
  _isNumber: require('raw-loader!../assets/isNumber.js.example'),
  _isObject: require('raw-loader!../assets/isObject.js.example'),
  _isString: require('raw-loader!../assets/isString.js.example'),
  _isSymbol: require('raw-loader!../assets/isSymbol.js.example'),
  _isUndefined: require('raw-loader!../assets/isUndefined.js.example'),
  letVarExample: require('raw-loader!../assets/letVar.js.example'),
  bezNikto: require('raw-loader!../assets/bezNikto.js.example'),
  undefinedExample: require('raw-loader!../assets/undefinedExample.js.example')
};

const images = {
  asyncDefer: require('../assets/async-defer.svg')
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

        <Slide text>
          <Heading size={3} caps lineHeight={1} textColor="secondary">
            01 часть 1 - основы
          </Heading>
          <List>
            <ListItem>Как “запустить” свой код. Подключение скриптов в браузере.</ListItem>
            <ListItem>Переменные</ListItem>
            <ListItem>Типы данных</ListItem>
            <ListItem>Структуры данных (основы)</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={6} lineHeight={1} textColor="secondary">
            Тэг script. Основные атрибуты
          </Heading>
          <Text textAlign="left" textSize={32}>
            <div>
              <div>
                <b>async</b> - логический атрибут, указывающий браузеру нужно ли загружать скрипт
                асинхронно
              </div>
              <div>
                <b>defer</b> - Логический атрибут, указывающий браузеру, что скрипт должен
                выполняться после разбора документа, но до события DOMContentLoaded.
              </div>
              <div>
                <b>src</b> - URI (указатель ресурса) ресурс с которого подключается скрипт
              </div>
              <div>
                <b>type</b> - тип представленного скрипта. Принимает MIME тип или module значение
              </div>
            </div>
            <Text textSize={24}>
              <p>
                Атрибутов больше. Дополнительную информацию вы можете получить по приведенным
                ссылкам:
              </p>
              <ul>
                <li>
                  <Link href={'https://developer.mozilla.org/ru/docs/Web/HTML/Element/script'}>
                    script
                  </Link>
                </li>
                <li>
                  <Link href={'https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS'}>CORS</Link>
                </li>
                <li>
                  <Link
                    href={
                      'https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity'
                    }
                  >
                    Subresource_Integrity
                  </Link>
                </li>
              </ul>
            </Text>
          </Text>
          <Notes>
            <p>
              Вставка скрипта в документ осуществляется с помощью тега script Давайте разберем его
              атрибуты
            </p>
            <p>
              <b>async</b> - Обычно браузеры загружают script синхронно, (т.е. async="false") во
              время разбора документа. Динамически вставленный script (используя, например,
              document.createElement) по умолчанию загружаются браузером асинхронно, поэтому для
              включения синхронной загрузки (т.е. когда скрипты загружаются в порядке их вставки)
              укажите async="false"
            </p>
            <p>
              <b>defer</b> - Скрипты с атрибутом defer будут выполняться в том порядке, в котором
              они появились при разборе документа.
            </p>
            <p>
              <b>src</b> - тут все понятно, но есть нюансы с CORS на них мы останавливаться не
              будем,это будет работа на дом
            </p>
            <p>
              <b>type</b> - MIME тип это то что знали наши деды, не факт что вам это когда то
              пригодится. Больше всего нас интересует значение module
            </p>
          </Notes>
        </Slide>

        <Slide>
          <Heading size={6} lineHeight={1} textColor="secondary">
            Способы подключения скриптов
          </Heading>
          <Image src={images.asyncDefer} />
          <Notes>
            <p>
              Динамически вставленный script (используя, например, document.createElement) по
              умолчанию загружаются браузером асинхронно, поэтому для включения синхронной загрузки
              (т.е. когда скрипты загружаются в порядке их вставки) укажите async="false"
            </p>
          </Notes>
        </Slide>

        <Slide>
          <Heading size={6} lineHeight={1} textColor="secondary">
            Переменные
          </Heading>
          <Text textAlign="left" textSize={24}>
            <p>
              <b>
                Переменные предназначены для хранения временных данных или таких данных, которые в
                процессе работы могут менять свое значение
              </b>
            </p>
            <List>
              <ListItem>Имя может состоять из: букв, цифр, символов $ и _</ListItem>
              <ListItem>Первый символ не должен быть цифрой</ListItem>
              <ListItem>Переменные в JS зависят от регистра (case sensitivity)</ListItem>
              <ListItem>
                Для имен переменных нельзя использовать зарезервированные в языке слова
              </ListItem>
            </List>
          </Text>
          <Notes>
            <p>
              Что вытекает из определения ? То что не нужно хранить неизменяемые значения в
              переменных, для этого есть константы. Это очень важно при работе в команде и поддержке
              кода
            </p>
            <p>
              Именование переменных очень важный аспект, имя переменной должно четко выражать то что
              она хранит. Не надо называть переменные a, a2 и т.д. если только вы не реализуете
              математическую формулу
            </p>
          </Notes>
        </Slide>

        <Slide>
          <Heading size={6} lineHeight={1} textColor="secondary">
            Способы объявления переменных
          </Heading>
          <List>
            <ListItem>директива var</ListItem>
            <ListItem>директива let</ListItem>
            <ListItem>"БезНикто"</ListItem>
          </List>
          <Notes>
            <p>
              Областью видимости переменных, объявленных ключевым словом let, является блок, в
              котором они объявлены, и все его подблоки. В этом работа директива let схожа с работой
              директивы var. Основная разница заключается в том, что областью видимости переменной,
              объявленной директивой var, является вся функция, в которой она объявлена
            </p>
          </Notes>
        </Slide>

        <Slide>
          <Heading size={6} lineHeight={1} textColor="secondary">
            Пример
          </Heading>
          <CodePane
            fit
            textSize={24}
            theme={CODE_THEME}
            lang="javascript"
            source={code.letVarExample}
          />
          <Notes />
        </Slide>

        <Slide>
          <Heading size={6} lineHeight={1} textColor="secondary">
            Так тоже бывает
          </Heading>
          <CodePane theme={CODE_THEME} textSize={32} lang="javascript" source={code.bezNikto} />
          <Notes />
        </Slide>

        <Slide>
          <Heading size={6} lineHeight={1} textColor="secondary">
            Типы данных, получение типов данных
          </Heading>
          <List>
            <ListItem>Число «number»</ListItem>
            <ListItem>Строка «string»</ListItem>
            <ListItem>Булевый (логический) тип «boolean»</ListItem>
            <ListItem>Специальное значение «null»</ListItem>
            <ListItem>Специальное значение «undefined»</ListItem>
            <ListItem>Объекты «object» - они тут всеми рулят</ListItem>
            <ListItem>Оператор "typeof" для определения типа</ListItem>
          </List>
          <Notes>
            <p>Я думаю многие из вас уже знакомы с этим списком</p>
            <p>Но что такое тип данных в cs ?</p>
          </Notes>
        </Slide>

        <Slide>
          <Heading size={6} lineHeight={1} textColor="secondary">
            Определение
          </Heading>
          <Text textSize={26} textAlign="left">
            <b>Тип данных - множество значений и операций на этих значениях</b>
            <p>
              <List>
                <ListItem>
                  множество допустимых значений, которые могут принимать данные, принадлежащие к
                  этому типу
                </ListItem>
                <ListItem>
                  набор операций, которые можно осуществлять над данными, принадлежащими к этому
                  типу
                </ListItem>
              </List>
            </p>
            <p>
              Первое свойство можно рассматривать как теоретико-множественное определение понятия
              типа; второе — как процедурное (или поведенческое) определение.
            </p>
          </Text>
          <Notes>
            <p>
              Наиболее общее определение гласит Тип данных - множество значений и операций на этих
              значениях
            </p>
          </Notes>
        </Slide>

        <Slide>
          <Heading size={6} lineHeight={1} textColor="secondary">
            Другие определения типов
          </Heading>
          <Text textAlign="left" textSize={26}>
            <p>
              Так же используется <b>низкоуровневое определение</b> типа — как заданных размерных и
              структурных характеристик ячейки памяти, в которую можно поместить некое значение,
              соответствующее этим характеристикам. Такое определение является частным случаем
              теоретико-множественного. На практике, с ним связан ряд важных свойств (обусловленных
              особенностями организации памяти компьютера), требующих отдельного рассмотрения.
            </p>
            <p>
              Объектно-ориентированное программирование использует <b>процедурное определение</b>{' '}
              при описании взаимодействия компонентов программы, и теоретико-множественное — при
              описании реализации этих компонентов на ЭВМ, соответственно, рассматривая
              «класс-как-поведение» и «класс-как-объект в памяти».
            </p>
          </Text>
          <Notes>
            <p>Посмотрим на другие определения типов. Разберемся как типы реализуются в ЭВМ.</p>
          </Notes>
        </Slide>
        <Slide>
          <Heading size={6} lineHeight={1} textColor="secondary">
            Типизация
          </Heading>
          <Text textAlign="left" textSize={26}>
            <b>Операция назначения типа сущностям называется типизацией</b>
            <List>
              <ListItem>
                <b>Статическая типизация</b> - назначение и проверка типов осуществляются заранее
                (до интерпретации или компиляции)
              </ListItem>
              <ListItem>
                <b>Динамическая типизация</b> - в процессе выполнения программы (в runtime)
              </ListItem>
              <ListItem>
                <b>Сильная типизация</b> - тип назначается раз и навсегда и не может меняться
              </ListItem>
              <ListItem>
                <b>Слабая типизация</b> - тип может изменятся в процессе выполнения
              </ListItem>
            </List>
          </Text>
          <Notes>
            <p>Давайте разбираться что такое типизация какая типизация используется в JS.</p>
            <p>
              Назначение и проверка согласования типов может осуществляться заранее (статическая
              типизация) и непосредственно при использовании (динамическая типизация) или совмещать
              оба метода. Типы могут назначаться «раз и навсегда» (сильная типизация) или позволять
              себя изменять (слабая типизация). Единообразная обработка данных разных типов
              называется полиморфизмом. Понятие "типобезопасности" опирается преимущественно на
              процедурное определение типа. Например, попытка деления числа на строку будет
              отвергнута большинством языков, так как для этих типов не определено соответствующее
              поведение. Слабо типизированные языки тяготеют к низкоуровневому определению.
              Например, «число» и «запись» имеют различное поведение, но значение адреса «записи» в
              памяти ЭВМ может иметь то же низкоуровневое представление, что и «число». Слабо
              типизированные языки предоставляют возможность нарушить систему типов, назначив этому
              значению поведение «числа» посредством операции приведения типа. Подобные трюки могут
              использоваться для повышения эффективности программ, но несут в себе риск крахов, и
              поэтому в безопасных языках не допускаются, либо жёстко обособляются.
            </p>
          </Notes>
        </Slide>
        <Slide>
          <Heading size={6} lineHeight={1} textColor="secondary">
            Специальные значения (они же типы) "null" и "undefined"
          </Heading>
          <Text textSize={24}>
            <List>
              <ListItem>
                <b>undefined</b> - не присваиваем в явном виде
              </ListItem>
              <ListItem>
                <b>null</b> - присваиваем в явном виде если значение переменной неизвестно
              </ListItem>
            </List>
            <p>
              <b>
                Если переменная объявлена, но в неё ничего не записано, то её значение будет
                "undefined:"
              </b>
            </p>
            <CodePane
              theme={CODE_THEME}
              textSize={24}
              lang="javascript"
              source={code.undefinedExample}
            />
          </Text>
          <Notes />
        </Slide>
        <Slide>
          <Heading size={6} lineHeight={1} textColor="secondary">
            Проверка на null
          </Heading>
          <CodePane theme={CODE_THEME} textSize={16} lang="javascript" source={code._isNull} />
          <Notes />
        </Slide>
        <Slide>
          <Heading size={6} lineHeight={1} textColor="secondary">
            Проверка на Undefined
          </Heading>
          <CodePane theme={CODE_THEME} textSize={16} lang="javascript" source={code._isUndefined} />
          <Notes />
        </Slide>
        <Slide>
          <Heading size={6} lineHeight={1} textColor="secondary">
            Строковые значения, тип "string"
          </Heading>
          <Text textSize={16}>
            <List>
              <ListItem>Строки создаются одинарными или двойными кавычками</ListItem>
              <ListItem>Тип символ не существует, есть только строка !</ListItem>
              <ListItem>
                Строки Иммутабельны, т.е. не изменяются, операции надо строками создают новые строки
              </ListItem>
              <ListItem>
                Внутри JS-интерпретатора все строки приводятся в <b>Unicode</b>
              </ListItem>
              <ListItem>
                Строки сравниваются посимвольно, для корректного сравнения используется метод -{' '}
                <b>localeCompare</b> из стандарта ECMA-402
              </ListItem>
            </List>
            <p>
              <Link href={'https://github.com/andyearnshaw/Intl.js/'}>
                По ссылке много интересного про Intl
              </Link>
            </p>
          </Text>
          <Notes>Кстати можно использовать вместо иконок символы юникода (оптимизация)</Notes>
        </Slide>
        <Slide>
          <Heading size={6} lineHeight={1} textColor="secondary">
            Проверка на String
          </Heading>
          <CodePane theme={CODE_THEME} textSize={16} lang="javascript" source={code._isString} />
          <Notes />
        </Slide>

        <Slide>
          <Heading size={6} lineHeight={1} textColor="secondary">
            Числовые значения, тип "number"
          </Heading>
          <Text textSize={16}>
            <List>
              <ListItem>
                Целые и дробные числа имеют тип Number «double precision» формата IEEE-754
              </ListItem>
              <ListItem>
                Java, C, PHP, Ruby, Perl, Python числа реализованы в том же формате
              </ListItem>
              <ListItem>Ошибка вычислений дает NaN</ListItem>
              <ListItem>В результате деления на 0 получаем специальное значение Infinity</ListItem>
              <ListItem>
                Арифметические и математические функции преобразуют строку в число
              </ListItem>
              <ListItem>
                Функции parseInt/parseFloat делают числа из строк, которые начинаются с числа
              </ListItem>
            </List>
            <p>
              <Link href={'https://en.wikipedia.org/wiki/IEEE_754-1985'}>IEEE_754-1985</Link>
            </p>
          </Text>
          <Notes>
            <p>
              Все числа в JavaScript, как целые так и дробные, имеют тип Number и хранятся в
              64-битном формате IEEE-754, также известном как «double precision».
            </p>
          </Notes>
        </Slide>

        <Slide>
          <Heading size={6} lineHeight={1} textColor="secondary">
            Точность вычислений
          </Heading>
          <CodePane
            theme={CODE_THEME}
            textSize={32}
            lang="javascript"
            source={'0.1 + 0.2; // 0.30000000000000004'}
          />
          <Text textSize={24}>
            Чтобы нивелировать эту неточность можно к примеру использовать математические операции:
          </Text>
          <CodePane
            theme={CODE_THEME}
            textSize={16}
            lang="javascript"
            source={'(0.1 * 10 + 0.2 * 10) / 10 ); // 0.3'}
          />
          <Text textSize={24}>Выведем большое число:</Text>
          <CodePane
            theme={CODE_THEME}
            textSize={16}
            lang="javascript"
            source={'console.log( 9999999999999999 ); // выведет 10000000000000000'}
          />
          <Notes>
            <p>
              Всё дело в том, что в стандарте IEEE 754 на число выделяется ровно 8 байт(=64 бита),
              не больше и не меньше. Число 0.1 (одна десятая) записывается просто в десятичном
              формате. Но в двоичной системе счисления это бесконечная дробь, так как единица на
              десять в двоичной системе так просто не делится. Также бесконечной дробью является 0.2
              (=2/10). Двоичное значение бесконечных дробей хранится только до определенного знака,
              поэтому возникает неточность.
            </p>
            <p>
              Давайте обойдем эту неточность используя математические операции (0.1 * 10 + 0.2 * 10)
              / 10 ); // 0.3
            </p>
            <p>
              Из 64 бит, отведённых на число, сами цифры числа занимают до 52 бит, остальные 11 бит
              хранят позицию десятичной точки и один бит – знак. Так что если 52 бит не хватает на
              цифры, то при записи пропадут младшие разряды.
            </p>
          </Notes>
        </Slide>

        <Slide>
          <Heading size={6} lineHeight={1} textColor="secondary">
            Проверка на Number
          </Heading>
          <CodePane theme={CODE_THEME} textSize={16} lang="javascript" source={code._isNumber} />
          <Notes />
        </Slide>
        <Slide>
          <Heading size={6} lineHeight={1} textColor="secondary">
            Проверка на Boolean
          </Heading>
          <CodePane theme={CODE_THEME} textSize={16} lang="javascript" source={code._isBoolean} />
          <Notes />
        </Slide>
        <Slide>
          <Heading size={6} lineHeight={1} textColor="secondary">
            Object
          </Heading>
          <List>
            <ListItem>Объект это ассоциативный массив</ListItem>
            <ListItem>
              Объект важное понятие в парадигме объектно-ориентированного программирования
            </ListItem>
            <ListItem>
              Объект может содержать в себе любые значения, которые называются свойствами объекта.
            </ListItem>
            <ListItem>
              Доступ к свойствам осуществляется по имени свойства (иногда говорят «по ключу»)
            </ListItem>
          </List>
          <Notes />
        </Slide>
        <Slide>
          <Heading size={6} lineHeight={1} textColor="secondary">
            Проверка на Object
          </Heading>
          <CodePane theme={CODE_THEME} textSize={16} lang="javascript" source={code._isObject} />
          <Notes />
        </Slide>
        <Slide>
          <Heading size={6} lineHeight={1} textColor="secondary">
            Объект Date
          </Heading>
          <List>
            <ListItem>new Date(value)</ListItem>
            <ListItem>
              Целое значение, представляющее количество <b>миллисекунд</b>, прошедших с 1 января
              1970 00:00:00 по UTC (эпохи Unix).
            </ListItem>
            <ListItem>UTC - Coordinated Universal Time</ListItem>
            <ListItem>new Date().toLocaleString("en")</ListItem>
            <ListItem>
              Unix timestamp в секундах но конструктор Date работает с миллисекундами
            </ListItem>
          </List>
          <p>
            <Link
              href={
                'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date'
              }
            >
              Подробнее про Date по этой ссылке
            </Link>
          </p>
          <Notes>
            <p>
              Если никаких аргументов передано не было, конструктор создаёт объект Date для текущих
              даты и времени, согласно системным настройкам. Если передано как минимум два
              аргумента, отсутствующие аргументы устанавливаются либо в 1 (если опущен день), либо в
              0 (все остальные значения). Дата в JavaScript измеряется в миллисекундах, прошедших с
              полуночи 1 января 1970 года по UTC. День содержит 86 400 000 миллисекунд. Диапазон дат
              объекта Date варьируется от -100 000 000 до 100 000 000 дней относительно 1 января
              1970 года по UTC. Объект Date обеспечивает универсальное поведение на всех платформах.
              Значение времени может передаваться между системами для представления одинакового
              момента во времени и, если оно используется для создания локального объекта даты,
              будет отражать местный эквивалент времени. Объект Date поддерживает несколько методов
              для работы с UTC (всемирным координированным временем), наряду с методами работы с
              местным временем. UTC, также известное как среднее время по Гринвичу (GMT), ссылается
              на время, установленное Всемирным стандартом времени. Местное время — это время на
              компьютере, на котором выполняется JavaScript. Вызов объекта Date в качестве функции
              (то есть, без использования оператора new) вернёт строку, представляющую текущие дату
              и время.
            </p>
          </Notes>
        </Slide>
        <QuestionsSlide />
      </Deck>
    );
  }
}
