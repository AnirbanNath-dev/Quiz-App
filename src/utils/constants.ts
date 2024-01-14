import { useSelector } from "react-redux";
import auth from "../types/authType";

const limit = useSelector<auth>(state =>  state.limit)


// const TOKEN: string = import.meta.env.VITE_QUIZAPP_TOKEN;  //not needed for this api 


const api = `https://opentdb.com/api.php?amount=${limit}&type=multiple`

export default api