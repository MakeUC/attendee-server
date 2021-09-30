import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttendeeController } from './attendee.controller';
import { Attendee } from './attendee.entity';
import { AttendeeService } from './attendee.service';
import { environment } from './environment';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: environment.database_config.url,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: environment.database_config.synchronize,
      logging: environment.database_config.logging,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    TypeOrmModule.forFeature([Attendee]),
  ],
  controllers: [AttendeeController],
  providers: [AttendeeService],
})
export class AppModule {}
