import { DeleteResult, EntityTarget, UpdateResult } from 'typeorm';
import { ICrud } from '../interfaces/crud.interface';
import { CrudRepository } from '../repository/crudRepository';

export abstract class CrudService<T>  implements ICrud<T> {

    abstract getRepository(): CrudRepository<T>

    constructor() { }
    
    async all(): Promise<T[]> {
        return await this.getRepository().all();
    }
    async getById(id: string): Promise<T> {
        return await this.getRepository().getById(id);
    }
    async save(model: T): Promise<T> {
        return await this.getRepository().save(model);
    }
    async update(id: string, model: T): Promise<T> {
        return await this.getRepository().update(id, model);
    }
    async delete(id: string): Promise<DeleteResult> {
        return await this.getRepository().delete(id);
    }
    async deleteLogic(id: string): Promise<UpdateResult> {
        return await this.getRepository().deleteLogic(id);
    }

}