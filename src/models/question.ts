export class Question {
    category : string;
    type : string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
    answers: string[];
    user_answer: string;
    is_right_answer: boolean;

    constructor(){
        this.user_answer = "Not Chosen";
    }
}
