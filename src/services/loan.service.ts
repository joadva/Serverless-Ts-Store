import { CrudService } from "../common/services/crud.service";
import { CrudRepository } from "../common/repository/crudRepository";
import { LoanRepository } from "../repository/loan.repositoy";
import { Loan } from "../models/loan.model";

export class LoanService extends CrudService<Loan> {
    getRepository(): CrudRepository<Loan> {
        return new LoanRepository();
    }
}