import { selectQuery, insertQuery, updateQuery, deleteQuery } from "../Core/generalQuerys";
import { ITask } from "../interface/task.interface";

export const findAllService = async (): Promise<ITask[]> => {
    return await selectQuery<ITask[]>('task');
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