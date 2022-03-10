import { ICrud } from '../interfaces/crud.interface';
import { IDb } from '../interfaces/db.interface';
import { TypeOrmManager } from '../db/typeOrmManager';
import { DeleteResult, EntityTarget, getRepository, UpdateResult } from 'typeorm';
import { CustomError } from '../exceptions/custom-error';
import { DictionaryErrors } from '../helpers/errorConstants';

export abstract class CrudRepository<T>  implements  ICrud<T>{

    dbManager: IDb;
    abstract model(): EntityTarget<T>;
    
    constructor() {
        this.dbManager = new TypeOrmManager();
    }
    
    async all(): Promise<T[]> {
        const connection = await this.dbManager.createConnection();
        const model = getRepository<T>(this.model());
        const result = await model.find();
        return result;
    }

    async getById(id: string): Promise<T> {
        const connection = await this.dbManager.createConnection();
        const model = getRepository<T>(this.model());
        const result = await model.findOne(id);
        if(!result) throw CustomError.createCustomError(DictionaryErrors.ITEM_DOES_NOT_EXIST_EXCEPTION);
        return result;
    }

    async save(reqModel: T): Promise<T> {
        const connection = await this.dbManager.createConnection();
        const model = getRepository<T>(this.model());
        const result = model.save(reqModel as any);
        return result;
    }

    async update(id: string, reqModel: T): Promise<T> {
        const connection = await this.dbManager.createConnection();
        const model = getRepository<T>(this.model());
        await model.update(id, reqModel)
        return await this.getById(id);
    }
    async delete(id: string): Promise<DeleteResult> {
        const connection = await this.dbManager.createConnection();
        const model = getRepository<T>(this.model());
        return await model.delete(id);
    }
    async deleteLogic(id: string): Promise<UpdateResult> {
        const connection = await this.dbManager.createConnection();
        const model = getRepository<T>(this.model());
        return await model.softDelete(id);
    }

}