import axios from 'axios';
import * as actionType  from '../types';
import { baseApi } from '../../api/baseApi';

// get leads

export const getUser = (username) => dispatch => {
  dispatch({ type: actionType.TOGGLE_LOADING });
  axios.get(`${baseApi}/${username}`)
    .then(res => {
      if (res.status === 200) {
        dispatch({ type: actionType.REDIRECT });
      };
      dispatch({
        type: actionType.GET_USER,
        payload: res.data
      });
    })
    .catch(err => console.log(err))
}





