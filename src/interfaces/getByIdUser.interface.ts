export interface IGetByIdUser {
    getById<T>(id: string): Promise<T>;
}