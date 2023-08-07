import { Fields } from "../domain/Organization";
import { OrganizationRepository } from "../domain/OrganizationRepository";

export const getFields = (
  organizationRepository: OrganizationRepository,
  id: string
): Fields => {
  return organizationRepository.getFields(id);
};
