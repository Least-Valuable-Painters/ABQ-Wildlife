import React from "react";
import {Button, Col, Container, Form, FormCheck, FormControl, FormGroup, FormLabel, Row} from "react-bootstrap";

export function User () {
  return(
    <>
      <h1 className="text-center"><u>Profile</u></h1>
    <Container>
      <Row>
        <Col>
      <Form className="w-50 mx-auto">
        <FormGroup className="mt-3">
          <FormLabel>Name</FormLabel>
          <FormControl type="name" placeholder="please enter your name"></FormControl>
        </FormGroup>
        <FormGroup className="mt-3">
          <FormLabel>Email</FormLabel>
          <FormControl type="email" placeholder="please enter your email address"></FormControl>
        </FormGroup>
        <FormGroup className="mt-3">
          <FormLabel>Password</FormLabel>
          <FormControl type="password" placeholder="please enter your password"></FormControl>
        </FormGroup>
        <FormGroup controlId="formBasicCheckbox">
          <FormCheck className="mt-3" type="checkbox" label="Turn location data on:" />
        </FormGroup>
        <FormGroup controlId="formBasicCheckbox">
          <FormCheck className="mt-3" type="checkbox" label="Get email updates:" />
        </FormGroup>
        <Button className="mt-3" variant="primary">Submit</Button>
      </Form>
        </Col>
      </Row>
    </Container>
      </>
  )
}