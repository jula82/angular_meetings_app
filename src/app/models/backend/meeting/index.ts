
import { FieldValue } from '@firebase/firestore';
import { Employee } from '../employee'

export type MeetingType = 'Board meeting' | 'General assembly' | 'Other';

export interface Meeting {
  type: MeetingType;
  name: string;
  date_start: number;
  date_end: number;
  location: string;
  link: string;
  documents: Array<string>;
  tasks: Array<string>;
  invitees: Array<Employee>;
  created: FieldValue;
  updated?: FieldValue;
}
