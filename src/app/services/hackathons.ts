import { PrismaClient } from "@prisma/client";
import { hackData } from "../utils/interfaces";

const prisma = new PrismaClient();

export const getAllHackathonsName = async () =>
  await prisma.hackathon.findMany();
export const getHackathonName = async (hackName: String) =>
  await prisma.hackathon.findFirst({ where: { name: String(hackName) } });

export const getAllHackathonsFromADomain = async (domainName: String) => {
  const domain = await prisma.domains.findFirst({
    where: { name: String(domainName) },
    include: { hackathons: true },
  });
  const hackathons = domain?.hackathons.map((hack) => {
    return hack;
  });

  return {
    hackathons: hackathons,
  };
};

export const getAllHackathonsFromAUser = async (userName: string) => {
  const userProfile = await prisma.users.findUnique({
    where: {
      name: userName,
    },
    include: {
      domains: true,
    },
  });

  // domains ka list
  const domains = userProfile?.domains.map((domain) => {
    return domain.name;
  });

  const hackathons = domains?.map(async (domain) => {
    const data = await getAllHackathonsFromADomain(domain);
    return data;
  });
  const returnHackathons = await Promise.all(hackathons!);
  const data = returnHackathons.map((hack) => {
    return hack.hackathons;
  });

  let returnData: any = {};
  for (let i = 0; i < data.length; i++) {
    returnData[domains ? domains[i] : "none"] = data[i];
  }
  return returnData;
};

// admin services
export const addHackathon = async (hackData: hackData) => {
  return await prisma.hackathon.create({
    data: {
      name: hackData.name,
      location: hackData.location,
      is_active: hackData.is_active,
      url: hackData.url,
      dates: hackData.dates,
      domains: {
        connect: hackData.domains.map((domain) => {
          return { name: domain };
        }),
      },
      prize_amount: hackData.prize_amount,
      registrations_count: hackData.registrations_count,
      organization_name: hackData.organization_name,
      invite_only: hackData.invite_only,
    },
  });
};

//FIXME: delete hackathon is not working
export const deleteHackathon = async (id: number) => {
  console.log("rubber duck debugging");
  const data = await prisma.hackathon.delete({
    where: {
      id,
    },
    select: {
      name: true,
    },
  });
  console.log("🚀 ~ file: hackathons.ts:72 ~ deleteHackathon ~ data:", data);
  return data;
};

export const updateHackathon = async (id: number, hackData: hackData) => {
  console.log(
    "🚀 ~ file: hackathons.ts:78 ~ updateHackathon ~ hackData",
    hackData
  );

  return await prisma.hackathon.update({
    where: {
      id,
    },
    data: {
      name: hackData.name,
      location: hackData.location,
      is_active: hackData.is_active,
      url: hackData.url,
      dates: hackData.dates,
      domains: {
        connect: hackData.domains.map((domain) => {
          return { name: domain };
        }),
      },
      prize_amount: hackData.prize_amount,
      registrations_count: hackData.registrations_count,
      organization_name: hackData.organization_name,
      invite_only: hackData.invite_only,
    },
  });
};
