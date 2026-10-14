import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { readdirSync, readFileSync } from 'fs';
import { basename, join } from 'path';
import hbs = require('hbs');
import { AppModule } from './app.module';

// La raíz es el directorio de trabajo: la del proyecto en local y /var/task en Vercel.
const root = process.cwd();

export async function createApp(): Promise<NestExpressApplication> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(root, 'public'));
  app.setBaseViewsDir(join(root, 'views'));
  // Registro síncrono: hbs.registerPartials es asíncrono y cambia '-' por '_'.
  const partials = join(root, 'views', 'partials');
  for (const file of readdirSync(partials).filter((f) => f.endsWith('.hbs'))) {
    hbs.registerPartial(basename(file, '.hbs'), readFileSync(join(partials, file), 'utf8'));
  }
  app.setViewEngine('hbs');

  return app;
}
