import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import React from "react";
import {Link} from "react-router-dom";


function AdsysNavbar() {
    return <Navbar bg="dark" variant="dark" expand="lg">
        <div className="container">
            <Navbar.Brand href="#home">Adverter</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/#/">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#create">Create</Nav.Link>
                </Nav>
                <Form inline>

                    <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                    <Button variant="outline-success">Search</Button>

                </Form>
            </Navbar.Collapse>
        </div>
    </Navbar>
}

export default AdsysNavbar;
