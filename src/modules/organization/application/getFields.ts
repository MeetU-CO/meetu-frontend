import { FieldsList } from "../domain/Organization";
import { OrganizationRepository } from "../domain/OrganizationRepository";

export const getFields = (
  organizationRepository: OrganizationRepository,
  id: string
): FieldsList => {
  return organizationRepository.getFields(id);
};
