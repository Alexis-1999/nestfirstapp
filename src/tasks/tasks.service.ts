import { Injectable } from '@nestjs/common';
import { Task, TasksStatus } from './task.entity'
import { v4 } from 'uuid'
import { UpdateTaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {

    private tasks: Task[] = [{
        id: '1',
        title: 'first task',
        description: 'Some task',
        status: TasksStatus.PENDING
    }]

    getAllTasks(){
        return this.tasks;
    }

    createTasks(title: string, description: string){
        const task = {
            id: v4(),
            title,
            description,
            status: TasksStatus.PENDING
        }
        this.tasks.push(task)

        return task;
    }

    deleteTasks(id: string) {
        this.tasks = this.tasks.filter(tasks => tasks.id !== id)
    }

    getTaskById(id: string): Task{
        return this.tasks.find(task => task.id === id)
    }

    updateTasks(id: string, updatedFields: UpdateTaskDto): Task{
        const task = this.getTaskById(id)
        const newTask = Object.assign(task, updatedFields)
        this.tasks = this.tasks.map(task => task.id === id ? newTask : task)
        return newTask;
    }


}
