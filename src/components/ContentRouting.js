import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from "../Home/Home";
import AdCreatePage from "./AdCreatePage";
import AdDetailsPage from "./AdDetailsPage";
import AboutPage from "./AboutPage";

class ContentRouting extends React.Component {
    render() {
        return (<main>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/about' component={AboutPage}/>
                <Route exact path='/create' component={AdCreatePage}/>
                <Route exact path='/details' component={AdDetailsPage}/>
            </Switch>
        </main>)
    }
}

export default ContentRouting
