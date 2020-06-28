import React, { Component } from 'react';
import {connect} from 'react-redux';

class News extends Component {

    // useEditStatusInStore = () => {
    //     var dispatch = this.props.dispatch;
    //     // var {dispath} = this.props;
    //     dispatch({type:'CHANGE_EDIT_STATUS'})
    // }

    render() {
        return (
            <div>
                <h2>Day la Component News</h2>
                <button onClick={() => this.props.useEditStatusInStore()}>Click di</button>              
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        editStatus: state.editStatus
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        useEditStatusInStore: () => {
            dispatch({type:'CHANGE_EDIT_STATUS'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(News);