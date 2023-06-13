import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import FieldsForm from "../../components/organisms/FieldsForm/FieldsForm";
import FieldsMenu from "../../components/organisms/FieldsMenu/FieldsMenu";

import "./OfferForm.scss";

interface IOfferForm {}

const OfferForm = ({}: IOfferForm) => {
  return (
    <div className="offerForm-template">
      <DndProvider backend={HTML5Backend}>
        <FieldsMenu />
        <FieldsForm />
      </DndProvider>
    </div>
  );
};

export default OfferForm;
