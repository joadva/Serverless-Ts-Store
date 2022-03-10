import { Connection } from "typeorm";

export interface IDb {
    createConnection(): Promise<Connection>
}