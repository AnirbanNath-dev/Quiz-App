import { useSelector } from "react-redux";
import auth from "../types/authType";

const limit = useSelector<auth>(state =>  state.limit)


//not needed for this api 
// const TOKEN: string = import.meta.env.VITE_QUIZAPP_TOKEN;  


const api = `https://opentdb.com/api.php?amount=${limit}&type=multiple`

export default api