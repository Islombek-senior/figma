import { combineReducers, createStore } from "redux";
import { accountReducer } from "./feature/accounts/accountSlice";
import { customerReducer } from "./feature/customers/customerSlice";

export const store = createStore(
  combineReducers({
    account: accountReducer,
    customer: customerReducer,
  })
);
