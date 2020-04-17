import { Question, Option } from '../models';

export const getQuestions = () => {
    return Question.findAll({ include:[{ model: Option, as: 'options' }] });
}

export const createQuestion = (question: Question) => {
    return Question.create(question, { include: [{ model: Option, as: 'options' }]});
}

export const deleteQuestion = (id: number) => {
    return Question.destroy({ where: { id } });
}

export const updateQuestion = (id: number, question: Question) => {
    return Question.update(question, { where: { id } });
}
