import { CrudService } from '../common/services/crud.service';
import { CrudRepository } from '../common/repository/crudRepository';
import { UserRepository } from '../repository/users.reposity';
import { User } from '../models/user.model';

export class UserService  extends CrudService<User>{
    
    getRepository(): CrudRepository<User> {
        return new UserRepository();
    }

}