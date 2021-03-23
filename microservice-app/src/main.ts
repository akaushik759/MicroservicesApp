import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
  });
  app.listen(() =>
    console.log(
      `The main microservice app is running at port 3000, you can start the clients at other ports`,
    ),
  );
}
bootstrap();
