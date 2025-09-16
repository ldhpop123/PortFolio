import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // DTO(글로벌)
  app.useGlobalPipes(new ValidationPipe())

  app.enableCors({
    origin: 'http://localhost:5173',
    methods: 'GET,POST,DELETE,PATCH',
    credentials: true,
  })

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
