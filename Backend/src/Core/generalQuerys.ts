import { conexion } from "./conexion_bd";

type QueryParams = any[];

export const executeQuery = async <T>(query: string, params: QueryParams = []): Promise<T> => {
    try {
        const [result] = await conexion.query(query, params);
        return result as T;
    } catch (error: any) {
        throw new Error(`Error executing query: ${error.message}`);
    }
};

export const selectQuery = async <T>(table: string, fields: string[] = ['*'], condition?: string, params: QueryParams = []): Promise<T> => {
    try {
        let query = `SELECT ${fields.join(', ')} FROM ${table}`;
        if (condition) {
            query += ` WHERE ${condition}`;
        }
        return await executeQuery<T>(query, params);
    } catch (error: any) {
        throw new Error(`Error in SELECT query: ${error.message}`);
    }
};

export const insertQuery = async <T>(table: string, data: any): Promise<T> => {
    try {
        const query = `INSERT INTO ${table} SET ?`;
        return await executeQuery<T>(query, [data]);
    } catch (error: any) {
        throw new Error(`Error in INSERT query: ${error.message}`);
    }
};

export const updateQuery = async <T>(table: string, data: any, condition: string, params: QueryParams = []): Promise<T> => {
    try {
        const setClause = Object.keys(data).map(key => `${key} = ?`).join(', ');
        const query = `UPDATE ${table} SET ${setClause} WHERE ${condition}`;
        const queryParams = [...Object.values(data), ...params];
        return await executeQuery<T>(query, queryParams);
    } catch (error: any) {
        console.error(`Error in updateQuery: ${error.message}`);
        throw new Error(`Error in UPDATE query: ${error.message}`);
    }
};

export const deleteQuery = async <T>(table: string, condition: string, params: QueryParams = []): Promise<T> => {
    try {
        const query = `DELETE FROM ${table} WHERE ${condition}`;
        return await executeQuery<T>(query, params);
    } catch (error: any) {
        throw new Error(`Error in DELETE query: ${error.message}`);
    }
};
