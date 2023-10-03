import { ConfigModule } from '@nestjs/config';

export const enviroment = ConfigModule.forRoot({
  envFilePath: `.${process.env.NODE_ENV}.env`,
  isGlobal: true,
});
