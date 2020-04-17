import { Answer, Question, Option, Test } from ".."

export default () => {
    Answer.belongsTo(Test, { foreignKey: 'TestId', as: 'test' });
    Answer.belongsTo(Question, { foreignKey: 'QuestionId', as: 'question' });
    Answer.belongsTo(Option, { foreignKey: 'OptionId', as: 'option' });
}
