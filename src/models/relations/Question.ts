import { Question, Option } from '..'
import Answer from '../Answer'

export default () => {
  Question.hasMany(Answer, { foreignKey: 'QuestionId', as: 'answers' })
  Question.hasMany(Option, { foreignKey: 'QuestionId', as: 'options' })
}
