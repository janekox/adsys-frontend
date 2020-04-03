import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Browse from "./Browse";
import AdCreatePage from "./AdCreatePage";
import AdDetailsPage from "./AdDetailsPage";
import AboutPage from "./AboutPage";
import ManagePage from "./ManagePage";

class ContentRouting extends React.Component {
    render() {
        return (<Switch>
            <Route exact path='/browse' component={Browse}/>
            <Route exact path='/about' component={AboutPage}/>
            <Route exact path='/create' component={AdCreatePage}/>
            <Route exact path='/details/:id' component={AdDetailsPage}/>
            <Route exact path='/manage/:hash' component={ManagePage}/>
            <Redirect exact from='/' to='/browse'/>
        </Switch>)
    }
}

export default ContentRouting
