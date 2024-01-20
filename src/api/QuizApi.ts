import QuizAPIType from "../models/QuizAPIType.model";
import QuizType from "../models/QuizType.model";
import api from "../utils/constants";
import { FetchData } from "./FetchData";



const QuizApi = async () : Promise<QuizType[]> =>{

    try {
        const data = await FetchData<QuizAPIType[]>(api);
        
        const finalData = data.map((item) => {
            const newItem : QuizType = {
                category : item.category,
                question : item.question,
                correct_answer : item.correct_answer,
                options : [...item.incorrect_answers , item.correct_answer]
            }

            return newItem;
        });

        return finalData;

    } catch (error) {
        console.error('Error in getting data from FETCHDATA.ts:');
        throw error;
    }
    

} 

export default QuizApi