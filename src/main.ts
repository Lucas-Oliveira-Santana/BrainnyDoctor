import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import process from 'process';
import { AppModule } from './app.module';
import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      forbidUnknownValues: false,
    }),
  );
  await app.listen(3000);
}
bootstrap();
