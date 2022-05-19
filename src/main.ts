import { NestFactory } from '@nestjs/core';
import AppModule from "./app.module";





const port = 3001

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  const server = app.listen(process.env.PORT || 5000, () => {
    console.log(`Express is working on port 5000`);
  });
}
bootstrap().then(() => {
  console.log('bootstrap loaded :smile:')
});
