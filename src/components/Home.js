import React from 'react'
import {CardDeck, Row} from "react-bootstrap";
import AdCard from "./AdCard";
import MockApi from "../services/MockApi";

class Home extends React.Component {

    constructor() {
        super();
        this.state = {ads: []};
    }

    renderAdCard(ad, i) {
        return (<AdCard key={i} data-ad={ad}></AdCard>)
    }

    componentDidMount() {
        const promise = MockApi.getAds();
        promise.then(adsData => this.setState({ads: adsData}));
    }

    render() {
        return (<Row className="pt-3 mt-3">
            <CardDeck>
                {this.state.ads.map(this.renderAdCard)}
            </CardDeck>
        </Row>)
    }
}

export default Home
