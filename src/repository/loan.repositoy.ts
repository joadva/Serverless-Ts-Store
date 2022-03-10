import { CrudRepository } from "../common/repository/crudRepository";
import { EntityTarget } from "typeorm";
import { Loan } from "../models/loan.model";


export class LoanRepository extends CrudRepository<Loan>{
    model(): EntityTarget<Loan> {
        return Loan
    }
}

