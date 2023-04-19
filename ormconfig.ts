import{ SqliteConnectionOptions } from "typeorm/driver/sqlite/SqliteConnectionOptions"

const config: SqliteConnectionOptions  = {
    type: 'sqlite',
    database: 'db',
    entities: ['dist/src/**/*.entity.js'],
    synchronize: true //Only localy not for production
}

export default config;