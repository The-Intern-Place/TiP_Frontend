import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

import AppReducers from "./reducers/index";

class DummyStorage implements Storage {
  length: number = 0;
  clear(): void {}
  getItem(_key: string): string | null {
    return null;
  }
  key(_index: number): string | null {
    return null;
  }
  removeItem(_key: string): void {}
  setItem(_key: string, _value: string): void {}
}

const persistConfig = {
  key: "root",
  version: 1,
  storage: typeof window !== "undefined" ? localStorage : new DummyStorage(),
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
