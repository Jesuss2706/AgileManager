import { Request, Response } from "express";
import {
    findAllService,
    findByIdService,
    createService,
    deleteService,
    updateService,
} from "../services/usersService";

import { IUsers } from "../interface/users.interface";


export const getAll = async (_req: Request, res: Response) => {
    try {
        const result: IUsers[] = await findAllService();
        res.status(200).send(result);
    } catch (error: any) {
        res.status(500).json({ message: error.error });
    }
}

export const getById = async (_req: Request, res: Response) => {
    try {
        const result: IUsers = await findByIdService(parseInt(_req.params.id, 10));
        res.status(200).send(result);
    } catch (error: any) {
        res.status(500).json({ message: error.error });
    }
}

export const create = async (_req: Request, res: Response) => {
    try {
        const body: IUsers = _req.body;
        const result: IUsers = await createService(body);
        res.status(200).send(result);
    } catch (error: any) {
        res.status(500).json({ message: error.error });
    }
}

export const update = async (_req: Request, res: Response) => {
    try {
        const body: IUsers = _req.body;
        const result: IUsers = await updateService(parseInt(_req.params.id, 10), body);
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