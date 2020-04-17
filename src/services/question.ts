import { Question, Option } from '../models';

export const getQuestions = () => {
    return Question.findAll({ include:[{ model: Option, as: 'options' }] });
}