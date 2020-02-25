import React from 'react'
import {CardDeck, CardGroup, Row} from "react-bootstrap";
import AdCard from "./AdCard";
import BackendAPI from "../services/BackendAPI";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            error: '',
            showModal: false,
            ads: []
        };
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);

    }

    renderAdCard(ad, i) {
        return (<AdCard key={i} data-ad={ad}></AdCard>)
    }


    onModalHide() {
    }

    componentDidMount() {
        const promise = BackendAPI.getAds();
        promise.then(response => {
            this.setState({ads: response.data});
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

            {/* TODO Check on react bootstrap documentation if CardGroup has settings for responsive sizing */}
            <CardGroup>
                {this.state.ads.map(this.renderAdCard)}
            </CardGroup>
        </Row>)
    }
}

export default Home
