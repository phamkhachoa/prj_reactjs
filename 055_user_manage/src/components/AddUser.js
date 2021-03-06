import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
           trangThaiChinhSua : false,
           id: "",
           name: "",
           tel: "",
           permission: ""
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })

        // package to item
        var item = {};
        item.id = this.state.id;
        item.name = this.state.name;
        item.tel = this.state.tel;
        item.permission = this.state.permission;
        this.setState({
            item: item
        })
    }
    
    kiemTraTrangThai = () => {
        if (this.props.hienThiForm === true) {
            return(
                <div className="card border-primary text-left mt-2">
                    <form>
                    <div className="card-body text-primary">
                        <div className="form-group">
                            <input type="text" name="name" onChange={(event) => this.isChange(event)} className="form-control" placeholder="Tên User" aria-describedby="helpId" />
                        </div>
                        <br />
                        <div className="form-group">
                            <input type="text" name="tel" onChange={(event) => this.isChange(event)} className="form-control" placeholder="Điện Thoại" aria-describedby="helpId" />
                        </div>
                        <br />
                        <div className="form-group">
                            <select className="custom-select" name="permission" onChange={(event) => this.isChange(event)} required>
                                <option value>Chọn Quyền</option>
                                <option value={1}>Admin</option>
                                <option value={2}>Modrator</option>
                                <option value={3}>Normal</option>
                            </select>
                        </div>
                        <br />
                        <div className="form-group">
                            {/* <div className="btn btn-primary" onClick = {() => this.props.getNewUserData(this.state.name, this.state.tel, this.state.permission)}>Thêm Mới</div> */}
                            <input className="btn btn-primary" type="reset" onClick = {() => this.props.getNewUserData(this.state.name, this.state.tel, this.state.permission)} value="Add New"/>
                        </div>
                    </div>
                    </form>
                </div>
            )
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
    
    render() {
        return (
            <div>
                {this.kiemTraTrangThai()}   
            </div>
        );
    }
}

export default AddUser;