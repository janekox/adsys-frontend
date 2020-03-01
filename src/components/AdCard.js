import React from 'react';
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";


class AdCard extends React.Component {

    constructor(props) {
        super();
        this.state = {ad: props['data-ad']};
    }

    render() {
        return <Card style={{minHeight: '410px', marginBottom: '20px'}}>
            <Card.Body>
                <Link to={`/details/${this.state.ad._id}`}>
                    <Card.Title className="text-center">{this.state.ad.title}</Card.Title>
                    <Card.Img variant="top" src={this.state.ad.image}></Card.Img>
                </Link>
                <Card.Body>
                    <Card.Text>
                        <ul>
                            Condition: {this.state.ad.condition}
                            Price: £{this.state.ad.price}
                        </ul>
                    </Card.Text>
                </Card.Body>

                <Link to={`/details/${this.state.ad._id}`}>Show Details</Link>
            </Card.Body>
        </Card>
    };
}

export default AdCard;
