import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const index = async (_req: Request, res: Response): Promise<void> => {
  try {
    const users = await prisma.user.findMany();
    res.status(200);
    res.json(users);
  } catch (e) {
    res.status(400);
    res.json(e);
  }
};

export const create = async (_req: Request, res: Response): Promise<void> => {
  try {
    const user = await prisma.user.create({
      data: {
        ..._req.body
      }
    });
    res.status(200);
    res.json(user);
  } catch (e) {
    res.status(400);
    res.json(e);
  }
};
