/* eslint-disable prettier/prettier */
import { User, UserSchema } from './schema/user.schema';
import { MongooseModule } from "@nestjs/mongoose";
import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UsersService } from "./user.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [UsersService],
  // exports: [UsersService]
})
export class UserModule { }