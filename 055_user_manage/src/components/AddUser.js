import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
           trangThaiChinhSua : false 
        }
    }
    
    thayDoiTrangThai = () => {
        this.setState ({
            trangThaiChinhSua : !this.state.trangThaiChinhSua
        });
    }

    hienThiNut = () => {
        if (this.state.trangThaiChinhSua === true) {
            return(
                <div className="btn btn-block btn-outline-secondary" onClick={() => this.thayDoiTrangThai()}>Đóng Lại</div>
            )
        } else {
            return(
                <div className="btn btn-block btn-outline-info" onClick={() => this.thayDoiTrangThai()}>Thêm Mới</div>
            )
        }
    }

    hienThiAddForm = () => {
        if (this.state.trangThaiChinhSua === true) {
            return(
                <div className="card border-primary text-left mt-2">
                    <div className="card-body text-primary">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Tên User" aria-describedby="helpId" />
                        </div>
                        <br />
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Điện Thoại" aria-describedby="helpId" />
                        </div>
                        <br />
                        <div className="form-group">
                            <select className="custom-select" required>
                                <option value>Chọn Quyền</option>
                                <option value={1}>Admin</option>
                                <option value={2}>Modrator</option>
                                <option value={3}>Normal</option>
                            </select>
                        </div>
                        <br />
                        <div className="form-group">
                            <div className="btn btn-primary">Thêm Mới</div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return;
        }
    }
    
    render() {
        return (
            <div className="col-3">
                {this.hienThiNut()}
                {this.hienThiAddForm()}   
            </div>
        );
    }
}

export default AddUser;