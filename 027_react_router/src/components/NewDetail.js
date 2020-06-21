import React, { Component } from 'react';
import data from './data.json';
import NewsRelated from './NewsRelated';

class NewDetail extends Component {
    render() {
        return (
            <div>
                <header className="masthead tintuc">
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-lg-7 my-auto">
                                <div className="header-content mx-auto">
                                    <h1 className="mb-5">Trang chi tiết tin</h1>
                                    <a href="#download" className="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a>
                                </div>
                            </div>
                            <div className="col-lg-5 my-auto">
                                <div className="device-container">
                                    <div className="device-mockup iphone6_plus portrait white">
                                        <div className="device">
                                            <div className="screen">
                                                {/* Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! */}
                                                <img src="https://blackrockdigital.github.io/startbootstrap-new-age/img/demo-screen-1.jpg" className="img-fluid" alt="" />
                                            </div>
                                            <div className="button">
                                                {/* You can hook the "home button" to some JavaScript events or just remove it */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* Begin tin tuc */}
                {
                    data.map((value, key) => {
                        if(value.id == this.props.match.params.id) {
                            return (
                                <div className="jumbotron jumbotron-fluid" key={key}>
                                <div className="container">
                                    <img src={value.imgSrc} alt="" className="img-fluid rong100" />
                                    <h3 className="lead">{value.tieuDe}</h3>
                                    <hr className="my-2" />
                                    <p>{value.noiDung}</p>
                                </div>
                            </div>
                            )
                        }
                    })
                }
                <div className="container">
                    <div className="card border-primary">
                        <img className="card-img-top" src="holder.js/100px180/" alt="" />
                        <div className="card-body">
                            <h4 className="card-title">Tin lien quan</h4>
                            <p className="card-text">Text</p>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="card-deck">
                            <NewsRelated />
                            <NewsRelated />
                            <NewsRelated />
                            <NewsRelated />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewDetail;