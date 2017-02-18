import { combineReducers } from 'redux';
import { CREATE_CLIENT, FETCH_ClIENTS } from '../actions';
// import ReducerPosts from './reducer_posts';
// import {reducer as formReducer} from 'redux-form';

const INITIAL_STATE = {
  all: []
};

function ReducerClients(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CREATE_CLIENT:
    console.log('reducer posts: case FETCH_POSTS');
    return { ...state, all: [ ...state.all, action.payload] }
  case FETCH_ClIENTS:
    return { ...state, all: action.payload}
  default:
    return state;
  }
}


const rootReducer = combineReducers({
  clients: ReducerClients
  // form: reduxFormReducer
});

export default rootReducer;
