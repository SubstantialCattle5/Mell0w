import express from "express";
import * as controller from "../controllers/hackathons";

const hackathon = express();

hackathon.use(express.json());

hackathon.get("/all", controller.getAllHackathons);
hackathon.get("/name/:name", controller.getHackathon);
hackathon.get("/domain/:name", controller.getHackathonsDomainFilter);
hackathon.get("/user/:name", controller.getHackathonsUserFilter);

export default hackathon;
