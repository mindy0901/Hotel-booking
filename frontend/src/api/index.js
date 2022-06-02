import axios from "axios";

const BASE_URL = "https://mindy-booking.herokuapp.com/api/"

export const publicRequest = axios.create({
      baseURL: BASE_URL,
});

export const fetchHotelsCountByCity = (cities) => publicRequest.get(`/hotels/countByCity?cities=${cities}`)
export const fetchHotelsCountByType = () => publicRequest.get("/hotels/countByType")

export const fetchHotelById = (id) => publicRequest.get(`/hotels/${id}`)
export const fetchMostBookedHotels = () => publicRequest.get("/hotels?featured=true&limit=8")
export const fetchHotelsBySearch = (query) => publicRequest.get(`/hotels?country=${query.country}&min=${query.min || 0}&max=${query.max || 10000}`)
export const fetchHotelRooms = (id) => publicRequest.get(`/hotels/room/${id}`);
export const updateRoomAvailability = (id, dates) => publicRequest.put(`/rooms/availability/${id}`, { dates: dates })

export const authSignIn = (form) => publicRequest.post("/auth/login", form);
export const authSignUp = (form) => publicRequest.post("/auth/register", form);


