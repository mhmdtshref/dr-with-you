import { Review, Test } from '..'
import Doctor from '../Doctor'

export default () => {
  Review.belongsTo(Test, { foreignKey: 'TestId', as: 'test' })
  Review.belongsTo(Doctor, { foreignKey: 'DoctorId', as: 'doctor' })
}
