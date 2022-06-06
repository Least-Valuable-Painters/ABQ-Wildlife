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
        <FormGroup>
          <FormLabel>Name</FormLabel>
          <FormControl type="name" placeholder="please enter your name"></FormControl>
        </FormGroup>
        <FormGroup>
          <FormLabel>Email</FormLabel>
          <FormControl type="email" placeholder="please enter your email address"></FormControl>
        </FormGroup>
        <FormGroup>
          <FormLabel>Password</FormLabel>
          <FormControl type="password" placeholder="please enter your password"></FormControl>
        </FormGroup>
        <FormGroup controlId="formBasicCheckbox">
          <FormCheck type="checkbox" label="Turn location data on:" />
        </FormGroup>
        <FormGroup className="" controlId="formBasicCheckbox">
          <FormCheck type="checkbox" label="Get email updates:" />
        </FormGroup>
        <Button variant="primary">Submit</Button>
      </Form>
        </Col>
      </Row>
    </Container>
      </>
  )
}