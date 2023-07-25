import { Container, Nav, Navbar } from "react-bootstrap";

import FormContainer from "./FormContainer";
import React from "react";

const NavigationBar = (props) => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/home">
          <h2>CineFind🔍</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ml-auto my-2 my-lg-3"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <FormContainer
            className="ml-auto"
            query={props.query}
            onChangeHandler={props.onChangeHandler}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
