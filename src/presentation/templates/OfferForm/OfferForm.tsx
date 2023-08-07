import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { fieldsAdapter } from "../../components/organisms/Fields/FieldsHelper";
import FieldsForm from "../../components/organisms/FieldsForm/FieldsForm";
import FieldsMenu from "../../components/organisms/FieldsMenu/FieldsMenu";

import { Fields } from "../../../modules/organization/domain/Organization";

import "./OfferForm.scss";

interface IOfferForm {
  organizationFields: Fields;
}

const OfferForm = ({ organizationFields }: IOfferForm) => {
  const fieldsList = fieldsAdapter(organizationFields);

  return (
    <div className="offerForm-template">
      <DndProvider backend={HTML5Backend}>
        <FieldsMenu availableFields={fieldsList} />
        <FieldsForm availableFields={fieldsList} />
      </DndProvider>
    </div>
  );
};

export default OfferForm;
