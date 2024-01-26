export enum TasksStatus {
    PENDING = 'PENDING',
    IN_PROGRESS = 'IN_PROGESS',
    DONE = 'DONE',
}

export class Task {
    id: string
    title: string
    description: string
    status: TasksStatus
}

//Instanciar la Clase
const task = new Task()

