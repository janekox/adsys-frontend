import React from 'react';
import BackendAPI from "../services/BackendAPI";
import {Image} from "react-bootstrap";
import './AdDetailsPage.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class AdDetailsPage extends React.Component {

    constructor(props) {
        super(props);
        const id = props.match.params.id;
        this.state = {id: id, ad: {}};
        BackendAPI.getAd(this.state.id).then(ad => {
            this.setState({ad: ad});
        });
    }

    render() {
        return (

            <div className="ad-details-image">
                <Container>
                    <Row>
                        <Col sm={6}>
                            <h2>{this.state.ad.title}</h2>
                            <ul>
                                <p>Tag: {this.state.ad.tag}</p>
                                <p>Condition : {this.state.ad.condition}</p>
                                <p>Description:</p>
                                <p>{this.state.ad.description}</p>
                            </ul>
                        </Col>

                        <Col xl={6}>
                            <Image src={this.state.ad.image} className=""></Image>
                            <h5>Price: {this.state.ad.price}</h5>

                        </Col>
                    </Row>
                    <Row>
                        <Col sm={8}>
                            <ul>Contacts:

                                <li> Phone number : {this.state.ad.phone}</li>
                                <li> Email: {this.state.ad.email}</li>
                            </ul>

                        </Col>
                    </Row>


                </Container>


            </div>
        );
    }
}

export default AdDetailsPage;
