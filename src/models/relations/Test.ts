import { Test, User, Review, Answer } from ".."

export default () => {
    Test.belongsTo(User, { foreignKey: 'UserId', as: 'user' });
    Test.hasOne(Review, { foreignKey: 'TestId', as: 'review' });
    Test.hasMany(Answer, { foreignKey: 'TestId', as: 'answers' });
}
