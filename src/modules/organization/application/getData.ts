import { Organization } from "../domain/Organization";
import { OrganizationRepository } from "../domain/OrganizationRepository";

export const getData = (
  organizationRepository: OrganizationRepository,
  id: string
): Organization => {
  return organizationRepository.getData(id);
};
