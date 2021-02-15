import { combineReducers } from 'redux';
import authReducer from './authReducer';
import adminReducer from './adminReducer';
import customerReducer from './customerReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  admin: adminReducer,
  customer: customerReducer
});
export default rootReducer;
