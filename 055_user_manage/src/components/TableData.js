import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {

  mappingDataUser = () => {
    return (
      this.props.dataUser.map((value, key) => (
        <TableDataRow dataUser = {value} keys={key} key={key} editUser= {(user) => this.props.editUser(value)}/>
      ))
    )
    
  }

  render() {
    return (
      <div className="col">
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
            {this.mappingDataUser()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableData;