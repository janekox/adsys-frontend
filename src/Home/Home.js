import React from 'react'
import {CardDeck, Row} from "react-bootstrap";
import AdCard from "../components/AdCard";

class Home extends React.Component {
    render() {
        return (<Row className="pt-3 mt-3">
            <CardDeck>
                <AdCard></AdCard>
                <AdCard></AdCard>
                <AdCard></AdCard>
                <AdCard></AdCard>
            </CardDeck>
        </Row>)
    }
}

export default Home
