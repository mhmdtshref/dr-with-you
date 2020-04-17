import { Specialty, Doctor } from '..'

export default () => {
  Specialty.hasMany(Doctor, { foreignKey: 'SpecialtyId', as: 'questions' })
}
