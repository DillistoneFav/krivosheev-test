import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IAddress} from "../../../interfaces/IAddress";

interface addressState {
    userAddresses: IAddress[];
    isLoading: boolean;
    error: string;
}

const initialState: addressState = {
    userAddresses: [],
    isLoading: false,
    error: '',
}

export const addressSlice = createSlice({
    name: 'address',
    initialState,
    reducers: {
        addressFetching(state) {
            state.isLoading = true;
        },
        addressFetchingSuccess(state, action: PayloadAction<IAddress[]>) {
            state.isLoading = false;
            state.userAddresses = action.payload
            state.error = ''
        },
        addressFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default addressSlice.reducer;
