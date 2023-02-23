import express from "express";
import * as controller from "../controllers/domains";
const domains = express();

domains.get("/all", controller.getAllDomains);
domains.get("/:name", controller.getDomain);

export default domains;
