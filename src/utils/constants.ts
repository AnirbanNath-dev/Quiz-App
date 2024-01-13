import { useSelector } from "react-redux";
import auth from "../types/authType";

const limit = useSelector<auth>(state =>  state.limit)
const TOKEN: string = import.meta.env.VITE_QUIZAPP_TOKEN;

const api = `https://quizapi.io/api/v1/questions?apiKey=${TOKEN}&limit=${limit}`

export default api