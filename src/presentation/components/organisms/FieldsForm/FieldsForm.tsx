import { FC } from "react";

import ButtonPassive from "../../atoms/ButtonPassive/ButtonPassive";
import TextLight from "../../atoms/TextLight/TextLight";

import {
  Field,
  FieldsList,
} from "../../../../modules/organization/domain/Organization";

import useFields from "./useFields";

import "./FieldsForm.scss";

interface Props {
  formFields: Field[];
  organizationFields: FieldsList;
}

const FieldsForm: FC<Props> = ({ formFields, organizationFields }) => {
  const {
    sendData,
    updateField,
    deleteField,
    getDefaultFields,
    getOptionalFields,
    DropArea,
  } = useFields(formFields, organizationFields);

  return (
    <div className="fieldsForm">
      <form className="fieldsForm__submitButton" onSubmit={(e) => sendData(e)}>
        <ButtonPassive type={"submit"} text={"Crear"} />
      </form>
      <div className="fieldsForm__default">
        {getDefaultFields().map((i: any) => {
          const Field = i[1].component;
          return (
            <div
              key={i[0]}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Field id={i[0]} updateField={updateField} />
            </div>
          );
        })}
      </div>
      <div className="fieldsForm__optional">
        {getOptionalFields().map((i: any) => {
          const Field = i[1].component;
          return (
            <div
              key={i[0]}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Field
                id={i[0]}
                updateField={updateField}
                deleteField={() => deleteField(i[0])}
              />
            </div>
          );
        })}
        <DropArea />
      </div>
    </div>
  );
};

export default FieldsForm;
