import sequelize from './sequelize'
import { Model, DataTypes } from 'sequelize'
import { Option } from '.'

class Question extends Model {
    public id!: number;
    public text!: string;
    public hint?: string;
    public options!: Option[];

    public readonly updatedAt!: Date;
    public readonly createdAt!: Date;
}

Question.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  text: {
    type: DataTypes.STRING(255),
    allowNull: false,
    validate: {
      len: {
        args: [5, 255],
        msg: 'Question text length must be between 5 and 255 characters'
      }
    }
  },
  hint: {
    type: DataTypes.STRING(255),
    allowNull: true,
    validate: {
      len: {
        args: [5, 255],
        msg: 'Question text length must be between 5 and 255 characters'
      }
    }
  }
}, { sequelize })

export default Question
