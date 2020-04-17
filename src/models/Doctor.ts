import sequelize from './sequelize';
import { Model, DataTypes } from 'sequelize';
import { Specialty, Review } from '.';

class Doctor extends Model {
    public id!: number;
    public firstName!: string;
    public lastName!: string;
    public birthdate!: Date;
    public phone!: string;
    public specialty!: Specialty;
    public reviews!: Review[];
    
    public readonly updatedAt!: Date;
    public readonly createdAt!: Date;
}

Doctor.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    firstName: {
        type: DataTypes.STRING(64),
        allowNull: false,
        validate: {
            len: {
                args: [2, 64],
                msg: 'First name length must be between 2 and 64 characters',
            },
        },
    },
    lastName: {
        type: DataTypes.STRING(64),
        allowNull: false,
        validate: {
            len: {
                args: [2, 64],
                msg: 'Last name length must be between 2 and 64 characters',
            },
        },
    },
    SpecialtyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isNumeric: {
                msg: 'SpecialtyId must be type of numeric',
            },
            isInt: {
                msg: 'SpecialtyId must be type of integer'
            },
        },
    },
    birthdate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            isDate: {
                args: true,
                msg: 'Birthdate must be in a valid date format',
            },
        },
    },
    phone: {
        type: DataTypes.STRING(14),
        allowNull: false,
        unique: true,
        validate: {
            is: {
                args: /^\+?[0-9]*$/g,
                msg: 'Phone number must use + at first (optional) and numbers only',
            },
            len: {
                args: [7, 14],
                msg: 'Phone number length must be between 7 and 14',
            },
        },
    },
}, { sequelize });

export default Doctor;