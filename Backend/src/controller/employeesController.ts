import { Request, Response } from "express";
import {
    createEmployees,
    deleteEmployees,
    findAllEmployee,
    findByIdEmployee,
    updateEmployees,
} from "../services/employeesService";
import { IUsers } from "../interface/users.interface";


export const getAll = async (_req: Request, res: Response) => {
    try {
        const result: IUsers[] = await findAllEmployee((_req as any).userId);
        res.status(200).send(result);
    } catch (error: any) {
        res.status(500).json({ message: error.error });
    }
}

export const getById = async (_req: Request, res: Response) => {
    try {
        const result: IUsers = await findByIdEmployee(parseInt(_req.params.id, 10), (_req as any).userId);
        res.status(200).send(result);
    } catch (error: any) {
        res.status(500).json({ message: error.error });
    }
}

export const create = async (_req: Request, res: Response) => {
    try {
        const body: IUsers = _req.body;
        body.id = parseInt((_req as any).userId);

        const result: IUsers = await createEmployees(body);
        res.status(200).send(result);
    } catch (error: any) {
        res.status(500).json({ message: error.error });
    }
}

export const update = async (_req: Request, res: Response) => {
    try {
        const body: IUsers = _req.body;
        body.id = parseInt((_req as any).userId);

        const result: IUsers = await updateEmployees(parseInt(_req.params.id, 10), body);
        res.status(200).send(result);
    } catch (error: any) {
        res.status(500).json({ message: error.error });
    }
}

export const deleteById = async (_req: Request, res: Response) => {
    try {
        await deleteEmployees(parseInt(_req.params.id, 10));
        res.status(200).send({ success: 'success' });
    } catch (error: any) {
        res.status(500).json({ message: error.error });
    }
}