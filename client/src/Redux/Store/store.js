import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../Reducers/AuthReducers";
import TokenReducer from "../Reducers/TokenReducers";
import UsersReducer from "../Reducers/UsersReducers";

const store = configureStore({
  reducer: {
    AuthReducer,
    TokenReducer,
    UsersReducer,
  },
});

export default store;
