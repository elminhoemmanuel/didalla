import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk';
import {createStore ,applyMiddleware} from 'redux';
import rootReducer from './reducers/CombinedReducer';
import { persistStore, persistReducer } from 'redux-persist'


export const store = createStore(rootReducer,
   composeWithDevTools(applyMiddleware(thunkMiddleware)));

export const persistor = persistStore(store);

export default {store, persistor};