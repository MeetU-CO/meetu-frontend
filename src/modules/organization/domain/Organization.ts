export enum ORGANIZATION_TYPES {
  University = "University",
  Company = "Company",
}

export interface Fields {
  [id: string]: {
    description: string;
    isDefault: boolean;
  };
}

export interface Organization {
  type: ORGANIZATION_TYPES;
  name: string;
  email: string;
  department: string;
  fields: Fields;
}
