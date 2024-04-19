import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import authReducer from "./reducers/authReducers";

import AppReducers from "./reducers/index";

const persistConfig = {
  key: "root",
  version: 1,
  storage: localStorage,
};

const persistedReducer = persistReducer(persistConfig, AppReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ immutableCheck: false, serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
