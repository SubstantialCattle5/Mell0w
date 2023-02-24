import express from "express";
import * as controller from "../controllers/admins";

const admins = express();

admins.use(express.json());

admins.post("/", controller.checkAdminStatus);
admins.post("/addHackathon", controller.addHackathon);
admins.delete("/deleteHackathon", controller.deleteHackathon);
admins.put("/updateHackathon", controller.updateHackathon);
admins.post("/addDomain", controller.addDomain);
admins.delete("/deleteDomain", controller.deleteDomain);
admins.put("/updateDomain", controller.updateDomain);
admins.delete("/deleteUser", controller.deleteUser);
admins.put("/adminifyUser", controller.changeAdminStatus);

export default admins;
