export const ROUTES = {
  postList: "/",
  postDetails: (id) => (id ? `/posts/${id}` : "/posts/:id"),
  addPost: "/add-post",
};

export const ENDPOINTS = {
  posts: "posts",
  postDetails: (id) => `posts/${id}`,
};

export const API_URL = "http://localhost:3000/";
