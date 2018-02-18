// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

import Logo from "./../assets/logo.svg";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "#4a5665",
    secondary: "#ffffff",
    blueyGrey: "#9dabba",
    battleshipGrey: "#6e7b8c",
    greenAction: "#29dc8d",
    greenApple: "#42c627",
    orange: "#ff7557",
    blue: "#60b6eb",
    pink: "#e173a9",
    green: "#51cfc5"
  },
  {
    primary: "Varela",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="orange">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            The Collective ft. React Native
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={1} bold>
            Alive Together
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="black">
          <Heading size={6} textColor="primary" caps>
            Who are we?
          </Heading>
          <br />
          <img src={Logo} height="100px" width="100px" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
