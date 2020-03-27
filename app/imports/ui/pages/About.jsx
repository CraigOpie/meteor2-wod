import React from 'react';
import { Container, Header, List } from 'semantic-ui-react';


class About extends React.Component {
  render() {
    return (
        <Container>
          <Header as="h1">
            <p>What is stuff?</p>
          </Header>
          <p>Here are some definitions of stuff:</p>
          <List bulleted>
            <List.Item>matter, material, articles, or activities of a specified or indeterminate kind that are being
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              referred to, indicated, or implied. "she's good at the technical stuff"</List.Item>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <List.Item>a person's belongings, equipment, or baggage. "he took his stuff and went"</List.Item>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <List.Item>worthless or foolish ideas, speech, or writing; rubbish. "stuff and nonsense!"</List.Item>
          </List>
        </Container>
    );
  }
}

export default About;
