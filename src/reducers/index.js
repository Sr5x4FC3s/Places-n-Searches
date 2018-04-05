import { combineReducers } from 'redux';
import { term, result } from './functions.js';
import { reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  result,
  term,
  form: formReducer
});

export default rootReducer;