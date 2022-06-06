import React, {useState} from "react";
import {Button, Offcanvas} from "react-bootstrap";
import "./fav-navbar.css"



export const FavNavbar = () => {

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
