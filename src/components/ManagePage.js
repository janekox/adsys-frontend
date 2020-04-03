import React from 'react';
import BackendAPI from "../services/BackendAPI";
import {Button, Table} from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

class ManagePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {ad: {}, showModal: false};
        const hash = props.match.params.hash;
        BackendAPI.getAdByHash(hash).then(data => {
            this.setState({ad: data});
        });
        this.remove = this.remove.bind(this);
    }

    remove() {
        BackendAPI.removeByHash(this.state.ad.hash).then(() => {
            this.setState({showModal: true});
        })
    }

    adRemovedRedirect() {
        window.location.hash = '/';
    }

    onModalHide() {
    }

    render() {
        return (
            <div>
                <Modal show={this.state.showModal} onHide={this.onModalHide} size="lg">
                    <Modal.Header>
                        <Modal.Title>Ad removed</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Your ad has been removed.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.adRemovedRedirect}>Go to home</Button>
                    </Modal.Footer>
                </Modal>

                <h2>Manage your Ad</h2>
                <Table>
                    <thead>
                    <tr>
                        <th>Property</th>
                        <th>Value</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>title</td>
                        <td>{this.state.ad.title}</td>
                    </tr>
                    <tr>
                        <td>image</td>
                        <td>{this.state.ad.image}</td>
                    </tr>
                    <tr>
                        <td>condition</td>
                        <td>{this.state.ad.condition}</td>
                    </tr>
                    <tr>
                        <td>price</td>
                        <td>{this.state.ad.price}</td>
                    </tr>
                    <tr>
                        <td>description</td>
                        <td>{this.state.ad.description}</td>
                    </tr>
                    <tr>
                        <td>email</td>
                        <td>{this.state.ad.email}</td>
                    </tr>
                    <tr>
                        <td>phone</td>
                        <td>{this.state.ad.phone}</td>
                    </tr>
                    <tr>
                        <td>hash</td>
                        <td>{this.state.ad.hash}</td>
                    </tr>
                    </tbody>
                </Table>
                <Button variant="danger" onClick={this.remove}>Remove ad</Button>
            </div>
        );
    }
}

export default ManagePage;
