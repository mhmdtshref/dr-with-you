import { Sequelize, Options } from 'sequelize'

const {
  DATABASE_HOST: databaseHost = '',
  DATABASE_NAME: databaseName = '',
  DATABASE_USER: databaseUser = '',
  DATABASE_PASSWORD: databasePassword = '',
  DATABASE_SSL_ENABLED: databaseSslEnabled = 'false'
} = process.env

let databaseOptions: Options = {
  dialect: 'postgres',
  host: databaseHost
}

if (databaseSslEnabled === 'true') {
  databaseOptions = {
    ...databaseOptions,
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true
      }
    }
  }
}

const sequelize = new Sequelize(databaseName, databaseUser, databasePassword, databaseOptions)

export default sequelize
