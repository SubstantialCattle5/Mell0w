import { userData } from "../utils/interfaces";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const fixingData = async (userData: userData) => {
  const { name, password, domains } = userData;
  const domain = domains.map(async (domain) => {
    return await prisma.domains.findFirst({
      where: {
        name: domain,
      },
      select: {
        id: true,
      },
    });
  });

  const domainsId = await (
    await Promise.all(domain)
  ).map((domain) => {
    return { id: domain?.id };
  });

  return {
    name,
    password,
    domainsId,
  };
};
