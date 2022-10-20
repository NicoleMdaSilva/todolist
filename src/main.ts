import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  process.env.TZ = '-3:00'

  const port = 4000

  await app.listen(port);
}
bootstrap();
