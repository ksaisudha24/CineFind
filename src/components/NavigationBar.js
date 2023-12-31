import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import FormContainer from "./FormContainer";
import "../styles/NavigationBar.css";

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
            className="ms-auto my-2 my-lg-3"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <FormContainer
            query={props.query}
            onChangeHandler={props.onChangeHandler}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
