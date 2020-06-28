import React, { Component } from 'react';

class App extends Component {
  render() {
    var redux = require('redux');
    var oldState = {
      num: ["man hinh", "chuot", "ban phim"],
      editStatus: false
    }
    var reducer1 = (state = oldState, action) => {
      switch (action.type) {
        case "CHANGE_EDIT_STATUS":
          return {...state, editStatus: !state.editStatus}
        case "ADD_NEW":
          return {...state, num: [...state.num, action.newItem]}
        case "DELETE":
          return {...state, num: state.num.filter((value, key) => 
            key !== action.index
          )}
        default:
          break;
      }
      return state;
    }
    var store1 = redux.createStore(reducer1);
    store1.subscribe(() => {
      console.log(store1.getState())
    })

    store1.dispatch({type:"CHANGE_EDIT_STATUS"});

    store1.dispatch({
      type:"ADD_NEW",
      newItem: "Tai nghe"
    });

    store1.dispatch({
      type:"DELETE",
      index: 0
    });

    return (
      <div>
        <News />
      </div>
    );
  }
}

export default App;
