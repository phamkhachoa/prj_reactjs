import React, { Component } from 'react';

class NewsRelated extends Component {
    render() {
        return (
            <div className="card">
                <img className="card-img-top" src="http://placehold.it/300x200" alt="" />
                <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Text</p>
                </div>
            </div>
        );
    }
}

export default NewsRelated;