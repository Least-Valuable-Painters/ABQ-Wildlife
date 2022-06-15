import React, {useState} from "react";
import {Button, Col, Container, Form, FormControl, FormGroup, FormLabel, Offcanvas, Row} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import "../../../navbar.css"
import {SignIn} from "./SignIn";
import {useDispatch, useSelector} from "react-redux";
import {fetchAuth} from "../../../../store/auth";
import {fetchFavoritesByFavoriteUserId} from "../../../../store/favorite";
import {useEffect} from "react";



export const Navbar = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch()
  const effects = () => {
    dispatch(fetchAuth())
  }
  useEffect(effects, [dispatch])
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
        {auth !== null && (
            <Offcanvas.Body>
          <Nav.Link href={`/favorite/${auth.userId}`}>Favorites</Nav.Link>
        </Offcanvas.Body>
            )}
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
