import OfferFormTemplate from "../../templates/OfferForm/OfferForm";

import { Fields } from "../../../modules/organization/domain/Organization";

import { getData } from "../../../modules/organization/application/getData";
import { getFields } from "../../../modules/organization/application/getFields";

import { createLocalOrganziationRepository } from "../../../modules/organization/infrastructure/LocalOrganizationRepository";

interface IOfferForm {}

const OfferForm = ({}: IOfferForm) => {
  const localOrganziationRepository = createLocalOrganziationRepository();

  const sabanaFields: Fields = getFields(localOrganziationRepository, "0");

  return (
    <div className="offerForm">
      <OfferFormTemplate organizationFields={sabanaFields} />
    </div>
  );
};

export default OfferForm;
