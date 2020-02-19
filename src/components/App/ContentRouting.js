import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from "../../Home/Home";
import AdCreate from "../AdCreate/AdCreate";

class ContentRouting extends React.Component {
    render() {
        return (<main>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/create' component={AdCreate}/>
            </Switch>
        </main>)
    }
}

export default ContentRouting
