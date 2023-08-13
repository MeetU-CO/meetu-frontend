import { FieldsList, Organization } from "./Organization";

export interface OrganizationRepository {
  getData: (id: string) => Organization;
  getFields: (id: string) => FieldsList;
}
