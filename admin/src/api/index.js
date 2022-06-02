import axios from "axios";

const BASE_URL = "https://mindy-booking.herokuapp.com/api/"

export const publicRequest = axios.create({
      baseURL: BASE_URL,
});

// REMEMBER TO CHECK THE METHOD

export const fetchDataByPath = (path) => publicRequest.get(`/${path}`)
export const delDataByPath = (path, id) => publicRequest.delete(`/${path}/${id}`)

export const fetchHotels = () => publicRequest.get("/hotels")
export const createHotelAxios = (form) => publicRequest.post("/hotels", form)

export const fetchRooms = () => publicRequest.get("/rooms");
export const createRoomAxios = (hotelId, form) => publicRequest.post(`/rooms/${hotelId}`, form)

export const authSignIn = (form) => publicRequest.post("/auth/login", form);
export const authSignUp = (form) => publicRequest.post("/auth/register", form);
