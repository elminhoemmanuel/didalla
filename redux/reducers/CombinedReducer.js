import { combineReducers } from 'redux'
import { authReducer } from './auth';
import { vendorFeedReducer } from './vendorFeed';
import { vendorCampaignsReducer } from './vendorCampaigns';
import { miscReducer } from './misc';
import {  persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'



const persistConfig = {
  key: 'root',
  storage,
  whitelist:['auth', "vendorFeed", "misc"]
}

const rootReducer = combineReducers({
    auth: authReducer,
    vendorFeed: vendorFeedReducer,
    misc: miscReducer,
    vendorCampaigns: vendorCampaignsReducer,
});

export default persistReducer(persistConfig, rootReducer);