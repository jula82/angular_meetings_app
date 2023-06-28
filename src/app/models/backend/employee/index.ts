import { FieldValue } from '@firebase/firestore';

export interface Employee {
  uid: string;
  name: string;
  title: string;
  created: FieldValue;
  updated?: FieldValue;
}
