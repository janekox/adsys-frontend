import React from 'react'
import {CardDeck, CardGroup, Row} from "react-bootstrap";
import AdCard from "./AdCard";
import BackendAPI from "../services/BackendAPI";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

class Browse extends React.Component {

    query;

    constructor(props) {
        super();
        const search = props.location.search;
        if (typeof search === "string") {
            this.query = search.split("=")[1];
        }
        this.state = {
            error: '',
            showModal: false,
            ads: []
        };
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);

    }

    renderAdCard(ad, i) {
        return (<Col xs="12" sm="6" md="4" lg="3" key={i}><AdCard data-ad={ad}></AdCard></Col>)
    }


    onModalHide() {
    }

    componentDidMount() {
        const promise = BackendAPI.getAds(this.query);
        promise.then(response => {
            this.setState({ads: response});
        }).catch(error => {
            this.setState({showModal: true, error: error.toString()});
        })
    }

    handleClose() {
        this.setState({showModal: false});
    };

    handleShow() {
        this.setState({showModal: true});
    }

    render() {
        return (<Row className="pt-3 mt-3">
            <Col>
                <Modal show={this.state.showModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Network error</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Can not establish connection to backend server. Check your Internet connection.</p>
                        <pre>{this.state.error}</pre>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Row>
                    {this.state.ads.map(this.renderAdCard)}
                </Row>
            </Col>
        </Row>)
    }
}

export default Browse
