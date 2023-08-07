import {
  Fields,
  ORGANIZATION_TYPES,
  Organization,
} from "../domain/Organization";
import { OrganizationRepository } from "../domain/OrganizationRepository";

//Mock data - To delete once microservice is ready
const mockFields: Fields[] = [
  {
    requirement: {
      description: "",
      isDefault: false,
    },
    cv: {
      description: "",
      isDefault: true,
    },
  },
  {
    requirement: {
      description: "",
      isDefault: true,
    },
    cv: {
      description: "",
      isDefault: true,
    },
  },
];

const mockOrganizations: Organization[] = [
  {
    type: ORGANIZATION_TYPES.University,
    name: "Sabana Mock",
    email: "sabanamock@gmail.com",
    department: "Huila",
    fields: mockFields[0],
  },
  {
    type: ORGANIZATION_TYPES.Company,
    name: "Militar Mock",
    email: "Militarmock@gmail.com",
    department: "Soacha",
    fields: mockFields[1],
  },
];

export const createLocalOrganziationRepository = (): OrganizationRepository => {
  return {
    getData,
    getFields,
  };
};

const getData = (id: string): Organization => {
  let organizationData: Organization = mockOrganizations[parseInt(id)];
  return organizationData;
};

const getFields = (id: string): Fields => {
  const fieldsData: Fields = mockFields[parseInt(id)];
  return fieldsData;
};
