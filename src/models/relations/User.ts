import { User, Test } from ".."

export default () => {
    User.hasMany(Test, { foreignKey: 'UserId', as: 'tests' });
}
