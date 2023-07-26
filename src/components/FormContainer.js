import React from "react";
import { Form, FormControl } from "react-bootstrap";
import "../styles/NavigationBar.css";

const FormContainer = (props) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  }
  return (
    <Form
      className="d-flex justify-content-end"
      autoComplete="off"
      onSubmit={onSubmitHandler}
    >
      <FormControl
        type="search"
        placeholder="Enter Movie name or genre to search"
        className="me-2"
        aria-label="search"
        name="query"
        value={props.query}
        onChange={props.onChangeHandler}
      ></FormControl>
    </Form>
  );
};

export default FormContainer;
