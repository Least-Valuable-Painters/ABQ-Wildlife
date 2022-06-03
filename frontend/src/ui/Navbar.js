import React from 'react'
import {Button, Offcanvas} from "react-bootstrap";
import {useState} from "react";

export function OffCanvasNavbar() {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);

    return (
        <>
            <Button variant="primary" onClick={toggleShow} className="me-2">
                Navbar
            </Button>
            <Offcanvas show={show} onHide={handleClose} scroll={true} backdrop={true}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

