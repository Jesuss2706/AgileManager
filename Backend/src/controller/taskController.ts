import { Request, Response } from "express";
import {
    findAllService,
    findByIdService,
    createService,
    deleteService,
    updateService,
} from "../services/taskService";

import { ITask } from "../interface/task.interface";


export const getAll = async (_req: Request, res: Response) => {
    try {
        const result: ITask[] = await findAllService();
        res.status(200).send(result);
    } catch (error: any) {
        res.status(500).json({ message: error.error });
    }
}

export const getById = async (_req: Request, res: Response) => {
    try {
        const result: ITask = await findByIdService(parseInt(_req.params.id, 10));
        res.status(200).send(result);
    } catch (error: any) {
        res.status(500).json({ message: error.error });
    }
}

export const create = async (_req: Request, res: Response) => {
    try {
        const body: ITask = _req.body;
        const result: ITask = await createService(body);
        res.status(200).send(result);
    } catch (error: any) {
        res.status(500).json({ message: error.error });
    }
}

export const update = async (_req: Request, res: Response) => {
    try {
        const body: ITask = _req.body;
        const result: ITask = await updateService(parseInt(_req.params.id, 10), body);
        res.status(200).send(result);
    } catch (error: any) {
        res.status(500).json({ message: error.error });
    }
}

export const deleteById = async (_req: Request, res: Response) => {
    try {
        await deleteService(parseInt(_req.params.id, 10));
        res.status(200).send({ success: 'success' });
    } catch (error: any) {
        res.status(500).json({ message: error.error });
    }
}