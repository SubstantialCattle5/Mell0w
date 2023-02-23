import express from "express";
import * as controllers from "../controllers/users";

const users = express();

users.get("/name/:name", controllers.userProfile);
users.get("/", controllers.usersCount);
users.get("/admins", controllers.admins);
// FIXME: This route is not working
users.post("/createuser", controllers.createUser);
users.put("/updateuser", controllers.updateUser);

export default users;
