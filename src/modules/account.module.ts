import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountController } from 'src/contorllers/account.controller';
import { Account } from 'src/entitys/account.entity';
import { Role } from 'src/entitys/role.entity';
import { AccountService } from 'src/services/account.service';

@Module({
  imports: [TypeOrmModule.forFeature([Account, Role])],
  controllers: [AccountController],
  providers: [AccountService],
})
export class AccountModule {}
