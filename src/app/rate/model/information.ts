import {Rate} from './rate';

export interface Information {
  table: string;
  no: string;
  effectiveDate: string;
  rates: Rate[];
}
