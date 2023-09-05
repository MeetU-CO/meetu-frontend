import {
  Field,
  FieldsList,
  ORGANIZATION_TYPES,
  Organization,
} from "../domain/Organization";
import { OrganizationRepository } from "../domain/OrganizationRepository";

const mockOrganizations: Organization[] = [
  {
    type: ORGANIZATION_TYPES.University,
    name: "Sabana Mock",
    email: "sabanamock@gmail.com",
    department: "Huila",
    fields: {
      ID_1: {
        description: "Doc 1",
        name: "requirement",
        isDefault: false,
      },
      ID_2: {
        description: "Doc 2",
        name: "cv",
        isDefault: false,
      },
      ID_3: {
        description: "Título",
        name: "title",
        isDefault: true,
      },
      ID_4: {
        description: "Descripción",
        name: "description",
        isDefault: true,
      },
    },
  },
  {
    type: ORGANIZATION_TYPES.Company,
    name: "Militar Mock",
    email: "Militarmock@gmail.com",
    department: "Soacha",
    fields: {
      ID_4: {
        description: "",
        name: "requirement",
        isDefault: true,
      },
      ID_5: {
        description: "",
        name: "cv",
        isDefault: true,
      },
    },
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

const getFields = (id: string): FieldsList => {
  const fieldsData: FieldsList = mockOrganizations[parseInt(id)].fields;
  return fieldsData;
};