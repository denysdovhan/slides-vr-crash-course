import React, { Component } from 'react';
import {
  Deck, Slide, Text, Heading, Image, Link, S,
  List, ListItem, BlockQuote, Quote, Cite, Appear,
  CodePane
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
import './assets/ghtheme.css';

// Import images
import ternopil from './assets/ternopil.jpg';
import githubProfile from './assets/githubProfile.png';
import intro from './assets/intro.gif';
import lambdabooks from './assets/lambdabooks.png';
import peopleSenses from './assets/people-senses.png';
import pornGif  from './assets/porn.gif';
import vrKits from './assets/vr-kits-bg.gif';
import googleCardboard from './assets/google-cardboard.png';
import miVr from './assets/mi-vr.png';
import vrHeadsetsTable from './assets/vr-headsets-table.png';
import webVR from './assets/webvr-bg.gif';
import webVRSupportChrome from './assets/webvr-support-chrome.png';
import webVRSupportFirefox from './assets/webvr-support-firefox.png';
import webVRSupportEdge from './assets/webvr-support-edge.png';
import webVRSupportChromium from './assets/webvr-support-chromium.png';
import webVRFrameworks from './assets/webvr-frameworks-bg.gif';
import aFrameScene from './assets/a-frame-scene-example.jpg';

const colors = {
  primary: "white",
  secondary: "#2c3e50",
  tertiary: "#EF2D5E",
  quarternary: "#24CAFF",
};

const fonts = {
  primary: {
    name: 'Fira Sans',
    googleFont: true,
    styles: ['300', '700']
  },
  secondary: 'Helvetica'
};

const theme = createTheme(colors, fonts)

export default class App extends Component {
  render() {
    return (
      <Deck transition={['fade']} transitionDuration={500} theme={theme} progress="bar">
        <Slide bgImage={ternopil} bgDarken={0.5}>
          <Heading textColor="white">Hello, Ternopil!</Heading>
        </Slide>

        <Slide bgColor="white">
          <Image src={githubProfile} width="100%" margin="-4rem auto 0"/>
        </Slide>

        <Slide bgColor="#EAF0CE">
          <Image src={lambdabooks} width="300px" />
          <Heading size={2} textColor="#3F334D">LambdaBooks</Heading>
          <Text textColor="#3F334D" margin="5rem 0 0">
            github.com/LambdaBooks
          </Text>
        </Slide>

        <Slide bgImage={intro} bgDarken={0.5}>
          <Heading fit caps textColor="primary">A crash-course into</Heading>
          <Heading fit caps>virtual</Heading>
          <Heading fit caps>reality</Heading>
          <Heading fit caps textColor="primary">for web-developers</Heading>
        </Slide>

        <Slide>
          <Heading size={2}>Що таке віртуальна реальність?</Heading>
        </Slide>

        <Slide bgColor="secondary">
          <BlockQuote>
            <Quote textSize="3.5rem">
              Віртуальна реальність (VR) —
              уявна реальність, створена за допомогою комп'ютерних систем, які забезпечують візуальні і звукові ефекти, що занурюють глядача в ілюзорний світ за екраном.
            </Quote>
            <Cite>Wikipedia</Cite>
          </BlockQuote>
        </Slide>

        <Slide>
          <Heading size={2}>Індустрія дала добро</Heading>
        </Slide>

        <Slide>
          <Image src={pornGif} height="90vh" margin="-15vh auto 0"/>
        </Slide>

        <Slide>
          <Heading size={2}>Як створити віртуальну реальність?</Heading>
        </Slide>

        <Slide>
          <Image src={peopleSenses} height="400px"/>
          <Heading size={2}>Обманути органи чуття</Heading>
        </Slide>

        <Slide bgImage={vrKits} bgDarken={0.75}>
          <Heading>Шоломи віртуальної реальності</Heading>
        </Slide>

        <Slide>
          <Heading size={2}>Що є на ринку?</Heading>
        </Slide>

        <Slide>
          <Heading size={2}>Ключові відміності</Heading>
          <List>
            <ListItem>6DoF / 3DoF</ListItem>
            <ListItem>Наявність контролерів (та їх 6DoF/3DoF)</ListItem>
            <ListItem>Працюють від ПК чи мобільних</ListItem>
          </List>
        </Slide>

        <Slide>
          <Text textColor="quarternary">Основні гравці:</Text>
          <Image src={vrHeadsetsTable} width="100%"/>
        </Slide>

        <Slide>
          <Image src={googleCardboard} height="60vh"/>
          <Heading size={2}>Google Cardboard</Heading>
        </Slide>

        <Slide>
          <Image src={miVr} height="60vh" />
          <Heading size={2}>Xiaomi Mi VR</Heading>
        </Slide>

        <Slide>
          <Heading size={2}>Які вимоги до телефону?</Heading>
          <Appear>
            <List>
              <ListItem>Гіроскоп</ListItem>
              <ListItem>Дисплей високої чіткості</ListItem>
              <ListItem>Хороша швидкодія</ListItem>
            </List>
          </Appear>
        </Slide>

        <Slide>
          <Heading size={2}>Де брати VR контент?</Heading>
          <Appear>
            <List>
              <ListItem>
                <Link href="https://with.in" textColor="secondary">
                  Within
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://www.youtube.com/channel/UCzuqhhs6NWbgTzMuM09WKDQ" textColor="secondary">
                  YouTube
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://play.google.com/store" textColor="secondary">
                  PlayMarket/AppStore
                </Link>
              </ListItem>
              <Appear>
                <ListItem>PornHub</ListItem>
              </Appear>
            </List>
          </Appear>
        </Slide>

        <Slide>
          <Heading size={2}>Що з пітримкою iPhone?</Heading>
          <Appear>
            <Text textSize="3rem">P.S: Все сумно.</Text>
          </Appear>
        </Slide>

        <Slide>
          <Heading>Де можна застосовувати VR?</Heading>
        </Slide>

        <Slide>
          <Heading size={2}>Сфери застосування VR:</Heading>
          <List>
            <ListItem>Навчання</ListItem>
            <ListItem>Медицина</ListItem>
            <ListItem>Промисловість</ListItem>
            <ListItem>Відпочинок</ListItem>
            <ListItem>Торгівля</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={2}>Потрібно вставити сферичні фото або відео</Heading>
        </Slide>

        <Slide>
          <Heading size={2}>Google Street View</Heading>
        </Slide>

        <Slide bgImage={webVR} bgDarken={0.5}>
          <Heading fit>WebVR</Heading>
        </Slide>

        <Slide>
          <Heading size={2}>Що таке WebVR?</Heading>
        </Slide>

        <Slide bgColor="secondary">
          <BlockQuote>
            <Quote textSize="4rem">
              WebVR — це специфікація, яка описує JavaScript API для створення VR–застосунків в браузері.
            </Quote>
            <Cite>від Vladimir Vukićević з Mozilla</Cite>
          </BlockQuote>
        </Slide>

        <Slide>
          <Heading size={2}>WebVR ≠ WebGL</Heading>
        </Slide>

        <Slide>
          <Heading size={2}>Матеріали про WebVR</Heading>
          <List>
            <ListItem>
              <Link href="https://w3c.github.io/webvr" textColor="secondary">
                w3c.github.io/webvr
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://webvr.rocks" textColor="secondary">
                webvr.rocks
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://webvr.info" textColor="secondary">
                webvr.info
              </Link>
            </ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={2}>Що з підтримкою?</Heading>
        </Slide>

        <Slide>
          <Image src={webVRSupportChrome} width="100%"/>
        </Slide>

        <Slide>
          <Image src={webVRSupportFirefox} width="100%"/>
        </Slide>

        <Slide>
          <Image src={webVRSupportEdge} width="100%"/>
        </Slide>

        <Slide>
          <Image src={webVRSupportChromium} width="100%"/>
        </Slide>

        <Slide>
          <Heading fit textColor="secondary">
            <Link href="https://github.com/googlevr/webvr-polyfill" textColor="secondary">
              googlevr/webvr-polyfill
            </Link>
          </Heading>
          <Appear>
            <Text margin="1rem auto">Визначає VRDisplay в залежності від характеристик браузера.</Text>
          </Appear>
          <Appear>
            <Text margin="1rem auto">Для мобільних використовує DeviceMotionEvents.</Text>
          </Appear>
        </Slide>

        <Slide>
          <Heading size={2}>Які є фреймворки?</Heading>
        </Slide>

        <Slide bgImage={webVRFrameworks} bgDarken={0.6}>
          <Heading fit textColor="tertiary">A-Frame</Heading>
          <Heading textColor="primary">&</Heading>
          <Heading fit textColor="quarternary">ReactVR</Heading>
        </Slide>

        <Slide>
          <Heading size={2} textColor="tertiary">A-Frame</Heading>
          <List>
            <ListItem>Він надзвичайно простий</ListItem>
            <ListItem>Базується на компонентному підході</ListItem>
            <ListItem>Включає в себе поліфіл та утіліти</ListItem>
            <ListItem>Підтримує практично всі платформи</ListItem>
            <ListItem>Можна використовувати для AR</ListItem>
            <ListItem>Framework agnostic</ListItem>
            <ListItem>Має потужний інспектор</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={2}>Платформи</Heading>
          <List>
            <ListItem>VR on desktop with a headset</ListItem>
            <ListItem>VR on mobile with a headset</ListItem>
            <ListItem>Flat on desktop (i.e., mouse and keyboard)</ListItem>
            <ListItem>Flat mobile (i.e., magic window)</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={2}>Базується на HTML</Heading>
          <CodePane
            lang="html"
            textSize="1.8rem"
            source={`
<a-scene>
  <a-box position="-1 0.5 -3" color="#4CC3D9"></a-box>
</a-scene>
            `}
          />
        </Slide>

        <Slide>
          <Image src={aFrameScene} width="100%"/>
        </Slide>

        <Slide>
          <Link href={`${process.env.PUBLIC_URL}/examples/aframe-simple-scene.html`} target="_blank">
            <Heading size={3} textColor="tertiary">A-Frame Simple Scene</Heading>
          </Link>
          <CodePane
            lang="html"
            textSize="1.2rem"
            source={`
<html>
  <head>
    <script src="https://aframe.io/releases/0.6.1/aframe.min.js"></script>
  </head>
  <body>
    <a-scene>
      <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
      <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
      <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
      <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
      <a-sky color="#ECECEC"></a-sky>
    </a-scene>
  </body>
</html>
            `}
          />
        </Slide>

        <Slide>
          <Heading size={2}>Як вставити сферичне фото?</Heading>
        </Slide>

        <Slide>
          <Link href={`${process.env.PUBLIC_URL}/examples/aframe-360-photo.html`} target="_blank">
            <Heading size={3} textColor="tertiary">A-Frame 360&deg; Photo</Heading>
          </Link>
          <CodePane
            lang="html"
            textSize="1.2rem"
            source={`
<html>
  <head>
    <script src="https://aframe.io/releases/0.6.1/aframe.min.js"></script>
  </head>
  <body>
    <a-scene>
      <a-sky src="path/to/photo"></a-sky>
      <a-text value="City, Country" position="-2.5 0.25 -1.5"></a-text>
    </a-scene>
  </body>
</html>
            `}
          />
        </Slide>

        <Slide>
          <Heading size={2} textSize="5rem">Матеріали про A-Frame</Heading>
          <List>
            <ListItem>
              <Link href="https://aframe.io" textColor="secondary">
                aframe.io
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://aframe.io/aframe-school" textColor="secondary">
                aframe.io/aframe-school
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://aframevr/awesome-aframe" textColor="secondary">
                aframevr/awesome-aframe
              </Link>
            </ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={2} textColor="quarternary">ReactVR</Heading>
          <List>
            <ListItem>React-стек</ListItem>
            <ListItem>Базується на компонентному підході</ListItem>
            <ListItem>Має вбудовані React-компоненти</ListItem>
          </List>
        </Slide>

        <Slide>
          <Link href={`${process.env.PUBLIC_URL}/examples/aframe-360-photo.html`} target="_blank">
            <Heading size={3} textColor="quarternary">ReactVR 360&deg; Photo</Heading>
          </Link>
          <CodePane
            lang="jsx"
            textSize="1.2rem"
            source={`
import React from 'react';
import { AppRegistry, Pano, Text, View, asset } from 'react-vr';

class WelcomeToVR extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('path/to/photo')}/>
        <Text
          style={{
            transform: [{translate: [-2.5, 0.25, -1.5]}],
          }}
        >
          City, Country
        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
            `}
          />
        </Slide>

        <Slide>
          <Heading size={2}>Матеріали про ReactVR</Heading>
          <List>
            <ListItem>
              <Link href="https://facebook.github.io/react-vr" textColor="secondary">
                facebook.github.io/react-vr
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://egghead.io/courses/build-virtual-reality-experiences-using-react-vr" textColor="secondary">
                egghead.io/courses/build-virtual-reality-experiences-using-react-vr
              </Link>
            </ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading>Розповідати можна годинами…</Heading>
        </Slide>

        <Slide>
          <Heading size={2}>Які проблеми VR?</Heading>
          <List>
            <Appear>
              <ListItem>Ефект Motion Sickness</ListItem>
            </Appear>
            <Appear>
              <ListItem>Нудота через просідання кадрів</ListItem>
            </Appear>
            <Appear>
              <ListItem>Зернистість і розширення екранів</ListItem>
            </Appear>
            <Appear>
              <ListItem>Проблеми з єдністю керування</ListItem>
            </Appear>
            <Appear>
              <ListItem>Фулскріни в мобільних браузерах</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide>
          <Heading size={2}>Більше матеріалів про VR</Heading>
          <List>
            <ListItem>
              <Link href="https://experiments.withgoogle.com/webvr" textColor="secondary">
                experiments.withgoogle.com/webvr
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://vr.google.com" textColor="secondary">
                vr.google.com
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://mozvr.com" textColor="secondary">
                mozvr.com
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/wizztjh/awesome-WebVR" textColor="secondary">
                wizztjh/awesome-WebVR
              </Link>
            </ListItem>
          </List>
        </Slide>

        <Slide>
          <Link href="https://twitter.com/denysdovhan">
            <Heading>
              <S type="underline">@denysdovhan</S>
            </Heading>
          </Link>
        </Slide>

        <Slide>
          <Heading>
            Дякую за увагу!
          </Heading>
          <Text margin="1rem auto" lineHeight={1.2}>2 Sep 2017</Text>
          <Link href="#">
            <Text margin="6em auto" textSize="2rem">
              Slides: denysdovhan.com/slides-vr-crash-course
            </Text>
          </Link>
        </Slide>
      </Deck>
    );
  }
}
