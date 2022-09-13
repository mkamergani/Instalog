import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const index = async (_req: Request, res: Response): Promise<void> => {
  try {
    const actions = await prisma.action.findMany();
    res.status(200);
    res.json(actions);
  } catch (e) {
    res.status(400);
    res.json(e);
  }
};

export const create = async (_req: Request, res: Response): Promise<void> => {
  try {
    const action = await prisma.action.create({
      data: {
        ..._req.body
      }
    });
    res.status(200);
    res.json(action);
  } catch (e) {
    res.status(400);
    res.json(e);
  }
};
