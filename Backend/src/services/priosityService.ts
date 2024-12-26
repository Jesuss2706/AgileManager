import { selectQuery, insertQuery, updateQuery, deleteQuery } from "../Core/generalQuerys";
import { IPriority } from "../interface/IdName.interface";

export const findAllService = async (): Promise<IPriority[]> => {
    return await selectQuery<IPriority[]>('priority');
};

export const findByIdService = async (id: number): Promise<IPriority> => {
    const result = await selectQuery<IPriority[]>('priority', ['*'], 'idPriority = ? ', [id]);
    return result.length > 0 ? result[0] : {} as IPriority;
};

export const createService = async (priority: IPriority): Promise<IPriority> => {
    const result: any = await insertQuery<IPriority>('priority', priority);
    return findByIdService(result.insertId);
};

export const updateService = async (id: number, priority: IPriority): Promise<IPriority> => {
    await updateQuery<void>('priority', priority, 'idPriority = ?', [id]);
    return findByIdService(id);
};

export const deleteService = async (id: number): Promise<void> => {
    await deleteQuery<void>('priority', 'idPriority = ?', [id]);
};
