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
            <footer className="pt-5 pb-5">
                <p className="text-center text-muted">Adverter &copy; 2020</p>
            </footer>
        </div>
    );
}

export default App;

