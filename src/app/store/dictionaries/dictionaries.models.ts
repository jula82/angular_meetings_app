import { Item, ControlItem, Icon } from '@app/models/frontend';
export { Item, ControlItem } from '@app/models/frontend';

export interface Dictionaries {
  employees: Dictionary;
  meetings: Dictionary;
}

export interface Dictionary {
  items: Item[];
  controlItems: ControlItem[];
}
