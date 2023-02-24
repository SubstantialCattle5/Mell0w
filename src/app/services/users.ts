import { PrismaClient } from "@prisma/client";
import { userData } from "../utils/interfaces";
import { fixingData } from "../utils/common";
const prisma = new PrismaClient();

export const usersCount = async () => await prisma.users.count();

export const admins = async () =>
  await prisma.users.findMany({ where: { admin: true } });

export const userProfile = async (name: string) =>
  await prisma.users.findUnique({
    where: {
      name: name,
    },
    select: {
      name: true,
      admin: true,
      domains: {
        select: {
          name: true,
        },
      },
    },
  });

export const createUser = async (userData: userData) => {
  const { name, password, domainsId } = await fixingData(userData);

  return await prisma.users.create({
    data: {
      name,
      password,
      domains: {
        connect: [...domainsId],
      },
    },
  });
};

export const updateUser = async (userData: userData) => {
  const { name, password, domainsId } = await fixingData(userData);

  return await prisma.users.update({
    where: {
      name: name,
    },
    data: {
      password,
      domains: {
        connect: [...domainsId],
      },
    },
  });
};

export const deleteUser = async (name: string) => {
  return await prisma.users.delete({
    where: {
      name: name,
    },
  });
};

export const changeAdminStatus = async (name: string, adminStatus: boolean) => {
  return await prisma.users.update({
    where: {
      name: name,
    },
    data: {
      admin: adminStatus,
    },
  });
};
