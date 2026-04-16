import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { setupSwagger } from './configuration/swagger.config';

async function bootstrap() 
  async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Adicione esta linha:
  setupSwagger(app);

  process.env.TZ = '-03:00'

  app.useGlobalPipes(new ValidationPipe())

  app.enableCors()

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();