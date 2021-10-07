import { AttendeeRole } from './attendee.entity';

export class AttendeeDto {
  name: string;
  email: string;
  role: AttendeeRole;
  isMinor?: boolean;
  discordId?: string;
}
