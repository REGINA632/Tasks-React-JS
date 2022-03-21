import React from "react";
import { Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=400/uploads/users/1631/posts/29602/preview_image/react-crash-course.jpg"
              width="40"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            React Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
