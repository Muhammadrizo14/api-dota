import { NestFactory } from '@nestjs/core';
import AppModule from "./app.module";


const port = 3001

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  app.enableCors();
  await app.listen(port);
  console.log(`Server running on port ${port}`)
}
bootstrap().then(() => {
  console.log('bootstrap loaded :smile:')
});
