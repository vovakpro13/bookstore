import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { useDispatch } from 'react-redux';
import { persistStore } from 'redux-persist';
import rootReducer from 'redux/slices';

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [logger],
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const persistor = persistStore(store);
export default store;
