import { TaskStatus } from "../task-enum";
export class GetTasksFilterDto{
    status: TaskStatus;
    searchTerm: string;
}