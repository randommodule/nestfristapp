/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import {Task, TaskStatus} from './task.entity'
import {v4}from 'uuid/'
import { UpdateTaskDTO } from './dto/task.dto';

//simulacion de base de datos
//este servicio guarda datos
//reibe el titulo y la descripcion y lo transforma en un objeto de tipo Task
//generando id y status
//para mandarlo al servidor (simulado con un array de Task)

@Injectable()
export class TasksService {
    
    private tasks:Task[]=[{    
        id:'1',
        title:'first task',
        description:"some task",
        status: TaskStatus.PENDING
    }]
  getAllTasks(){
    return this.tasks;
  }
  createTasks(title: string, description: string ){
    const task={
        id:v4(),
        //id:(this.tasks.length+1).toString(),
        //id:(new Date().toIOString()),
        title,
        description,
        status:TaskStatus.PENDING
    }
    this.tasks.push(task)
    return task
  }
  deleteTasks(id:string){
    this.tasks= this.tasks.filter(task=> task.id!==id);
  }
  getTaskByID(id:string): Task{
    return this.tasks.find(task=> task.id===id);
  }
  //combina dos ojetos en uno solo
  //busca en el arreglo una task cuya id sea igual a la recibida
  //si lo hay reemplazala sino deja la que estabas
  updateTasks(id:string,updatedFields: UpdateTaskDTO):Task{
    const task=this.getTaskByID(id);
    const updatedTask= Object.assign(task,updatedFields);
    this.tasks=this.tasks.map(task=>task.id===id ? updatedTask:task);
    return updatedTask;

  }


}
