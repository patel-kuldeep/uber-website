import api from "./api"
import { END_POINTS } from "./endPoints"

export const registerCaptain = (data) => {
    return api.post(END_POINTS.CAPTAIN_REGISTER, data)
}
export const loginCaptain = (data) => {
    return api.post(END_POINTS.CAPTAIN_LOGIN, data)
}