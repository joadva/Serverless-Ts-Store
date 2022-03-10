import { CrudRepository } from '../common/repository/crudRepository';
import { EntityTarget } from 'typeorm';
import { User } from '../models/user.model';
export class UserRepository extends CrudRepository<User>{
    
    model(): EntityTarget<User> {
        return User;
    }

}