import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data.json'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm: true,
      dataUser: DataUser
    }
  }

  doiTrangThai = () => {
    this.setState({
      hienThiForm : !this.state.hienThiForm
    });
  }
  
  render () {
    return (
      <div>
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search doiTrangThai={() => this.doiTrangThai()} hienThiForm={this.state.hienThiForm} />
              <TableData dataUser={this.state.dataUser}/>
              <AddUser hienThiForm={this.state.hienThiForm} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
