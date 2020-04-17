import { Specialty, Question } from ".."

export default () => {
    Specialty.hasMany(Question, { foreignKey: 'SpecialtyId', as: 'questions' });
}