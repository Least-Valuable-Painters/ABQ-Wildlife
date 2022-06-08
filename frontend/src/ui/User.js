import React from "react";
import {Button, Col, Container, Form, FormCheck, FormControl, FormGroup, FormLabel, Row} from "react-bootstrap";
import {Navbar} from "./UserNav";





export function User () {
  return(
    <>
      <Navbar/>
      <h1 className="text-center"><u>Profile</u></h1>
    <Container>
      <Row>
        <Col>
      <Form className="w-50 mx-auto" id="contact" action="../../../backend/src/apis" method="post">
        <FormGroup className="mt-3">
          <FormLabel>Username</FormLabel>
          <FormControl type="username" placeholder="Please enter your username"></FormControl>
        </FormGroup>
        <FormGroup className="mt-3">
          <FormLabel>Email</FormLabel>
          <FormControl type="email" placeholder="Please enter your email address"></FormControl>
        </FormGroup>
        <FormGroup className="mt-3">
          <FormLabel>Password</FormLabel>
          <FormControl type="password" placeholder="Please enter your password"></FormControl>
        </FormGroup>
        <FormGroup controlId="formBasicCheckbox">
          <FormCheck className="mt-3" type="checkbox" label="Turn location data on" />
        </FormGroup>
        <FormGroup controlId="formBasicCheckbox">
          <FormCheck className="mt-3" type="checkbox" label="Get email updates" />
        </FormGroup>
        <Button className="mt-3" variant="primary">Submit</Button>
      </Form>
        </Col>
      </Row>
    </Container>
      </>
  )
}