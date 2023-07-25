import { Form, FormControl } from "react-bootstrap";

import React from "react";

const FormContainer = (props) => {
  return (
    <Form
      className="d-flex"
      autoComplete="off"
    >
      <FormControl
        type="search"
        placeholder="Enter Movie name to search"
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
