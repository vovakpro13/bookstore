import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import { Languages } from 'constants/languages';
import { getDeviceLanguage } from 'modules/common/helpers/getDeviceLanguage';

const initialState = {
    language: getDeviceLanguage(),
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setLanguage: (state, { payload }: PayloadAction<Languages>) => {
            state.language = payload;
        },
    },
});

export const selectLanguage = (state: RootState) => state.app.language;

export const { setLanguage } = appSlice.actions;
export default appSlice.reducer;
