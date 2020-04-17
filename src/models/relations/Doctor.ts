import { Doctor, Specialty, Review } from '..'

export default () => {
  Doctor.belongsTo(Specialty, { foreignKey: 'SpecialtyId', as: 'specialty' })
  Doctor.hasMany(Review, { foreignKey: 'DoctorId', as: 'reviews' })
}
