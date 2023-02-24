import { Request, Response } from "express";
import * as serviceHackathons from "../services/hackathons";
import * as serviceDomains from "../services/domains";
import * as serviceUsers from "../services/users";
import { checkAdmin } from "../utils/common";

// check admin status
export const checkAdminStatus = async (req: Request, res: Response) => {
  try {
    res.json(await checkAdmin(req.body.username));
  } catch (err) {
    res.status(403).send("You are not an admin");
  }
};

// hackathon controllers
export const addHackathon = async (req: Request, res: Response) => {
  try {
    if (await checkAdmin(req.body.username)) {
      res.json(await serviceHackathons.addHackathon(req.body.hackathon));
      return;
    }
  } catch (err) {
    res.status(403).send(err);
  }
};

export const deleteHackathon = async (req: Request, res: Response) => {
  try {
    if (await checkAdmin(req.body.username)) {
      res.json(await serviceHackathons.deleteHackathon(parseInt(req.body.id)));
      return;
    }
  } catch (err) {
    res.status(403).send(err);
  }
};

export const updateHackathon = async (req: Request, res: Response) => {
  try {
    if (await checkAdmin(req.body.username)) {
      res.json(
        await serviceHackathons.updateHackathon(
          parseInt(req.body.id),
          req.body.hackathon
        )
      );
      return;
    }
  } catch (err) {
    res.status(403).send(err);
  }
};

// domain controllers
export const addDomain = async (req: Request, res: Response) => {
  try {
    if (await checkAdmin(req.body.username)) {
      res.status(403).send("You are not an admin");
      return;
    }
    res.json(await serviceDomains.createDomain(String(req.body.domainName)));
  } catch (err) {
    res.status(403).send("You are not an admin");
  }
};

export const deleteDomain = async (req: Request, res: Response) => {
  try {
    if (await checkAdmin(req.body.username)) {
      res.status(403).send("You are not an admin");
      return;
    }
    res.json(await serviceDomains.deleteDomain(String(req.body.domainName)));
  } catch (err) {
    res.status(403).send("You are not an admin");
  }
};

export const updateDomain = async (req: Request, res: Response) => {
  try {
    if (await checkAdmin(req.body.username)) {
      res.status(403).send("You are not an admin");
      return;
    }
    res.json(
      await serviceDomains.updateDomain(
        String(req.body.domainName),
        String(req.body.newDomainName)
      )
    );
  } catch (err) {
    res.status(403).send("You are not an admin");
  }
};

// users controllers

export const deleteUser = async (req: Request, res: Response) => {
  try {
    if (await checkAdmin(req.body.username)) {
      res.status(403).send("You are not an admin");
      return;
    }
    res.json(await serviceUsers.deleteUser(String(req.body.userName)));
  } catch (err) {
    res.status(403).send("You are not an admin");
  }
};

export const changeAdminStatus = async (req: Request, res: Response) => {
  try {
    if (await checkAdmin(req.body.username)) {
      res.status(403).send("You are not an admin");
      return;
    }
    res.json(
      await serviceUsers.changeAdminStatus(
        String(req.body.userName),
        Boolean(req.body.isAdmin)
      )
    );
  } catch (err) {
    res.status(403).send("You are not an admin");
  }
};
