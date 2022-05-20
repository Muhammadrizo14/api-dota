import { NestFactory } from '@nestjs/core';
import AppModule from "./app.module";





const port = 3001

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  const server = app.listen(process.env.PORT || port, () => {
    console.log(`Express is working on port ${port}`);
  });
}
bootstrap().then(() => {
  console.log('bootstrap loaded :smile:')
});
