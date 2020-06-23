import React, { Component } from 'react';

class Search extends Component {
    
    hienThiBtn = () => {
        if (this.props.hienThiForm === true) {
            return (
                <div className="btn btn-block btn-outline-secondary" onClick ={this.props.doiTrangThai}>Đóng Lại</div>
            )
        } else {
            return (
                <div className="btn btn-block btn-outline-info" onClick ={this.props.doiTrangThai}>Thêm Mới</div>
            )
        }
    }

    render() {
        return (
                <div className="col-4">
                    <div className="form-group">
                        <input type="text" name="fSearch" className="form-control" placeholder="Nhập từ khóa " aria-describedby="helpId" />
                        <div className="btn btn-info">Tìm</div>
                    </div>
                    <hr />
                    {this.hienThiBtn()}               
                </div>
        );
    }
}

export default Search;