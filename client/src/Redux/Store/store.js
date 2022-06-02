import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../Reducers/AuthReducers";
import TokenReducer from "../Reducers/TokenReducers";

const store = configureStore({
  reducer: {
    AuthReducer,
    TokenReducer
  },
});

export default store;
