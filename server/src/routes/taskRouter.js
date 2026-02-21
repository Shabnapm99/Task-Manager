import { Router } from "express";
import {createTask,getTasks,getATask,updateTask,deleteTask} from '../controllers/taskController.js'

const router = Router();

router.get('/',getTasks);
router.get('/:id',getATask);
router.post('/',createTask);
router.put('/:id',updateTask);
router.delete('/:id',deleteTask);


export default router