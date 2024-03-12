/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Patch } from '@nestjs/common';
import {TasksService}from './tasks.service'
import { CreateTaskDTO, UpdateTaskDTO } from './dto/task.dto';

//se encarga de hacer las consultas al servidor y manejar la informacion
//requiere de un formato para postear
//lo saca de la clase createTaskDTO

@Controller('tasks')
export class TasksController {

    constructor(private taskService: TasksService){}

   @Get() 
   getAllTask(){
        return this.taskService.getAllTasks()
    }
    //enlaza el controlador con el servicio
    //@body es un json
    @Post()
    createTask(@Body() newTask:CreateTaskDTO){
        return this.taskService.createTasks(newTask.title,newTask.descripcion);
    }
    //despues de este id va a venir un valor
    //va a venir un dato llamado id y lo voy a almacenar en una variable id
    @Delete(':id')
    deteleTask(@Param('id')id:string){
        this.taskService.deleteTasks(id);
    }
    //desues de esta id va a venir un valor
    //actualiza los datos utilizando el formato de UpdateTaskDTO
    @Patch(':id')
    updateTask(@Param('id')id:string, @Body()updatedFields:UpdateTaskDTO){
            return this.taskService.updateTasks(id,updatedFields);
        }
    
}
 