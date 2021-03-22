"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    //configuracion api
    config() {
        this.router.get('/', indexController_1.indexController.listTasks);
        this.router.get('/tasks', indexController_1.indexController.listTasks);
        this.router.post('/tasks', indexController_1.indexController.createTask);
        this.router.delete('/tasks:id', indexController_1.indexController.deleteTask);
        this.router.put('/tasks:id', indexController_1.indexController.updateTask);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes;
