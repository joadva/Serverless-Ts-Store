/**
 * @copyright Aplicaciones Creativas
 * @description Clase que obtiene la configuracion de la base de datos
 * @author Mario - Luis Miguel Alamilla - Adrian Valentin
 * @creationDate 8 de Abril del 2021
 */
import { enumConfigSource } from '../enums/enum';
export class DbConfig {

    getDbConfigValues(key: string) {

        const config: any =
            Number(process.env.CONFIG_MODE ?? '1') == enumConfigSource.env ?
                this.getconfigFromEnv() : this.geconfigFromScrt(key);
        return config;
    }

    // TODO
    private geconfigFromScrt(key: string): any {
        throw new Error('Method not implemented.');
    }

    /**
     * @description Metodo que obtiene los parametros de conexion de las variables de ambiente
     * @returns Object
     */
    private getconfigFromEnv(): any {
        return {
            type: process.env.TYPEORM_CONNECTION,
            host: process.env.TYPEORM_HOST,
            port: process.env.TYPEORM_PORT,
            username: process.env.TYPEORM_USERNAME,
            password: process.env.TYPEORM_PASSWORD,
            database: process.env.TYPEORM_DATABASE,
            entities: process.env.TYPEORM_ENTITIES, 
            logging: process.env.TYPEORM_LOGGING
        }
    }
}