import express from "express";
import * as controllers from "../controllers/users";

const users = express();

users.use(express.json());

users.get("/name/:name", controllers.userProfile);
users.get("/", controllers.usersCount);
users.get("/admins", controllers.admins);
users.post("/createuser", controllers.createUser);
users.put("/updateuser", controllers.updateUser);

export default users;
