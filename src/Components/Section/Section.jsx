import React from "react";
import { CardGroup, Card, Container } from "react-bootstrap";
import "./Section.css";

const Section = () => {
  return (
    <div>
      <Container className="cont">
        <div style={{ margin: "10px" }}>
          <h1>React Bootstrap</h1>
          <h2>The most popular front-end framework</h2>
          <h2>Rebuilt for React.</h2>
        </div>
        <CardGroup>
          <Card style={{ margin: "10px" }}>
            <Card.Img
              variant="top"
              src="https://techblog.sdstudio.top/wp-content/uploads/2021/09/ba11d056cec27254d89b310745e4071b-1.png"
            />
            <Card.Body>
              <Card.Title>Rebuilt with React</Card.Title>
              <Card.Text>
                React-Bootstrap replaces the Bootstrap JavaScript. Each
                component has been built from scratch as a true React component,
                without unneeded dependencies like jQuery. As one of the oldest
                React libraries, React-Bootstrap has evolved and grown alongside
                React, making it an excellent choice as your UI foundation.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ margin: "10px" }}>
            <Card.Img
              variant="top"
              src="https://www.cronj.com/blog/wp-content/uploads/React-Hook.png"
            />
            <Card.Body>
              <Card.Title>Bootstrap at its core</Card.Title>
              <Card.Text>
                Built with compatibility in mind, we embrace our bootstrap core
                and strive to be compatible with the world's largest UI
                ecosystem. By relying entirely on the Bootstrap stylesheet,
                React-Bootstrap just works with the thousands of Bootstrap
                themes you already love.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ margin: "10px" }}>
            <Card.Img
              variant="top"
              src="https://miro.medium.com/max/1400/1*KN7zbaWkbm5E71zZWfTf7A.gif"
            />
            <Card.Body>
              <Card.Title>Accessible by default</Card.Title>
              <Card.Text>
                The React component model gives us more control over form and
                function of each component. Each component is implemented with
                accessibility in mind. The result is a set of
                accessible-by-default components, over what is possible from
                plain Bootstrap.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
};

export default Section;
