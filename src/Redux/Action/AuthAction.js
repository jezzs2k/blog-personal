import axios from 'axios';

import { REGISTER, LOGIN, LOGOUT, SET_LOADING, AUTH_ERROR } from './types';
import setToken from '../../utils/setToken';

export const Login = (data) => async (dispatch) => {
  try {
    setLoading();
    const config = {
      headers: {
        'content-type': 'application/json',
      },
    };

    console.log(data);
    // const res = await axios.post('link', data, config);

    // dispatch({
    //   type: LOGIN,
    //   payload: res,
    // });
  } catch (error) {
    dispatch({ type: AUTH_ERROR, dispatch: error });
  }
};

export const Register = (data) => async (dispatch) => {
  try {
    setLoading();
    const config = {
      headers: {
        'content-type': 'application/json',
      },
    };

    console.log(data);

    // const res = await axios.post('link', data, config);

    // dispatch({
    //   type: REGISTER,
    //   payload: res,
    // });
  } catch (error) {
    dispatch({ type: AUTH_ERROR, dispatch: error });
  }
};

export const Error = (error) => (dispatch) => {
  console.log(error);
  dispatch({ type: AUTH_ERROR, payload: error });
};

export const Logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};

export const setLoading = () => (dispatch) => {
  dispatch({ type: SET_LOADING });
};
