import { Router } from "express";
import { getUsers, createUsers, deleteUser, findById, alterarUser } from "../Controller/UserController.js";

const routes = Router();

routes.get("/users", getUsers);
routes.post("/users", createUsers);
routes.delete("/users/:id", deleteUser )
routes.get("/users/:id", findById)
routes.patch("/users/:id", alterarUser)

export default routes