import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

// Define a type for the slice state
export interface LoaderState {
  value: boolean;
}

// Define the initial state using that type
const initialState: LoaderState = {
  value: false,
};

export const loaderSlice = createSlice({
  name: "loader",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    showHideLoader: (state) => {
      state.value = !state.value;
    },
  },
});

export const { showHideLoader } = loaderSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectLoader = (state: RootState) => state.loader.value;

export default loaderSlice.reducer;
