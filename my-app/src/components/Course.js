import React from 'react';
import Lesson from './Lesson';

class Course extends React.Component {

    showButtonFree(){
        if (this.props.free === "true") {
            return (<div className="panel-footer">
                            
            <button type="button" class="btn btn-warning" >View</button>
            
</div>);
        }
    }

    render() {
        return( 
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="panel panel-info">
                          <div className="panel-heading">
        <h3 className="panel-title">{this.props.name}</h3>
                          </div>
            <div className="panel-body">
                            <Lesson />
                            <Lesson />
                            <Lesson />
            </div>
            {this.showButtonFree()}
            </div>
            </div>
        );
    }
}

export default Course;
