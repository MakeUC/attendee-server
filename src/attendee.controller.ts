import {
  Post,
  Controller,
  Body,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AttendeeService } from './attendee.service';
import { Attendee } from './attendee.entity';
import { AttendeeDto } from './Attendee.dto';

@Controller('attendee')
export class AttendeeController {
  constructor(private readonly adminService: AttendeeService) {}

  @Post(`checkin`)
  checkInAttendee(@Body() data: { email: string }): Promise<Attendee> {
    return this.adminService.checkInAttendee(data.email);
  }

  @Post()
  createAttendee(@Body() data: AttendeeDto): Promise<Attendee> {
    return this.adminService.createAttendee(data);
  }

  @Post(`bulk`)
  @UseInterceptors(FileInterceptor('file'))
  createAttendees(
    @UploadedFile() file: Express.Multer.File,
  ): Promise<Array<Attendee>> {
    return this.adminService.createAttendees(file);
  }
}
