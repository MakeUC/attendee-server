import { AttendeeRole } from './attendee.entity';

export class AttendeeDto {
  readonly fullName: string
  readonly email: string
  readonly phone: string
  readonly school: string
  readonly country: string
  readonly degree: string
  readonly major: string
  readonly graduation: number
  readonly hackathonsAttended: string
  readonly ethnicity: string
  readonly gender: string
  readonly isVerified: boolean
  readonly questions?: string 
  isCheckedIn: boolean
  checkedInAt: Date
  discordId?: string
}