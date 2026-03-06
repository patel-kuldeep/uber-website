import api from "./api";
import { END_POINTS } from "./endPoints";


export const registerUser = (data) => {
    return api.post(END_POINTS.USER_REGISTER, data);
};

export const loginUser = (data) => {
    return api.post(END_POINTS.USER_LOGIN, data);
};