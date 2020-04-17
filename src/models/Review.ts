import sequelize from './sequelize';
import { Model, DataTypes } from 'sequelize';
import { Test, Doctor } from '.';

class Review extends Model {
    public id!: number;
    public test!: Test;
    public doctor!: Doctor;
    public note?: string;

    public readonly updatedAt!: Date;
    public readonly createdAt!: Date;
}

Review.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    TestId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isNumeric: {
                msg: 'TestId must be type of numeric',
            },
            isInt: {
                msg: 'TestId must be type of integer'
            },
        },
    },
    DoctorId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            isNumeric: {
                msg: 'DoctorId must be type of numeric',
            },
            isInt: {
                msg: 'DoctorId must be type of integer'
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

export default Review;
