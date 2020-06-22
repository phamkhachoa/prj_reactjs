import React, { Component } from 'react';

class TableData extends Component {
    render() {
        return (
            <div className="col-9">
  <table className="table table-striped table-hover">
    <thead className="thead-inverse">
      <tr>
        <th>STT</th>
        <th>Tên</th>
        <th>Điện Thoại</th>
        <th>Quyền</th>
        <th>Thao Tác</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td >1</td>
        <td>Hòa Phạm</td>
        <td>0909090909</td>
        <td>Admin</td>
        <td>
          <div className="btn btn-warning sua"><i className="fa fa-edit" /> Sửa</div>
          <div className="btn btn-danger xoa"><i className="fa fa-edit" /> Xóa</div>
        </td>
      </tr>
      <tr>
        <td >1</td>
        <td>Hòa Phạm</td>
        <td>0909090909</td>
        <td>Admin</td>
        <td>
          <div className="btn btn-warning sua"><i className="fa fa-edit    " /> Sửa</div>
          <div className="btn btn-danger xoa"><i className="fa fa-edit    " /> Xóa</div>
        </td>
      </tr>
      <tr>
        <td >1</td>
        <td>Hòa Phạm</td>
        <td>0909090909</td>
        <td>Admin</td>
        <td>
          <div className="btn btn-warning sua"><i className="fa fa-edit    " /> Sửa</div>
          <div className="btn btn-danger xoa"><i className="fa fa-edit    " /> Xóa</div>
        </td>
      </tr>
      <tr>
        <td >1</td>
        <td>Hòa Phạm</td>
        <td>0909090909</td>
        <td>Admin</td>
        <td>
          <div className="btn btn-warning sua"><i className="fa fa-edit    " /> Sửa</div>
          <div className="btn btn-danger xoa"><i className="fa fa-edit    " /> Xóa</div>
        </td>
      </tr>
    </tbody>
  </table>
</div>

        );
    }
}

export default TableData;