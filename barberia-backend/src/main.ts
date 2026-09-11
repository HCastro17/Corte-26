import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Filtra campos no definidos en los DTOs y valida tipos
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Habilitar CORS para cuando conectes Angular
  app.enableCors();

  await app.listen(3000);
  console.log('Servidor corriendo en http://localhost:3000');
}
bootstrap();