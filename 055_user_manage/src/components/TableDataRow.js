import React, { Component } from 'react';

class TableDataRow extends Component {
    permissionShow = () =>{
        if (this.props.dataUser.permission === 1) {
            return (
                <td>Admin</td>
            )
        } else if (this.props.dataUser.permission === 2) {
            return (
                <td>Modarator</td>
            )
        } else {
            return (
                <td>Normal</td>
            )
        }
    }
    render() {
        return (
            <tr>
                <td >{this.props.keys}</td>
                <td>{this.props.dataUser.name}</td>
                <td>{this.props.dataUser.tel}</td>
                {this.permissionShow()}
                <td>
                    <div className="btn btn-warning sua" onClick={this.props.editUser} ><i className="fa fa-edit  " /> Sửa</div>
                    <div className="btn btn-danger xoa"><i className="fa fa-edit    " /> Xóa</div>
                </td>
            </tr>

        )
    }

}

export default TableDataRow;