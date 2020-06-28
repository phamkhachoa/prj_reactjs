var redux = require('redux');

const numInitialState = ["man hinh", "chuot", "ban phim"];
const editStatusInitialState = false;

const numReducer = (state = numInitialState, action) => {
    switch (action.type) {
        case "ADD_NEW":
            return [...state, action.newItem]
        case "DELETE":
            return [
                state.filter((value, key) =>
                    key !== action.index
                )
            ]
        default:
            return state
    }
}


const editStatusReducer = (state = editStatusInitialState, action) => {
    switch (action.type) {
        case "CHANGE_EDIT_STATUS":
            return { editStatus: !state }
        default:
            return state
    }
}

const allReducers = redux.combineReducers({
    num: numReducer,
    editStatus: editStatusReducer

})

var store = redux.createStore(allReducers);

store.subscribe(() => {
    console.log(store.getState());
});

//store.dispatch({ type: "CHANGE_EDIT_STATUS" });

// store.dispatch({
//     type: "ADD_NEW",
//     newItem: "Tai nghe"
// });

// store.dispatch({
//     type: "DELETE",
//     index: 0
// });

export default store;