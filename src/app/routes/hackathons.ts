import { PrismaClient } from "@prisma/client";
import express from "express";
import {
  getAllHackathons,
  getHackathon,
} from "../controllers/hackathons";

const hackathon = express();

hackathon.use(express.json());


hackathon.get("/all", getAllHackathons);
hackathon.get("/:name", getHackathon);

export default hackathon;
