import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { enviroment } from './config';

@Module({
  imports: [enviroment, UsersModule],
})
export class AppModule {}
