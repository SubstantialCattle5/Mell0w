import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const getAllHackathons = async (req: Request, res: Response) => {
  try {
    const hackathons = await prisma.hackathon.findMany();
    res.json(hackathons);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getHackathon = async (req: Request, res: Response) => {
  try {
    const hackathon = await prisma.hackathon.findFirst({
      where: {
        name: String(req.params.name),
      },
    });
    res.json(hackathon);
  } catch (err) {
    res.status(500).send(err);
  }
};

export { getAllHackathons, getHackathon };
