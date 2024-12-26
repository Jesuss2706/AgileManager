// import { conexion } from "../Core/conexion_bd";
import { selectQuery, insertQuery, updateQuery, deleteQuery } from "../Core/generalQuerys";
import { IUsers } from "../interface/users.interface";

export const findAllService = async (): Promise<IUsers[]> => {
    // const [result] = await conexion.query("SELECT * FROM user");
    // return result as IUsers[];
    return await selectQuery<IUsers[]>('user');
};

export const findByIdService = async (id: number): Promise<IUsers> => {
    const result = await selectQuery<IUsers[]>('user', ['*'], 'idUser = ? ', [id]);
    return result.length > 0 ? result[0] : {} as IUsers;
};

export const createService = async (user: IUsers): Promise<IUsers> => {
    const result: any = await insertQuery<IUsers>('user', user);
    return findByIdService(result.insertId);
};

export const updateService = async (id: number, user: IUsers): Promise<IUsers> => {
    await updateQuery<void>('user', user, 'idUser = ?', [id]);
    return findByIdService(id);
};

export const deleteService = async (id: number): Promise<void> => {
    await deleteQuery<void>('user', 'idUser = ?', [id]);
};
