import React from 'react';
import './App.css';
import ContentRouting from "../ContentRouting";
import {HashRouter} from "react-router-dom";
import AdsysNavbar from "../AdsysNavbar";

function App() {
    return (
        <div>
            <AdsysNavbar/>
            <main role="main">
                <div className="container pt-4">
                    <HashRouter>
                        <ContentRouting></ContentRouting>
                    </HashRouter>
                </div>
            </main>
        </div>
    );
}

export default App;

