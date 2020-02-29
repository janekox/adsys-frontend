import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import BackendAPI from "../services/BackendAPI";
import Modal from "react-bootstrap/Modal";
import {FormCheck} from "react-bootstrap";
import './AdCreateCard.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

class AdCreatePage extends React.Component {

    constructor() {
        super();
        this.state = {
            showModal: false,
            ad: {   //this is advertisement data where all the information about a new post is stored then send to backend
                title: 'Example ad',
                image: 'https://0.allegroimg.com/s512/03d14e/0ca727674004a6b2a0bb00417620/BERNARD-L-Fixed-gear-single-speed-kolarzowka',
                condition: 'Brand new',
                price: 2000,
                email: 'fake@gmail.com',
                phone: '+4412345678912',
                termsConditionsConfirmation: '',    /*here i have a problem that it doesnt store the value if accepted*/
                publicDataConfirmation: ''    /*here i have a problem that it doesnt store the value if accepted*/
            }
        };

        this.handleChange = this.handleChange.bind(this);  //those are binding i have found a video about it link###########
        this.submitHandler = this.submitHandler.bind(this);
    }

    submitHandler(event) {
        console.log(this.state.ad);
        event.preventDefault();  // prevent default action when submithandler is called which means that no input request
        BackendAPI.createAd(this.state.ad);
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
                <Form className="Create-Form" onSubmit={this.submitHandler}>
                    {/*//////////////////////////////////////////////////////////////////////////////////////////////////*/}
                    <Form.Group controlId="adTitle">
                        <Form.Label>Title of the Advertisement : </Form.Label>
                        <Form.Control type="text" name="title" placeholder="Title of your adv." required
                                      value={this.state.ad.title}
                                      onChange={this.handleChange}/>
                    </Form.Group>
                    {/*//////////////////////////////////////////////////////////////////////////////////////////////////*/}
                    <Form.Group controlId="adUrl">
                        <Form.Label>Add a picture here :

                            <OverlayTrigger
                                overlay={<Tooltip id="tooltip-disabled">An image might help the user to decide if they
                                    want to buy your
                                    product </Tooltip>}>
                            <span className="d-inline-block">
                                <p disabled className="text-primary" style={{pointerEvents: 'none'}}>
                            more
                            </p>
                            </span>
                            </OverlayTrigger>
                        </Form.Label>
                        <Form.Control type="text" name="image" placeholder="Place here the image URL" required
                                      value={this.state.ad.image}
                                      onChange={this.handleChange}/>
                    </Form.Group>
                    {/*//////////////////////////////////////////////////////////////////////////////////////////////////*/}
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
                    {/*//////////////////////////////////////////////////////////////////////////////////////////////////*/}
                    <Form.Group controlId="adDescription">
                        <Form.Label>Describe the item this might help the potential buyer to decide if they want to buy
                            your product : </Form.Label>
                        <Form.Control as="textarea" rows="3" name="description" required
                                      value={this.state.ad.description}
                                      onChange={this.handleChange}/>
                    </Form.Group>
                    {/*//////////////////////////////////////////////////////////////////////////////////////////////////*/}
                    <Form.Group controlId="adPrice">
                        <Form.Label>Price of the item :</Form.Label>
                        <Form.Control type="text" name="price" placeholder="The price is in pounds" required
                                      value={this.state.ad.price}
                                      onChange={this.handleChange}/>
                    </Form.Group>
                    {/*//////////////////////////////////////////////////////////////////////////////////////////////////*/}
                    <Form.Group controlId="adEmail">
                        <Form.Label>Email address :</Form.Label>
                        <Form.Control type="email" name="email" placeholder="name@example.com" required
                                      value={this.state.ad.email}
                                      onChange={this.handleChange}/>
                    </Form.Group>
                    {/*//////////////////////////////////////////////////////////////////////////////////////////////////*/}
                    <Form.Group controlId="adPhone">
                        <Form.Label>Phone Number :
                            <OverlayTrigger
                                overlay={<Tooltip id="tooltip-disabled">Its needs to be a Uk phone number. Starting
                                    with: 0044 or +44</Tooltip>}>
                            <span className="d-inline-block">
                                <p disabled className="text-primary" style={{pointerEvents: 'none'}}>
                            more
                            </p>
                            </span>
                            </OverlayTrigger>
                        </Form.Label>
                        <Form.Control type="tel" name="phone" placeholder="+44 XXX XXX XXXX" required
                                      pattern="\+[0-9]{12,14}"/* that limits the values that you can put in so only numbers from 1-9 can be put in this form */
                                      value={this.state.ad.phone}
                                      onChange={this.handleChange}/>
                    </Form.Group>
                    {/*//////////////////////////////////////////////////////////////////////////////////////////////////*/}
                    <Form.Group>
                        <div key="default-checkbox" className="mb-3">
                            <FormCheck type="checkbox" name={"AdAgreeTT"} id={"AdAgreeTT"}
                                       label={"Agree to the data processing terms & condition"}/>
                        </div>
                        {/*value={this.state.ad.AdAgreeTT}*/}{/*here i have a problem with the form,at that the check box is giving the information from */}
                        {/*onChange={this.handleChange}/>*/}
                    </Form.Group>
                    <Form.Group>
                        <div key="default-checkbox" className="mb-3">
                            <FormCheck type="checkbox" name="adAgreePI" id={"adAgreePI"}
                                       label={"Agree that all the data entered is public and you give permission for other people to see it."}/>
                        </div>
                        {/*value={this.state.ad.adAgreePI}*/}
                        {/*onChange={this.handleChange}/>*/}
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


