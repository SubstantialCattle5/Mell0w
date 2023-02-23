import { Request, Response } from "express";
import { getAllDomainsName, getDomainName } from "../services/domains";

const getAllDomains = async (req: Request, res: Response) => {
  try {
    res.json(await getAllDomainsName());
  } catch (err) {
    res.status(500).send(err);
  }
};

const getDomain = async (req: Request, res: Response) => {
  try {
    res.json(await getDomainName(req.params.name));
  } catch (err) {
    res.status(500).send(err);
  }
};



export { getAllDomains, getDomain };
