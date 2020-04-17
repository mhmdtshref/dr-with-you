import sequelize from './sequelize';
import { Model, DataTypes } from 'sequelize';
import { Doctor } from '.';

class Specialty extends Model {
    public id!: number;
    public name!: string;
    public doctors!: Doctor[];

    public readonly updatedAt!: Date;
    public readonly createdAt!: Date;
}

Specialty.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(64),
        allowNull: false,
    },
}, { sequelize })

export default Specialty;
