import React from 'react';
import { Row, Col } from 'react-bootstrap';

function AboutPage() {
    return (
        <Row>
            <Col xs={5}>
                <h1 className="pb-5">About adverter</h1>

                <p className="text-justify">Adverter is a free to use website. Here users can post their items that they
                    wan to sale and look at
                    items that they want to buy.</p>

                <p className="text-justify">
                    Terms and Conditions:</p>
                <ul> - All the data that you will input when you will create Ad will be visible to every used that
                    is visiting our website.
                </ul>
            </Col>
        </Row>
    );
}

export default AboutPage;


