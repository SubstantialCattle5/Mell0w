import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllHackathonsName = async () => await prisma.hackathon.findMany();
const getHackathonName = async (hackName: String) =>
  await prisma.hackathon.findFirst({ where: { name: String(hackName) } });

// fetch data using hack name
const getAllHackathonsFromADomain = async (domainName: String) => {
  const domain = await prisma.domains.findFirst({
    where: { name: String(domainName) },
    include: { hackathons: true },
  });
  const hackathons = domain?.hackathons.map((hack) => {
    return hack
  })
  
  return {
    hackathons: hackathons,
  };
};

// fetch data using user name
const getAllHackathonsFromAUser = async (userName: string) => {
  const userProfile = await prisma.users.findUnique({
    where: {
      name: userName,
    },
    include: {
      domains: true,
    },
  });
  const domains = userProfile?.domains.map((domain) => {
    return domain.name;
  });

  const hackathons = domains?.map(
    async (domain) => await getAllHackathonsFromADomain(domain)
  );
  return hackathons;
};

export {
  getAllHackathonsName,
  getHackathonName,
  getAllHackathonsFromADomain,
  getAllHackathonsFromAUser,
};
