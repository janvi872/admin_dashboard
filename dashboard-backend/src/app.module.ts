/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';
import { env } from 'process';
import { ConfigModule } from '@nestjs/config';
import {Env} from './env/index';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(Env.mongo.URL),
    UserModule,
    AuthModule
  ],
})
export class AppModule { }
