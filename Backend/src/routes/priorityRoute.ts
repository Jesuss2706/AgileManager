import express from "express";
import {
    getAll,
    getById,
    create,
    update,
    deleteById,
} from "../controller/priorityController";

const router = express.Router();

router
    .get("", getAll)
    .get("/:id", getById)
    .post("", create)
    .put("/:id", update)
    .delete("/:id", deleteById);

export default router;