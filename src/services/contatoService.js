import { http } from "./config.http";

export const contactPost = (data) => http.post('/inscritos', data)