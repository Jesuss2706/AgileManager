import { selectQuery, insertQuery, updateQuery, deleteQuery, executeQuery } from "../Core/generalQuerys";
import { ITask } from "../interface/task.interface";

export const findAllService = async (): Promise<ITask[]> => {
    let query: string = `select
p.name as "priorityName",
s.name as "statusName",
u.name as "creatorName",
u2.name as "userAsinged",
t.* 
from task t 
inner join user u ON t.user_creator = u.idUser 
inner join status s on t.status_idstatus = s.idstatus 
inner join priority p on t.Priority_idPriority = p.idPriority 
inner join user as u2 on t.User_idUser = u2.idUser`;
    return await executeQuery<ITask[]>(query);
};

export const findByIdService = async (id: number): Promise<ITask> => {
    const result = await selectQuery<ITask[]>('task', ['*'], 'idTask = ? ', [id]);
    return result.length > 0 ? result[0] : {} as ITask;
};

export const createService = async (task: ITask): Promise<ITask> => {
    const result: any = await insertQuery<ITask>('task', task);
    return findByIdService(result.insertId);
};

export const updateService = async (id: number, task: ITask): Promise<ITask> => {
    await updateQuery<void>('task', task, 'idTask = ?', [id]);
    return findByIdService(id);
};

export const deleteService = async (id: number): Promise<void> => {
    await deleteQuery<void>('task', 'idTask = ?', [id]);
};      