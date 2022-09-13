import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const index = async (_req: Request, res: Response) => {
  try {
    const events = await prisma.event.findMany({
      where: {
        ...(_req.query.search
          ? {
              OR: [
                { action: { name: { contains: _req.query.search as string } } },
                { actor: { name: { contains: _req.query.search as string } } },
                { actor: { email: { contains: _req.query.search as string } } }
              ]
            }
          : {}),
        ...(_req.query.actor_id
          ? { actor_id: _req.query.actor_id as string }
          : {}),
        ...(_req.query.target_id
          ? { target_id: _req.query.target_id as string }
          : {}),
        ...(_req.query.action_name
          ? { action: { name: _req.query.action_name as string } }
          : {})
      },
      select: {
        occurred_at: true,
        actor: {
          select: {
            email: true
          }
        },
        action: {
          select: {
            name: true
          }
        }
      },
      orderBy: {
        occurred_at: 'desc'
      },
      take: parseInt(_req.query.page as string) * 2 || 10
    });
    res.status(200);
    res.json(events);
  } catch (e) {
    res.status(400);
    res.json(e);
  }
};

export const show = async (_req: Request, res: Response) => {
  try {
    const event = await prisma.event.findUnique({
      where: {
        id: _req.params.id
      },
      include: {
        actor: {
          select: {
            name: true,
            email: true
          }
        },
        action: {
          select: {
            name: true,
            object: true
          }
        }
      }
    });
    res.status(200);
    res.json(event);
  } catch (e) {
    res.status(400);
    res.json(e);
  }
};

export const create = async (_req: Request, res: Response) => {
  try {
    const event = await prisma.event.create({
      data: {
        ..._req.body
      }
    });
    res.status(200);
    res.json(event);
  } catch (e) {
    res.status(400);
    res.json(e);
  }
};
