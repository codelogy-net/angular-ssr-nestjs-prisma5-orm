import { Controller, Get } from '@nestjs/common';
import { Prisma } from './prisma';

@Controller()
export class AppController {
  constructor(
    private _prisma: Prisma
  ) { }

  @Get()
  async index() {
    const tasks = await this._prisma.task.findMany({
      include: {
        user: true
      },
    });

    return {
      tasks
    }
  }
}
