import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import * as path from 'path';

async function bootstrap() {
  const server = express();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

  server.use(express.static(path.join(__dirname, '..', 'public')));

  await app.init();
  await app.listen(3001);
}
bootstrap();
