import { Module } from '@nestjs/common';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { dataSourceOptions } from 'shared-orm-library/dist/orm.config';
import {User} from 'shared-orm-library/dist/entities/User'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions), 
    TypeOrmModule.forFeature([User]),

  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
