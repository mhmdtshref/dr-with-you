import sequelize from './sequelize'
import { Model, DataTypes } from 'sequelize'
import { Question } from '.'

class Option extends Model {
    public id!: number;
    public text!: string;
    public hint?: string;
    public question!: Question;

    public readonly updatedAt!: Date;
    public readonly createdAt!: Date;
}

Option.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  QuestionId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isNumeric: {
        msg: 'QuestionId must be type of numeric'
      },
      isInt: {
        msg: 'QuestionId must be type of integer'
      }
    }
  },
  text: {
    type: DataTypes.STRING(255),
    allowNull: false,
    validate: {
      len: {
        args: [1, 255],
        msg: 'Option text length must be between 5 and 255 characters'
      }
    }
  },
  hint: {
    type: DataTypes.STRING(255),
    allowNull: true,
    validate: {
      len: {
        args: [1, 255],
        msg: 'Option hint length must be between 5 and 255 characters'
      }
    }
  }
}, { sequelize })

export default Option
