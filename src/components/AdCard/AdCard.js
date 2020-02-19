import React from 'react';
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";

class AdCard extends React.Component {
    render() {
        return <Card>
            <Card.Body>
                <Card.Title>Advertisement 2</Card.Title>
                <Card.Img variant="top"
                          src="https://www.elfadistrelec.pl/Web/WebShopImages/landscape_large/2-/01/30110722-01.jpg"></Card.Img>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                </Card.Text>
                <Link to="/details">Show Details</Link>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
    };
}

export default AdCard;
