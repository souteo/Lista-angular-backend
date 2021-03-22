import { Router } from 'express';

import { indexController } from '../controllers/indexController';

class IndexRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }
    //configuracion api
    config(): void{
        this.router.get('', indexController.listTasks);
        this.router.get('/tasks', indexController.listTasks);
        this.router.post('/tasks', indexController.createTask);
        this.router.delete('/tasks:id', indexController.deleteTask);
        this.router.put('/tasks:id', indexController.updateTask);
    }
}

const indexRoutes = new IndexRoutes();

export default indexRoutes;