import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data.json';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm: true,
      dataUser: DataUser,
      textSearch: ''
    }
  }

  doiTrangThai = () => {
    this.setState({
      hienThiForm : !this.state.hienThiForm
    });
  }

  getTextSearch = (dl) => {
    this.setState({
      textSearch: dl
    })
    console.log(this.state.textSearch)
  }
  getNewUserData = (name, tel, permission) => {
    var item = {};
        item.id = uuidv4();;
        item.name = name;
        item.tel = tel;
        item.permission = permission;
    var items = this.state.dataUser;
    items.push(item);
    this.setState({
      dataUser: items
    })
  }

  editUser = (user) => {
    console.log('ket noi ok');
    console.log(user);
  }
  
  render () {
    var ketqua = []
    this.state.dataUser.forEach(element => {
      if(element.name.indexOf(this.state.textSearch) !== -1) {
        ketqua.push(element)
      }
    });
    return (
      <div>
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search doiTrangThai={() => this.doiTrangThai()} hienThiForm={this.state.hienThiForm} getTextSearch = {(dl) => this.getTextSearch(dl)}/>
            </div>
            <div className="row">
              <TableData dataUser={ketqua} editUser = {(user) => this.editUser(user)}/>
              <AddUser hienThiForm={this.state.hienThiForm} getNewUserData = {(name, tel, permisson) => {this.getNewUserData(name, tel, permisson)}}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
