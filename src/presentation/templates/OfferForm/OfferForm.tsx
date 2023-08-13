import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import {
  getFieldsList,
  getInitialFields,
} from "../../components/organisms/Fields/FieldsHelper";
import FieldsForm from "../../components/organisms/FieldsForm/FieldsForm";
import FieldsMenu from "../../components/organisms/FieldsMenu/FieldsMenu";

import { FieldsList } from "../../../modules/organization/domain/Organization";

import "./OfferForm.scss";

interface IOfferForm {
  organizationFields: FieldsList;
}

const OfferForm = ({ organizationFields }: IOfferForm) => {
  const fieldsList = getFieldsList(organizationFields);
  const initialFields = getInitialFields(organizationFields);

  return (
    <div className="offerForm-template">
      <DndProvider backend={HTML5Backend}>
        <FieldsMenu availableFields={fieldsList} />
        <FieldsForm
          formFields={initialFields}
          organizationFields={organizationFields}
        />
      </DndProvider>
    </div>
  );
};

export default OfferForm;
