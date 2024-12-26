import express from "express";
import { validatedToken } from "../Core/security";
import {
    getAll,
    getById,
    create,
    update,
    deleteById,
} from "../controller/employeesController";

const router = express.Router();

router
    .get("", validatedToken, getAll)
    .get("/:id", validatedToken, getById)
    .post("", validatedToken, create)
    .put("/:id", validatedToken, update)
    .delete("/:id", validatedToken, deleteById);

export default router;
