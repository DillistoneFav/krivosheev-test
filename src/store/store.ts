import {combineReducers, configureStore} from "@reduxjs/toolkit";
import addressReducer from './reducers/Address/addressSlice'

const rootReducer = combineReducers({
    addressReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
