import {$host} from "../../axiosConfig";
import {AppDispatch} from "../../store";
import {addressSlice} from "./addressSlice";

const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";

export const fetchAddresses = (query: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(addressSlice.actions.addressFetching)
        await $host.post(url, {query: query, count: 20}).then((res) => {
            const response = res.data.suggestions
            dispatch(addressSlice.actions.addressFetchingSuccess(response))
        })
    } catch (error) {
        if (error instanceof Error) {
            dispatch(addressSlice.actions.addressFetchingError(error.message))
        }
    }
}

