import { Router } from "express";
import { getUsers, createUsers, deleteUser, findById } from "../Controller/UserController.js";

const routes = Router();

routes.get("/users", getUsers);
routes.post("/users", createUsers);
routes.delete("/users/:id", deleteUser )
routes.get("/users/:id", findById)


export default routes