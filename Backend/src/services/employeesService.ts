import { selectQuery, insertQuery, updateQuery, deleteQuery } from "../Core/generalQuerys";
import { IEmployees } from "../interface/users.interface";

export const findAllEmployee = async (idAdmin: number): Promise<IEmployees[]> => {
    return await selectQuery<IEmployees[]>('Users', ['*'], 'id_admin = ?', [idAdmin]);
};

export const findByIdEmployee = async (id: number, idAdmin: number): Promise<IEmployees> => {
    const result = await selectQuery<IEmployees[]>('Users', ['*'], 'id = ? and id_admin = ?', [id, idAdmin]);
    return result.length > 0 ? result[0] : {} as IEmployees;
};

export const createEmployees = async (employee: IEmployees): Promise<IEmployees> => {
    const result = await insertQuery<any>('Users', employee);
    return findByIdEmployee(result.insertId, employee.id_admin);
};

export const updateEmployees = async (id: number, employee: IEmployees): Promise<IEmployees> => {
    await updateQuery<void>('Users', employee, 'id = ?', [id]);
    return findByIdEmployee(id, employee.id_admin);
};

export const deleteEmployees = async (id: number): Promise<void> => {
    await deleteQuery<void>('Users', 'id = ?', [id]);
};
