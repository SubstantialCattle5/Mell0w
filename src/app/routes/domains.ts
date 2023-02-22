import express from "express";
import { getAllDomains, getDomain } from "../controllers/domains";

const domains = express();

domains.get("/all", getAllDomains);
domains.get("/:name", getDomain);

export default domains;
