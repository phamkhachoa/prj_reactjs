import React, { Component } from 'react';
import {
    Route
} from "react-router-dom";
import News from '../components/News';
import Home from '../components/Home';
import NewDetail from '../components/NewDetail';
import Contact from '../components/Contact';



class DieuHuongURL extends Component {
    render() {
        return (
            <div>
                    <Route path="/home" component={Home} />
                    <Route path="/tin" component={News} />
                    <Route path="/tin-tuc/:slug.:id" component={NewDetail} />
                    <Route path="/contact" component={Contact} />
            </div>
        );
    }
}

export default DieuHuongURL;