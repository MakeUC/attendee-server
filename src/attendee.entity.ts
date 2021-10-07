import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';
import { IsIn, IsBoolean, IsString, IsEmail } from 'class-validator';

export type AttendeeRole = 'SPONSOR' | 'MENTOR' | 'JUDGE' | 'HACKER';

export const ATTENDEE_ROLES: AttendeeRole[] = [
  'SPONSOR',
  'MENTOR',
  'JUDGE',
  'HACKER',
];

@Entity({ name: `attendee` })
export class Attendee {
  @ObjectIdColumn()
  id: ObjectID;

  @IsString()
  @IsEmail()
  @Column({ unique: true })
  email: string;

  @IsString()
  @Column()
  name: string;

  @IsString()
  @IsIn(ATTENDEE_ROLES)
  @Column({ enum: ATTENDEE_ROLES })
  role: AttendeeRole;

  @IsBoolean()
  @Column({ default: false })
  isMinor: boolean;

  @IsBoolean()
  @Column({ default: false })
  checkedIn: boolean;

  @IsString()
  @Column({ nullable: true })
  discordId: string;
}
