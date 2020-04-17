import sequelize from './sequelize';
import { Model, DataTypes } from 'sequelize';
import { User, Review } from '.';

class Test extends Model {
    public id!: number;
    public user!: User;
    public review?: Review;
    public note?: string;

    public readonly updatedAt!: Date;
    public readonly createdAt!: Date;
}

Test.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isNumeric: {
                msg: 'UserId must be type of numeric',
            },
            isInt: {
                msg: 'UserId must be type of integer'
            },
        },
    },
    ReviewId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            isNumeric: {
                msg: 'ReviewId must be type of numeric',
            },
            isInt: {
                msg: 'ReviewId must be type of integer'
            },
        },
    },
    note: {
        type: DataTypes.STRING(1024),
        allowNull: true,
        validate: {
            len: {
                args: [1, 1024],
                msg: 'Note text length must be between 1 and 1024 characters',
            },
        },
    },
}, { sequelize })

export default Test;
