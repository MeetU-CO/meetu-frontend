// import { FieldsList } from "../../components/organisms/Fields/FieldsHelper";
import OfferFormTemplate from "../../templates/OfferForm/OfferForm";

import { FieldsList } from "../../../modules/organization/domain/Organization";

import { getData } from "../../../modules/organization/application/getData";
import { getFields } from "../../../modules/organization/application/getFields";

import { createLocalOrganziationRepository } from "../../../modules/organization/infrastructure/LocalOrganizationRepository";

interface IOfferForm {}

const OfferForm = ({}: IOfferForm) => {
  const localOrganziationRepository = createLocalOrganziationRepository();

  const sabanaFields: FieldsList = getFields(localOrganziationRepository, "0");

  return (
    <div className="offerForm">
      <OfferFormTemplate organizationFields={sabanaFields} />
    </div>
  );
};

export default OfferForm;
