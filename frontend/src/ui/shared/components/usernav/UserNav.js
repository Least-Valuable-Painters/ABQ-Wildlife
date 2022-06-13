import React, {useState} from "react";
import {Button, Col, Container, Form, FormControl, FormGroup, FormLabel, Offcanvas, Row} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import "../../../navbar.css"
import {SignIn} from "./SignIn";



export const Navbar = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="menu-button" variant="secondary" onClick={handleShow}>
        Expand Menu/Sign In
      </Button>

      <Offcanvas show={show} className="navbar-body" onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Sign In</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container>
            <Row>
              <Col>
                <SignIn/>
              </Col>
            </Row>
          </Container>
        </Offcanvas.Body>
        <Offcanvas.Body>
          <Nav.Link href="/">Feed</Nav.Link>
        </Offcanvas.Body>
        <Offcanvas.Body>
          <Nav.Link href="/favorite">Favorites</Nav.Link>
        </Offcanvas.Body>
        <Offcanvas.Body>
          <Nav.Link href="/upload">Upload</Nav.Link>
        </Offcanvas.Body>
        <Offcanvas.Body>
          <Nav.Link href="/user">Sign Up</Nav.Link>
        </Offcanvas.Body>
      </Offcanvas>

    </>
  );
}
