import QuizType from "../types/QuizType";

class Quiz {
    private limit: number;

    constructor(limit :number) {
        this.limit = limit;
    }

    getLimit() :number {
        return this.limit;
    }
        

}