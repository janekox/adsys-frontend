import React from 'react';
import MockApi from "../services/MockApi";
import {Image} from "react-bootstrap";
import './AdDetailsPage.css';

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
                <h2>{this.state.ad.title}</h2>
                <Image src={this.state.ad.image} className=""></Image>
                <h3>{this.state.ad.price}</h3>
            </div>
        );
    }
}

export default AdDetailsPage;
