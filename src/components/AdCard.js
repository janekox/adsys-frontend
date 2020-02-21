import React from 'react';
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";

class AdCard extends React.Component {

    constructor(props) {
        super();
        this.state = {ad: props['data-ad']};
    }

    render() {
        return <Card>
            <Card.Body>
                <Card.Title>{this.state.ad.title}</Card.Title>
                <Card.Img variant="top" src={this.state.ad.image}></Card.Img>
                <Card.Text>
                    {this.state.ad.description}
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
