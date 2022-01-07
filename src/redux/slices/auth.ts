import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface InitialStateType {
    accessToken: string | null;
    refreshToken: string | null;
    userId: string | null;
}

interface CredentialsPayload {
    accessToken: string;
    refreshToken: string;
    userId: string;
}

const initialState: InitialStateType = {
    accessToken: null,
    refreshToken: null,
    userId: null,
};

const authSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setCredentials: (state, { payload }: PayloadAction<CredentialsPayload>) => {
            return payload;
        },

        logOut: () => initialState,
    },
});

export const selectAccessToken = (state: RootState) => state.auth.accessToken;

export const { setCredentials } = authSlice.actions;
export default authSlice.reducer;
