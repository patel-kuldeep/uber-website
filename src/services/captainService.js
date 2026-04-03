import api from "./api"
import { END_POINTS } from "./endPoints"

export const registerCaptain = async (data) => {
    const response = await api.post(END_POINTS.CAPTAIN_REGISTER, data)
    return response.data
}
export const loginCaptain = async (data) => {
    const response = await api.post(END_POINTS.CAPTAIN_LOGIN, data)
    return response.data
}