import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { config } from "./config";

const connectionOptions: DataSourceOptions = {
    type: "postgres",
    host: config.DB_HOST,
    username: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_NAME,
    synchronize: true,
    logging: true,
    entities: [],
    subscribers: [],
    migrations: [],
};

export const db = new DataSource(connectionOptions);