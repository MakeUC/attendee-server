import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';
import { IsIn, IsBoolean, IsString, IsEmail, IsDefined } from 'class-validator';

export type AttendeeRole = 'SPONSOR' | 'MENTOR' | 'JUDGE' | 'HACKER';

export const ATTENDEE_ROLES: AttendeeRole[] = [
  'SPONSOR',
  'MENTOR',
  'JUDGE',
  'HACKER',
];

@Entity({ name: `registrant` })
export class Attendee {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  @IsDefined()
  fullName: string;

  @Column({ unique: true })
  @IsDefined()
  @IsEmail()
  email: string;

  @Column()
  @IsDefined()
  phone: string;
  
  @Column()
  @IsDefined()
  school: string;
  
  @Column()
  @IsDefined()
  country: string;

  @Column()
  @IsDefined()
  degree: string;

  @Column()
  @IsDefined()
  major: string;

  @Column()
  @IsDefined()
  graduation: number;

  @Column()
  @IsDefined()
  hackathonsAttended: string;

  @Column()
  resumeUrl: string;

  @Column()
  @IsDefined()
  ethnicity: string;

  @Column()
  @IsDefined()
  gender: string;

  @Column()
  questions: string;

  @Column()
  isVerified: boolean | null

  @Column()
  registeredAt: Date

  @Column()
  verifiedAt: Date

  @Column()
  isCheckedIn: boolean

  @Column()
  checkedInAt: Date

  @IsString()
  @Column({ nullable: true })
  discordId: string;

  @IsString()
  @IsIn(ATTENDEE_ROLES)
  @Column({ enum: ATTENDEE_ROLES })
  role: AttendeeRole;
}
