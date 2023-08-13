export enum ORGANIZATION_TYPES {
  University = "University",
  Company = "Company",
}

export interface Field {
  description: string;
  name: string;
  isDefault: boolean;
}

export interface FieldsList {
  [id: string]: Field;
}

export interface Organization {
  type: ORGANIZATION_TYPES;
  name: string;
  email: string;
  department: string;
  fields: FieldsList;
}
