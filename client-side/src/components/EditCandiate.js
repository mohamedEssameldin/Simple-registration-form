import serialize from "form-serialize";
import React, { useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { editCandiate } from "../store/actions/candiate";

function EditCandiate() {
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    document.querySelector("#name").value = location.state.fullName;
    document.querySelector("#email").value = location.state.email;
    document.querySelector("#mobile").value = location.state.mobile;
    document.querySelector("#age").value = location.state.age;
    document.querySelector("#address").value = location.state.address;
  }, []);
  const update = (event) => {
    event.preventDefault();
    const form = document.querySelector("#form");
    const obj = serialize(form, { hash: true });
    obj.id = location.state.id;
    dispatch(editCandiate(location.state.id, obj));
    history.push("/");
  };
  return (
    <Container className='mt-3'>
      <Form id='form' style={{ width: "950px", margin: "auto" }}>
        <Form.Group className='mb-3 w-75'>
          <Form.Label>Name </Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Name'
            name='fullName'
            id='name'
          />
        </Form.Group>
        <Form.Group className='mb-3 w-75'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter Email'
            name='email'
            id='email'
          />
        </Form.Group>
        <Form.Group className='mb-3 w-75'>
          <Form.Label>Mobile</Form.Label>
          <Form.Control
            type='number'
            placeholder='Enter Mobile'
            name='mobile'
            id='mobile'
          />
        </Form.Group>
        <Form.Group className='mb-3 w-75'>
          <Form.Label>Age</Form.Label>
          <Form.Control
            type='number'
            placeholder='Enter Age'
            name='age'
            id='age'
          />
        </Form.Group>
        <Form.Group className='mb-3 w-75'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type='Address'
            placeholder='Enter Address'
            name='address'
            id='address'
          />
        </Form.Group>
        <Button
          variant='success'
          type='submit'
          onClick={(event) => update(event)}
        >
          Update
        </Button>
      </Form>
    </Container>
  );
}

export default EditCandiate;
