import {Request, Response} from "express";
import database from '../db';

class IndexController {
  public async listTasks(req: Request, res: Response) {
    const tasks = await database.query('SELECT * FROM tasks;');
    res.json(tasks);
  }

  public async createTask(req: Request, res: Response) : Promise<void>{
    console.log();
    await database.query('INSERT INTO tasks VALUES(null, ? , ?);', [req.body.tasks_text,req.body.tasks_status]);
    res.json({message: "Tarea creada"});
  }

  public async deleteTask(req: Request, res: Response) : Promise<void>{
    let { id } = req.params;
    id = id.replace(':', '');
    await database.query('DELETE FROM tasks WHERE tasks_id = ?;', [id]);
    res.json({message: 'Se eliminó la tarea'});
  }

  public async updateTask(req: Request, res: Response) : Promise<void>{
    let { id } = req.params;
    id = id.replace(':', '');
    console.log("indexcontroller");
    await database.query('UPDATE tasks SET tasks_text=?, tasks_status=? WHERE tasks_id = ? ;', [req.body.tasks_text, req.body.tasks_status, id]);
    res.json({message: req.body.tasks_status});
  }
}

export const indexController = new IndexController();


