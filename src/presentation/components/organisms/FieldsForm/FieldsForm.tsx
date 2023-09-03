import { get } from "http";
import { FC } from "react";

import ButtonPassive from "../../atoms/ButtonPassive/ButtonPassive";

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
      <form
        className="fieldsForm__submitButtonContainer"
        onSubmit={(e) => sendData(e)}
      >
        <div className="fieldsForm__submitButton">
          <ButtonPassive type={"submit"} text={"Crear oferta"} />
        </div>
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
