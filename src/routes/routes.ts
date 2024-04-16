import createUserController from '../controllers/userControllers/create.user.controller';
import express from 'express';


const routes = express.Router();

routes.get('/', function (request, response) {
    response.json({ API: 'Welcome to JWT Authentication' });
  });

routes.use('/api/v1/create', createUserController.router);

export default routes;