import { combineReducers } from 'redux';
import authReducer from './auth';
//Combine reducers
const indexReducer = combineReducers({
  auth: authReducer,
});

export default indexReducer;
