import React, {useState} from "react";
import {Button, Col, Container, Form, FormControl, FormGroup, FormLabel, Offcanvas, Row} from "react-bootstrap";
import "./navbar.css"



export const Navbar = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="menu-button" variant="secondary" onClick={handleShow}>
        Expand Menu
      </Button>

      <Offcanvas show={show} className="navbar-body" onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Sign In</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container>
            <Row>
              <Col>
                <Form>
                  <FormGroup className="mt-3">
                    <FormLabel>Username</FormLabel>
                    <FormControl type="username" placeholder="username"></FormControl>
                  </FormGroup>
                  <FormGroup className="mt-3 mb-3">
                    <FormLabel>Password</FormLabel>
                    <FormControl type="username" placeholder="password"></FormControl>
                  </FormGroup>
                  <Button className="mt-3" variant="primary">Sign In</Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </Offcanvas.Body>
        <Offcanvas.Body>
          Feed #
        </Offcanvas.Body>
        <Offcanvas.Body>
          AWF #
        </Offcanvas.Body>
        <Offcanvas.Body>
          Favorites &#9733;
        </Offcanvas.Body>
        <Offcanvas.Body>
          Profile
        </Offcanvas.Body>
        <Offcanvas.Body>
          Upload
        </Offcanvas.Body>
      </Offcanvas>

    </>
  );
}
