import { DeleteResult, UpdateResult } from "typeorm";

export interface ICrud<T> {
all(): Promise<Array<T>>;
    getById(id: string): Promise<T>;
    save(model: T): Promise<T>;
    update(id:string, model: T): Promise<T>;
    delete(id: string): Promise<DeleteResult>;
    deleteLogic(id: string): Promise<UpdateResult>;
}