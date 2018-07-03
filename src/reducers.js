import { 
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants.js';

const initialStateSearch = {
  searchField: ''
};

export const searchRobots = (state=initialStateSearch, action={}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, {searchField: action.payload});
    default:
      return state;
  }
}

const initialStateRobots = {
  isPending: false,
  robots: [],
  error: ''
}

export const requestRobots = (state=initialStateRobots, action={}) => {
  let newState;
  switch(action.type) {
    case REQUEST_ROBOTS_PENDING:
      newState = { isPending: true };
      return Object.assign({}, state, newState);
    case REQUEST_ROBOTS_SUCCESS:
      newState = { robots: action.payload, isPending: false };
      return Object.assign({}, state, newState);
    case REQUEST_ROBOTS_FAILED:
      newState = { error: action.payload, isPending: false };
      return Object.assign({}, state, newState);
    default:
      return state;
  }
}