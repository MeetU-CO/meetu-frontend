import { useRef } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import TitleH1 from "../../components/atoms/TitleH1/TitleH1";

import {
  getFieldsList,
  getInitialFields,
} from "../../components/organisms/Fields/FieldsHelper";
import FieldsForm from "../../components/organisms/FieldsForm/FieldsForm";
import FieldsMenu from "../../components/organisms/FieldsMenu/FieldsMenu";

import { FieldsList } from "../../../modules/organization/domain/Organization";

import useWindowDimensions from "../../hooks/useWindowDimensions";

import "./OfferForm.scss";

interface IOfferForm {
  organizationFields: FieldsList;
}

const OfferForm = ({ organizationFields }: IOfferForm) => {
  const { width } = useWindowDimensions();

  const fieldsList = getFieldsList(organizationFields);
  const initialFields = getInitialFields(organizationFields);

  if (width <= 850) {
    return (
      <div className="offerForm-template--mobile">
        <div className="offerForm-template--mobile__title">
          <TitleH1
            title={"Lo sentimos, este sitio solo es accesible desde un PC"}
            color={"var(--orange-color)"}
            textAlign={"center"}
          />
        </div>
      </div>
    );
  }

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
