import React, { Component } from 'react';

class EditUser extends Component {
    render() {
        return (
            <div className="col-12">
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
                </div>
        );
    }
}

export default EditUser;