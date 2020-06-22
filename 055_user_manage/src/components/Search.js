import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
                <div className="col-4">
                    <div className="form-group">
                        <input type="text" name="fSearch" className="form-control" placeholder="Nhập từ khóa " aria-describedby="helpId" />
                        <div className="btn btn-info">Tìm</div>
                    </div>
                    <hr />
                </div>
        );
    }
}

export default Search;