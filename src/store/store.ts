import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {APP_REDUCER_NAME, appReducer} from "./AppReducer.ts";
import {
    OBJECT_DETAILS_MODAL_REDUCER_NAME,
    ObjectDetailsModalReducer,
} from "../Modals/ObjectDetailsModal/store.ts";

const rootReducer = combineReducers({
    [APP_REDUCER_NAME]: appReducer,
    [OBJECT_DETAILS_MODAL_REDUCER_NAME]: ObjectDetailsModalReducer
});

export const store = configureStore({
    reducer: rootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch