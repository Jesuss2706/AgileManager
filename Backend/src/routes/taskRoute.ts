import express from "express";
import {
    getAll,
    getById,
    create,
    update,
    deleteById,
} from "../controller/taskController";

const router = express.Router();

router
    .get("", getAll)
    .get("/:id", getById)
    .post("", create)
    .put("/:id", update)
    .delete("/:id", deleteById);

export default router;