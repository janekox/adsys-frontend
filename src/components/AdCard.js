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
                <Link to={`/details/${this.state.ad._id}`}>
                    <Card.Title>{this.state.ad.title}</Card.Title>
                    <Card.Img variant="top" src={this.state.ad.image}></Card.Img>
                </Link>
                <Card.Body>
                    <Card.Text> Condition: {this.state.ad.condition} </Card.Text>
                    <Card.Text> Price: £{this.state.ad.price} </Card.Text>
                    <Card.Text> Contact: </Card.Text>
                    <Card.Body>
                        <Card.Text> - {this.state.ad.email}</Card.Text>
                        <Card.Text> - {this.state.ad.phone}</Card.Text>
                    </Card.Body>
                </Card.Body>

                <Link to={`/details/${this.state.ad._id}`}>Show Details</Link>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted"></small>
            </Card.Footer>
        </Card>
    };
}

export default AdCard;
