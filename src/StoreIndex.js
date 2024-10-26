import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { thunk } from "redux-thunk"
import commonReducer from 'Redux/Slices/Common_Slice/Common_slice';

const reducers = combineReducers({
    commonState: commonReducer,
})

const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }).concat(thunk)
})

export default store;