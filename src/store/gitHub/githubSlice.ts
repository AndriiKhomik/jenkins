import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types";

const LS_FAVORITES_KEY = "rfk";

interface GithubState {
  favorites: IUser[];
}

const initialState: GithubState = {
  favorites: JSON.parse(localStorage.getItem(LS_FAVORITES_KEY) ?? "[]"),
};

export const githubSlice = createSlice({
  name: "github",
  initialState,
  reducers: {
    addToFavorite(state, action: PayloadAction<IUser>) {
      state.favorites.push(action.payload);
      localStorage.setItem(LS_FAVORITES_KEY, JSON.stringify(state.favorites));
    },
    removeFromFavorites(state, action: PayloadAction<IUser>) {
      state.favorites = state.favorites.filter(
        (f) => f.id !== action.payload.id
      );
      localStorage.setItem(LS_FAVORITES_KEY, JSON.stringify(state.favorites));
    },
  },
});

export const githubActions = githubSlice.actions;
export const githubReducer = githubSlice.reducer;
