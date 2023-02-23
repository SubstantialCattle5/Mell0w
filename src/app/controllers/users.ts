import { Request, Response } from "express";
import * as userService from "../services/users";

export const usersCount = async (req: Request, res: Response) => {
  try {
    res.json(await userService.usersCount());
  } catch (err) {
    res.status(500).send(err);
  }
};

export const admins = async (req: Request, res: Response) => {
  try {
    res.json(await userService.admins());
  } catch (err) {
    res.status(500).send(err);
  }
};

export const userProfile = async (req: Request, res: Response) => {
  try {
    res.json(await userService.userProfile(String(req.params.name)));
  } catch (err) {
    res.status(500).send(err);
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    res.json(await userService.createUser(req.body));
  } catch (err) {
    res.status(500).send(err);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    res.json(await userService.updateUser(req.body));
  } catch (err) {
    res.status(500).send(err);
  }
};
