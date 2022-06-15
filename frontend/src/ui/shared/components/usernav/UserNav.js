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
                Navigation
            </Button>

            <Offcanvas show={show} className="navbar-body" onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>

                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="p-0">
                        <Container>
                            <Row>
                                <Col>
                                    <SignIn/>
                                </Col>
                            </Row>
                        </Container>
                    <Container className="navLinkBody">
                        <Nav.Link className="navLinks" href="/">Feed</Nav.Link>
                        <Nav.Link className="navLinks" href="/favorite">Favorites</Nav.Link>
                        <Nav.Link className="navLinks" href="/upload">Upload</Nav.Link>
                        <Nav.Link className="navLinks" href="/user">Sign Up</Nav.Link>
                    </Container>
                </Offcanvas.Body>
            </Offcanvas>

        </>
    );
}
