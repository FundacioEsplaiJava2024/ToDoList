import { TodoistApi } from "@doist/todoist-api-typescript";
import { Task } from '../Task';

const api = new TodoistApi("22f3a515e99083950402b28c60d105572cba3f5c");

export function ToDoApiAddTask(newTask: Task) {
    // const api_key = process.env.TODO_IST_API_TOKEN as string

    api.addTask({
        content: newTask.title,
        description: newTask.description,
    })
}


export function ToDoApiGetTasks(/*newTask: Task*/) {

    let tasks = api.getTasks()

    return JSON.stringify(tasks);

}
