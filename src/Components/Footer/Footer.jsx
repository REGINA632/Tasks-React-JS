import React from "react";
import { Navbar, Container } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{ marginTop: "20px" }}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=400/uploads/users/1631/posts/29602/preview_image/react-crash-course.jpg"
              width="40"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            React Bootstrap{" "}
            <span className="span">Copyring &copy; 2022 Regina</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Footer;
