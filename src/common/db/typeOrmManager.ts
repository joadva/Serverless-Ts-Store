
import { IDb } from '../interfaces/db.interface';
import { Dictionary } from '../types/dictionary';
import { DbConfig } from './dbConfig';
import { ConnectionOptions, Connection, getConnectionManager } from 'typeorm';

export class TypeOrmManager  implements IDb{

    private _secretDb: string;
    private connetion: Connection;

    constructor () {
        this._secretDb = process.env.DB_SECRET_NAME ?? '';
    }

    private getConnectionInfo(): Dictionary {
        const dbConfig = new DbConfig();
        const configValues = dbConfig.getDbConfigValues(this._secretDb);
        return configValues;
    }


    private async  getConnectionString(): Promise<ConnectionOptions> {
        const configData: Dictionary = await this.getConnectionInfo();
        return {
             type: configData.type,
             host: configData.host,
             username: configData.username,
             password: configData.password ?? '',
             database: configData.database,
             port: configData.port,
             entities:[ configData.entities],
             logging: configData.logging
        }
    }

    async createConnection(): Promise<Connection> {
        const connectionManager = getConnectionManager();
        console.log("this.connection",this.connetion)
        if(!this.connetion) {
            console.log("Entra a obtener una conexxión por primera vezzzz")
            const connectionString = await this.getConnectionString();
            this.connetion = await connectionManager.create(connectionString);
            await this.connetion.connect();
        }
        return await this.connetion;
    }
}