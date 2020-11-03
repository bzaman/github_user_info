import * as actionType  from '../types';

const initialState = {
  user: [],
  redirect: false,
  loading: false
}

const userInfoReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionType.TOGGLE_LOADING: 
      return {
        ...state,
        loading : !state.loading
      };
    case actionType.REDIRECT: 
      return {
        ...state,
        redirect : !state.redirect
      };
    case actionType.GET_USER: 
      return {
        ...state,
        user: action.payload,
        loading: false,
        redirect: true,
      };

    // case actionType.DELETE_LEAD: 
    //   return {
    //     ...state,
    //     leads: state.leads.filter(lead => lead.id !== action.payload)
    //   };

    // case actionType.ADD_LEAD: 
    //   return {
    //     ...state,
    //     leads: [...state.leads, action.payload]
    //   };

    default: 
      return state;
  }
}

export default userInfoReducer;
