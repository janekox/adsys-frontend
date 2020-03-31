import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import React from "react";

class AdsysNavbar extends React.Component {

    constructor() {
        super();
        this.state = {search: ''};
        this.handleChange = this.handleChange.bind(this);
        this.search = this.search.bind(this);
    }

    search() {
        window.location.hash = '/browse?query=' + this.state.search;
        window.location.reload();
    }

    browse() {
        window.location.hash = '/browse';
        window.location.reload();
    }

    handleChange(e) {
        this.setState({search: e.target.value});
    }

    render() {
        return <Navbar bg="dark" variant="dark" expand="lg">
            <div className="container">
                <Navbar.Brand href="#about">Adverter</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link onClick={this.browse}>Browse</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#create">Create</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2"
                                     value={this.state.search} onChange={this.handleChange}/>
                        <Button variant="outline-success" onClick={this.search}>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </div>
        </Navbar>
    }
}

export default AdsysNavbar;
