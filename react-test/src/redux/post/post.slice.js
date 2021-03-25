import { createSlice } from "@reduxjs/toolkit";

import { ENDPOINTS } from "utils/constants";
import apiClient from "utils/apiClient";

export const initialState = {
  posts: [],
  fetching: false,
  createSuccess: false,
  error: "",
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    requestInProgress(state) {
      state.fetching = true;
    },
    fetchPostsSuccess(state, action) {
      state.posts = action.payload;
    },
    fetchError(state, action) {
      state.error = action.payload;
      state.fetching = false;
    },
  },
});
export const {
  fetchPostsSuccess,
  fetchError,
  requestInProgress,
} = postSlice.actions;

export function fetchPosts() {
  return function (dispatch) {
    dispatch(requestInProgress());
    return apiClient
      .get(ENDPOINTS.posts)
      .then((response) => {
        dispatch(fetchPostsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchError(error.toString()));
      });
  };
}
export default postSlice.reducer;
