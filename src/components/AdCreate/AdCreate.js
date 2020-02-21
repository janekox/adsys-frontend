import React from 'react';
import {Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";

function AdCreate() {
    return (

        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com"/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="phone" placeholder="+48 XXX XXX XXX"/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>What Condition is our Item ?</Form.Label>
                <Form.Control as="select">
                    <option>Brand New</option>
                    <option>Minimal Wear</option>
                    <option>Used</option>
                    <option>Used and has damage</option>

                </Form.Control>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Describe the item this might help the potential buyer to decide if they want to buy your
                    product : </Form.Label>
                <Form.Control as="textarea" rows="3"/>
            </Form.Group>
        </Form>


    );
}

export default AdCreate;


