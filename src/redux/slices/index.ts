import { combineReducers } from '@reduxjs/toolkit';
import appReducer from 'redux/slices/app';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'root',
    version: 1,
    storage: AsyncStorage,
    blacklist: ['language'],
};

const rootReducer = combineReducers({
    app: persistReducer(persistConfig, appReducer),
});

export default rootReducer;
