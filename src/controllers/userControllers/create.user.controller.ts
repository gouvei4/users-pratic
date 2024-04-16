import { Router } from 'express';
import CreateUserService from '../../services/userServices/create.user.service';

class CreateUserController {
    router = Router();

    constructor() {
        this.initRoutes();
    }

    initRoutes() {
        this.router.post('/', CreateUserService.createUser);
    }
}

export default new CreateUserController();