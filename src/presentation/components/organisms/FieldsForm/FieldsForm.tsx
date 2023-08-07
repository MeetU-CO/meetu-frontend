import { FC } from "react";

import ButtonPassive from "../../atoms/ButtonPassive/ButtonPassive";

import useFieldsList from "./useFieldsList";

import { FieldsList } from "../Fields/FieldsData";
import DropArea from "./DropArea";
import "./FieldsForm.scss";

interface props {
  availableFields: FieldsList[];
}

const FieldsForm: FC<props> = ({ availableFields }) => {
  const { fieldsList, zipFields, sendData, updateField, acceptedFields } =
    useFieldsList(availableFields);

  return (
    <div className="fieldsForm">
      <form className="fieldsForm__submitButton" onSubmit={(e) => sendData(e)}>
        <ButtonPassive type={"submit"} text={"Crear"} />
      </form>
      {zipFields().map((i: any) => {
        const Field = i[1].component;
        return (
          <div
            key={i[0]}
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Field id={i[0]} updateField={updateField} />
          </div>
        );
      })}
      <DropArea fieldsList={fieldsList} acceptedFields={acceptedFields} />
    </div>
  );
};

export default FieldsForm;
