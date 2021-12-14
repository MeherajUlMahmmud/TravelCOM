import axios from "axios";

const url = "http://localhost:8000";

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

export const getBookingClosedTours = () => {
  return axios.get(`${url}/tour/booking-closed`);
};

export const getCompletedTours = () => {
  return axios.get(`${url}/tour/completed-tours`);
};

export const getTourDetails = (tourId) => {
  return axios.get(`${url}/tour/${tourId}`);
};

export const updateTour = (tour) => {
  console.log(tour);
  return axios.patch(`${url}/tour/update-tour/${tour.tourId}`, tour);
};

export const deleteTour = (id) => {
  console.log(id);
  return axios.delete(`${url}/tour/delete-tour/${id}`);
};

export const bookingTour = (booking) => {
  return axios.post(`${url}/tour/booking-tour/${booking.tourId}`, booking);
};

export const closeBooking = (tourId) => {
  return axios.patch(`${url}/tour/close-booking/${tourId}`);
};

export const completeTour = (tourId) => {
  console.log(tourId);
  return axios.patch(`${url}/tour/complete-tour/${tourId}`);
};

export const getBookedTourByTourIdAndUserId = (data) => {
  return axios.get(`${url}/tour/booked-tour/${data.tourId}/${data.userId}`, data);
};

export const checkBookingByUser = (userId) => {
  return axios.get(`${url}/tour/check-booking/${userId}`);
}

export const getToursByUserId = (userId) => {
  return axios.get(`${url}/tour/tours-by-user-id/${userId}`);
}

export const getBookedToursByUserId = (userId) => {
  return axios.get(`${url}/tour/booked-tours-by-user-id/${userId}`);
}

export const getCompletedToursByUserId = (userId) => {
  return axios.get(`${url}/tour/completed-tours-by-user-id/${userId}`);
}
