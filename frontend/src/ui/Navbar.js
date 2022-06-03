import React from "react";
import {Nav} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css"


export const Navbar = props => {

    return (
        <>
            <Nav className="com-md=12 d-none d-md-block bg-light sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <div className="sidebar-sticky"></div>
            <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Feed</Nav.Link>
            </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">AWF</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3">Favorites</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-4">Profile</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-5">Upload</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link>
                </Nav.Item>
              </Nav>
            </>
    );
};



