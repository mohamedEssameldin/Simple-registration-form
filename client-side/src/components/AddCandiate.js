import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import serialize from "form-serialize";
import { useDispatch } from "react-redux";
import { addCandiate } from "../store/actions/candiate";
import { useHistory } from "react-router";

function AddCandiate() {
  const dispatch = useDispatch();
  const history = useHistory();
  const submit = (event) => {
    event.preventDefault();
    const form = document.querySelector("#form");
    const obj = serialize(form, { hash: true });
    dispatch(addCandiate(obj));
    history.push("/");
  };
  return (
    <Container className='mt-3'>
      <Form id='form' style={{ width: "950px", margin: "auto" }}>
        <Form.Group className='mb-3 w-75'>
          <Form.Label>Name </Form.Label>
          <Form.Control type='text' placeholder='Enter Name' name='fullName' />
        </Form.Group>
        <Form.Group className='mb-3 w-75'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter Email' name='email' />
        </Form.Group>
        <Form.Group className='mb-3 w-75'>
          <Form.Label>Mobile</Form.Label>
          <Form.Control
            type='number'
            placeholder='Enter Mobile'
            name='mobile'
          />
        </Form.Group>
        <Form.Group className='mb-3 w-75'>
          <Form.Label>Age</Form.Label>
          <Form.Control type='text' placeholder='Enter Age' name='age' />
        </Form.Group>
        <Form.Group className='mb-3 w-75'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type='Address'
            placeholder='Enter Address'
            name='address'
          />
        </Form.Group>
        <Button
          variant='primary'
          type='submit'
          onClick={(event) => submit(event)}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default AddCandiate;
