import { combineReducers } from 'redux'
import { testReducer } from './test';
import {  persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'



const persistConfig = {
  key: 'root',
  storage,
  whitelist:['test']
}

const rootReducer = combineReducers({
    test: testReducer,
});

export default persistReducer(persistConfig, rootReducer);