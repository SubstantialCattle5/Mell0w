import express from "express";
import * as controller from "../controllers/hackathons";

const hackathon = express();

hackathon.use(express.json());

hackathon.get("/all", controller.getAllHackathons);
hackathon.get("/hackathon/:name", controller.getHackathon);
hackathon.get("/domain/:name", controller.getHackathonsDomainFilter);
// FIXME: This route is not working
hackathon.get("/user/:name", controller.getHackathonsUserFilter);

export default hackathon;
