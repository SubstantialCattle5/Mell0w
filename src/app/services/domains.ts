import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllDomainsName = async () => await prisma.domains.findMany();

export const getDomainName = async (domainName: String) =>
  await prisma.domains.findFirst({ where: { name: String(domainName) } });

export const createDomain = async (name: string) =>
  await prisma.domains.create({ data: { name: name } });

export const deleteDomain = async (name: string) =>
  await prisma.domains.delete({ where: { name: name } });

export const updateDomain = async (name: string, newName: string) =>
  await prisma.domains.update({
    where: { name: name },
    data: { name: newName },
  });
