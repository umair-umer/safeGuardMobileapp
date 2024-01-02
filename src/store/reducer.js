import { combineReducers } from 'redux';
import savedJobsReducer from './savedJobsReducer';
import authReducer from './authReducer';
import { LoginauthReducer } from './loginreducer';
import userDataReducer from './userdatareducer';

const rootReducer = combineReducers({
  savedJobs: savedJobsReducer,
  auth:authReducer,
  logiToken:LoginauthReducer,
  UserData:userDataReducer
  // Add other reducers here
});

export default rootReducer;