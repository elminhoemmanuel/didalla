import { combineReducers } from 'redux'
import { authReducer } from './auth';
import { vendorFeedReducer } from './vendorFeed';
import {  persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'



const persistConfig = {
  key: 'root',
  storage,
  whitelist:['auth']
}

const rootReducer = combineReducers({
    auth: authReducer,
    vendorFeed: vendorFeedReducer,
});

export default persistReducer(persistConfig, rootReducer);