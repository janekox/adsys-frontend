import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import MockApi from "../services/MockApi";
import Modal from "react-bootstrap/Modal";

class AdCreatePage extends React.Component {

    constructor() {
        super();
        // TODO add form controls for title, image URL, price to the website (JSX in render method)
        this.state = {
            showModal: false,
            ad: {
                title: 'Example ad',
                image: 'https://0.allegroimg.com/s512/03d14e/0ca727674004a6b2a0bb00417620/BERNARD-L-Fixed-gear-single-speed-kolarzowka',
                price: 2000,
                email: 'fake@gmail.com',
                phone: '+4412345678912',
                condition: 'Brand new',
                description: 'Some example text'
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    submitHandler(event) {
        event.preventDefault();
        MockApi.createAd(this.state.ad);
        this.setState({showModal: true});
    }

    handleChange(e) {
        const a = {
            ...this.state.ad, // { a:1, ...{email:1, phone: 2}} spread operator for unpacking properties (flatten inner object)
            [e.target.name]: e.target.value
        };
        this.setState({ad: a});
    }

    adCreatedRedirect() {
        window.location.hash = '/';
    }

    onModalHide() {
    }

    render() {
        return (
            <div>
                <h2>Create new advertisement</h2>
                <Form onSubmit={this.submitHandler}>
                    <Form.Group controlId="adEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="name@example.com" required
                                      value={this.state.ad.email}
                                      onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="adPhone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="tel" name="phone" placeholder="+44 XXX XXX XXXX" required
                                      pattern="\+[0-9]{12,14}"
                                      value={this.state.ad.phone}
                                      onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="adCondition">
                        <Form.Label>What Condition is our Item ?</Form.Label>
                        <Form.Control as="select" onChange={this.handleChange} name="condition" required
                                      value={this.state.ad.condition}>
                            <option>Brand New</option>
                            <option>Minimal Wear</option>
                            <option>Used</option>
                            <option>Used and has damage</option>

                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="adDescription">
                        <Form.Label>Describe the item this might help the potential buyer to decide if they want to buy
                            your product : </Form.Label>
                        <Form.Control as="textarea" rows="3" name="description" required
                                      value={this.state.ad.description}
                                      onChange={this.handleChange}/>
                    </Form.Group>

                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
                <h1>{this.state.showModal}</h1>
                <Modal show={this.state.showModal} onHide={this.onModalHide}>
                    <Modal.Header>
                        <Modal.Title>Ad created</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Thank you for adding ad</Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.adCreatedRedirect}>Go to home</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default AdCreatePage;


