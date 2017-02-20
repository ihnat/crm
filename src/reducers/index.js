import { combineReducers } from 'redux';
import { CREATE_CLIENT, CREATE_HUNDRED_CLIENTS, FETCH_ClIENTS, UPDATE_CLIENT } from '../actions';
// import ReducerPosts from './reducer_posts';
// import {reducer as formReducer} from 'redux-form';

const INITIAL_STATE = {
  all: []
};

function ReducerClients(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CREATE_CLIENT:
    return { ...state, all: [ ...state.all, action.payload] };
  case CREATE_HUNDRED_CLIENTS:
    return { ...state, all: [ ...state.all, ...action.payload] };
  case FETCH_ClIENTS:
    return { ...state, all: action.payload};
  case UPDATE_CLIENT:
    let index = state.all.findIndex((client) => {
      return client.id === action.payload.id;
    });
    return { ...state, all: [ ...state.all.slice( 0, index), action.payload, ...state.all.slice( index+1 )]};
  default:
    return state;
  }
}

const rootReducer = combineReducers({
  clients: ReducerClients
  // form: reduxFormReducer
});

export default rootReducer;
