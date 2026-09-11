import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ServicesModule } from './services/services.module';
import { UsersModule } from './users/users.module';
import { AppointmentsModule } from './appointments/appointments.module';

@Module({
  imports: [PrismaModule, ServicesModule, UsersModule, AppointmentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
