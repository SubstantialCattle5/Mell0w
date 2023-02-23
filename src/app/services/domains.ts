import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllDomainsName = async () => await prisma.domains.findMany();
const getDomainName = async (domainName: String) =>
  await prisma.domains.findFirst({ where: { name: String(domainName) } });


export { getAllDomainsName, getDomainName };
