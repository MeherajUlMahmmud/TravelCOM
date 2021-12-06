import axios from "axios";

const url = "http://localhost:5000";

export const createUser = (user) => {
  return axios.post(`${url}/create-user`, user);
};

export const getAllUsers = () => {
  return axios.get(`${url}/`);
};

export const getUserDetails = (uid) => {
  return axios.get(`${url}/user/${uid}`);
};

export const updateUserDetails = (user) => {
  return axios.patch(`${url}/update-user/${user.id}`, user);
};

export const createTour = (tour) => {
  return axios.post(`${url}/tour/create-tour`, tour);
};

export const getUpcomingTours = () => {
  return axios.get(`${url}/tour/upcoming-tours`);
};

export const getTourDetails = (tourId) => {
  return axios.get(`${url}/tour/${tourId}`);
};

export const updateTour = (id, post) => {
  return axios.patch(`${url}/${id}`, post);
};

export const deleteTour = (id) => {
  return axios.delete(`${url}/${id}`);
};
