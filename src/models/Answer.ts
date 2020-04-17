import sequelize from './sequelize'
import { Model, DataTypes } from 'sequelize'
import { Test, Question, Option } from '.'

/**
 *
 *
 * @class Answer
 * @extends {Model}
 */
class Answer extends Model {
    public id!: number;
    public text?: string;

    public test!: Test;
    public question!: Question;
    public option!: Option;

    public readonly updatedAt!: Date;
    public readonly createdAt!: Date;
}

Answer.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  text: {
    type: DataTypes.STRING(1024),
    allowNull: false,
    validate: {
      len: {
        args: [1, 1024],
        msg: 'Answer text length must be between 1 and 1024 characters'
      }
    }
  },
  TestId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isNumeric: {
        msg: 'TestId must be type of numeric'
      },
      isInt: {
        msg: 'TestId must be type of integer'
      }
    }
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
  OptionId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isNumeric: {
        msg: 'OptionId must be type of numeric'
      },
      isInt: {
        msg: 'OptionId must be type of integer'
      }
    }
  }
}, { sequelize })

export default Answer
