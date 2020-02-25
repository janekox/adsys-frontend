import React from 'react';
import MockApi from "../services/MockApi";
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
        MockApi.getAd(this.state.id).then(ad => {
            this.setState({ad: ad});
        });
    }

    render() {
        return (

            <div className="ad-details-image">
                <Container>
                    <Row>
                        <Col sm={8}>
                            <p><h2>{this.state.ad.title}</h2></p>
                            <Col md={{span: 9, offset: 1}}>
                                <p> Description: </p>
                                <p>{this.state.ad.description}</p></Col>
                        </Col>

                        <Col xl={4}>
                            <Image src={this.state.ad.image} className=""></Image>

                        </Col>
                    </Row>
                    <Row className="pt-5">
                        <Col sm>sm=true</Col>
                        <Col sm>sm=true</Col>
                        <Col sm><h4>Price: {this.state.ad.price}</h4></Col>
                    </Row>
                </Container>


                <h3>{this.state.ad.price}</h3>
            </div>
        );
    }
}

export default AdDetailsPage;
