import {
  REGISTER,
  LOGIN,
  LOGOUT,
  SET_LOADING,
  AUTH_ERROR,
} from '../Action/types';

const initialState = {
  token: localStorage.getItem('token'),
  loading: null,
  error: null,
  isAuthenticated: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        isAuthenticated: true,
        loading: false,
        error: null,
      };
    case REGISTER:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        isAuthenticated: true,
        loading: false,
        error: null,
      };
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        error: null,
      };
    case AUTH_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        error: action.payload,
      };
    case SET_LOADING:
      return { ...state, loading: true };
    default:
      return { ...state };
  }
};
