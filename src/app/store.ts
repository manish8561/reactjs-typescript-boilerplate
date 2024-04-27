import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import loaderReducer from "./features/loader/loaderSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["counter"],
};

const rootReducer = combineReducers({
  counter: counterReducer,
  loader: loaderReducer,
  // your reducers
});
// ...

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({ reducer: persistedReducer });
export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
