import React from 'react';
import './App.css';
import {Card, CardDeck, Col, Row} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import CreateAd from "./TheRouting/CreateAd";
import LogIn from "./TheRouting/LogIn";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <div className="container">
                    <Navbar.Brand href="#home">Adverter</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                </NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </div>
            </Navbar>
            <main role="main">
                <div className="container">
                    <Row className="pt-3 mt-3">
                        <CardDeck>
                            <Card>

                                <Card.Body>
                                    <Card.Title>Advertisement 1</Card.Title>
                                    <Card.Img variant="top"  src="https://images.internetstores.de/products//853468/02/bb4d43/NS_Bikes_Zircus_24__Kinder_blue[640x480].jpg?forceSize=true&forceAspectRatio=true&useTrim=true"></Card.Img>
                                    <Card.Text>
                                        this is an amazing bike
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card>

                                <Card.Body>

                                    <Card.Title>Advertisement 2</Card.Title>
                                    <Card.Img variant="top"  src="https://www.elfadistrelec.pl/Web/WebShopImages/landscape_large/2-/01/30110722-01.jpg"></Card.Img>
                                    <Card.Text>
                                        This card has supporting text below as a natural lead-in to additional
                                        content.{' '}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card>

                                <Card.Body>
                                    <Card.Title>Advertisement 3</Card.Title>
                                <Card.Img variant="top"  src=""></Card.Img>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This card has even longer content than the first to
                                        show that equal height action.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>





                    </Row>
                </div>
            </main>
        </div>
    );
}

export default App;

