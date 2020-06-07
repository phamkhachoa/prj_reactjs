import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangThai: 0
        }
    }
    
    editClick = () => {
        this.setState({
            trangThai: 1
        });
    }

    saveClick = () => {
        this.setState({
            trangThai: 0
        });
    }

    renderBtn = () => {
        return (
            <div className="form-group">
            <div className="btn btn-info" onClick={() => this.editClick()}> Edit</div>
            </div>
        );
        
    }

    renderForm = () => {
        return (
            <div className="form-group">
                    <input type="text" defaultValue={this.props.title} className="form-control" id aria-describedby="helpId" placeholder />
                    <hr/>
                    <div className="btn btn-success" onClick={() => this.saveClick()}> Save</div>
                </div>
        );   
    }

    displayCheck = () => {
        if (this.state.trangThai === 0) {
            return this.renderBtn();
        } else {
            return this.renderForm();
        }
    }

    render() {
        return (
            <section>
        <div className="container">
          <div className="row align-items-center">
            <div className={"col-lg-6 " + this.props.vitri}>
              <div className="p-5">
                <img className="img-fluid rounded-circle" src={this.props.imgSrc} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="p-5">
                <h2 className="display-4">{this.props.title}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                {this.displayCheck()}
              </div>
            </div>
          </div>
        </div>
      </section>
        );
    }
}

export default Content;