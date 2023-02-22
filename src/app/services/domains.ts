import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllDomainsName = async () => await prisma.domains.findMany();
const getDomainName = async (name: String) =>
  await prisma.hackathon.findFirst({ where: { name: String(name) } });

export { getAllDomainsName, getDomainName };
