import ACTIONS from "../Actions";

const initialState = {
  users: [],
  user:{},
  isLogged: false,
  isAdmin: false,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN:
      return {
        ...state,
        isLogged: true,
      };
    case ACTIONS.GET_USER:
      return {
        ...state,
        user: action.payload.user,
        isAdmin: action.payload.isAdmin,
      };
    default:
      return state;
  }
};

export default AuthReducer;
