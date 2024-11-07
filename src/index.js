import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// import { createStore } from 'redux'

// const initialState = {
//   count: 0,
//   step: 0
// }

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { ...state, count: state.count + 1 }
//     case 'DECREMENT':
//       return { ...state, count: state.count - 1 }
//     case 'MULTIPLAY':
//       return { ...state, count: state.count * action.payload }
//     case 'INCREMENT_STEP':
//       return { ...state, step: state.step + 1 }
//     default:
//       return state;
//   }
// }

// const store = createStore(reducer)

// console.log(store.getState());

// store.dispatch({ type: 'INCREMENT' })

// console.log(store.getState());

// store.dispatch({ type: 'DECREMENT' })

// console.log(store.getState());

// store.dispatch({ type: 'MULTIPLAY', payload: 4 })

// console.log(store.getState());

// store.dispatch({ type: 'INCREMENT_STEP' })

// console.log(store.getState());

// import "./Store"
