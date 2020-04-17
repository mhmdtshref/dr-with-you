import { Option } from ".."
import Question from "../Question"
import Answer from "../Answer";

export default () => {
    Option.belongsTo(Question, { foreignKey: 'QuestionId', as: 'question' });
    Option.hasMany(Answer, { foreignKey: 'OptionId', as: 'answers' });
}
