import { IUser } from "./IUser";

export interface IStudent extends IUser {
  system_id: string;
  gender: string;
  city: string;
  cc: string;
  phone_number: string;
  birth_date: string;
  country: string;
  semester: string;
  average_grade: string;
  last_grade: string;
  groups: string;
  activities: string;
  knowledge: string;
  links: string[];
}
