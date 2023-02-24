import { Request, Response } from "express";
import * as serviceHackathon from "../services/hackathons";

export const getAllHackathons = async (req: Request, res: Response) => {
  try {
    res.json(await serviceHackathon.getAllHackathonsName());
  } catch (err) {
    res.status(500).send(err);
  }
};

export const getHackathon = async (req: Request, res: Response) => {
  try {
    res.json(await serviceHackathon.getHackathonName(req.params.name));
  } catch (err) {
    res.status(500).send(err);
  }
};

export const getHackathonsDomainFilter = async (req: Request, res: Response) => {
  try {
    res.json(
      await serviceHackathon.getAllHackathonsFromADomain(req.params.name)
    );
  } catch (err) {
    res.status(500).send(err);
  }
};

export const getHackathonsUserFilter = async (req: Request, res: Response) => {
  try {
    res.json(await serviceHackathon.getAllHackathonsFromAUser(req.params.name));
  } catch (err) {
    res.status(500).send(err);
  }
};

