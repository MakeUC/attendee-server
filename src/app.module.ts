import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatusController } from './status.controller';
import { AttendeeController } from './attendee.controller';
import { Attendee } from './attendee.entity';
import { AttendeeService } from './attendee.service';
import { environment } from './environment';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: `mongodb`,
      url: environment.database_config.url,
      entities: [Attendee],
    }),
    TypeOrmModule.forFeature([Attendee]),
  ],
  controllers: [StatusController, AttendeeController],
  providers: [AttendeeService],
})
export class AppModule {}
