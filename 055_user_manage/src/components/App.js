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
              <TableData dataUser={ketqua}/>
              <AddUser hienThiForm={this.state.hienThiForm} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
