import { selectQuery, insertQuery, updateQuery, deleteQuery } from "../Core/generalQuerys";
import { IStatus } from "../interface/IdName.interface";

export const findAllService = async (): Promise<IStatus[]> => {
    return await selectQuery<IStatus[]>('status');
};

export const findByIdService = async (id: number): Promise<IStatus> => {
    const result = await selectQuery<IStatus[]>('status', ['*'], 'idstatus = ? ', [id]);
    return result.length > 0 ? result[0] : {} as IStatus;
};

export const createService = async (status: IStatus): Promise<IStatus> => {
    const result: any = await insertQuery<IStatus>('status', status);
    return findByIdService(result.insertId);
};

export const updateService = async (id: number, status: IStatus): Promise<IStatus> => {
    await updateQuery<void>('status', status, 'idstatus = ?', [id]);
    return findByIdService(id);
};

export const deleteService = async (id: number): Promise<void> => {
    await deleteQuery<void>('status', 'idstatus = ?', [id]);
};
