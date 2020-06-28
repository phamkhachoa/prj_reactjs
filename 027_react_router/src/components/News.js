import React, { Component } from 'react';
import NewsItem from './NewsItem';
import data from './data.json'

class News extends Component {
    constructor(props) {
        super(props);
        console.log("Contructor News reacted!")
    }
    
    render() {
        return (
            <div>
                <header className="masthead tintuc">
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-lg-7 my-auto">
                                <div className="header-content mx-auto">
                                    <h1 className="mb-5">Trang danh sách tin tức</h1>
                                    <a href="/download" className="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a>
                                </div>
                            </div>
                            <div className="col-lg-5 my-auto">
                                <div className="device-container">
                                    <div className="device-mockup iphone6_plus portrait white">
                                        <div className="device">                                      
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

                <div className="container">
                    <div className="row mt-3">
                        {
                            data.map((value, key) => {
                                return (
                                    <NewsItem imgSrc={value.imgSrc} tieuDe={value.tieuDe}
                                        trichDan={value.trichDan} tinId={value.id} key={key}/>                                  
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default News;