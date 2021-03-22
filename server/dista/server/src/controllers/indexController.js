"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
const db_1 = __importDefault(require("../db"));
class IndexController {
    listTasks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tasks = yield db_1.default.query('SELECT * FROM tasks;');
            res.json(tasks);
        });
    }
    createTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log();
            yield db_1.default.query('INSERT INTO tasks VALUES(null, ? , ?);', [req.body.tasks_text, req.body.tasks_status]);
            res.json({ message: "Tarea creada" });
        });
    }
    deleteTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let { id } = req.params;
            id = id.replace(':', '');
            yield db_1.default.query('DELETE FROM tasks WHERE tasks_id = ?;', [id]);
            res.json({ message: 'Se eliminó la tarea' });
        });
    }
    updateTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let { id } = req.params;
            id = id.replace(':', '');
            console.log("indexcontroller");
            yield db_1.default.query('UPDATE tasks SET tasks_text=?, tasks_status=? WHERE tasks_id = ? ;', [req.body.tasks_text, req.body.tasks_status, id]);
            res.json({ message: req.body.tasks_status });
        });
    }
}
exports.indexController = new IndexController();
