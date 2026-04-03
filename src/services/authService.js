import api from "./api";
import { END_POINTS } from "./endPoints";


export const registerUser = async (data) => {
    const response = await api.post(END_POINTS.USER_REGISTER, data);
    return response.data;
};

export const loginUser = async (data) => {
    const response = await api.post(END_POINTS.USER_LOGIN, data);
    return response.data;
};