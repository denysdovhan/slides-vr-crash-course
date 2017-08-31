import React, { Component } from 'react';
import {
  Deck, Slide, Text
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const colors = {
  // primary: "white",
  // secondary: "#3F4042",
  // tertiary: "#35C9DD",
  // quartenary: "#97CE4C",
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
      <Deck transition={['fade']} transitionDuration={500} theme={theme}>
        <Slide>
          <Text>Slide 1</Text>
        </Slide>
        <Slide>
          <Text>Slide 2</Text>
        </Slide>
      </Deck>
    );
  }
}
