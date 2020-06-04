import React from 'react';
import Course from './Course';

class MainComponent extends React.Component {
    render() {
        return(
            <div className="row">
                <Course name = "React Js" free = "true"/>
                <Course name = "Spring Boot" free = "false"/>
                <Course name = "Python" free = "true"/>                  
            </div>
        );
    }
}

export default MainComponent;
