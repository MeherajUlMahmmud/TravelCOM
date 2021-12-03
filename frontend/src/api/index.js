import axios from "axios";

const url = "http://localhost:5000";

export const createUser = (user) => {
  return axios.post(`${url}/create-user`, user);
};

export const getAllUsers = () => {
  return axios.get(`${url}/`);
};

export const getUserDetails = (uid) => {
  console.log("getUserDetails", uid );
  return axios.get(`${url}/user/${uid}`);
};

export const fetchUpcomingTours = () => {
  return axios.get(url);
};

export const createPost = (post) => {
  return axios.post(url, post);
};

export const updatePost = (id, post) => {
  return axios.patch(`${url}/${id}`, post);
};

export const deletePost = (id) => {
  return axios.delete(`${url}/${id}`);
};

export const likePost = (id) => {
  return axios.patch(`${url}/${id}/likePost`);
};
