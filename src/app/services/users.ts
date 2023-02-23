import { PrismaClient } from "@prisma/client";
import { userData } from "../utils/interfaces";
import { fixingData } from "./common";
const prisma = new PrismaClient();

// getting number of users
export const usersCount = async () => await prisma.users.count();
// getting admins
export const admins = async () =>
  await prisma.users.findMany({ where: { admin: true } });
// getting userprofile
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

// create a user profile
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

// updating userprofile
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

// delete a specific user
export const deleteUser = async (name: string, password: string) => {
  const user = await prisma.users.findUnique({
    where: {
      name: name,
    },
  });

  if (user?.password === password) {
    await prisma.users.delete({
      where: {
        name: name,
      },
    });
  }
};
