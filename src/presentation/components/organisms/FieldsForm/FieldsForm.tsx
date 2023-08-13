import { FC } from "react";

import ButtonPassive from "../../atoms/ButtonPassive/ButtonPassive";
import TextLight from "../../atoms/TextLight/TextLight";

import useFields from "./useFields";

import { FieldsList } from "../Fields/FieldsData";
// import DropArea from "./DropArea";
import "./FieldsForm.scss";

interface props {
  availableFields: FieldsList[];
}

const FieldsForm: FC<props> = ({ availableFields }) => {
  const { zipFields, sendData, updateField, DropArea } =
    useFields(availableFields);

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
      {/* <DropArea fieldsList={fieldsList} acceptedFields={acceptedFields} />
      <div
        className={
          isOver ? "fieldsForm__dropArea--isOver" : "fieldsForm__dropArea"
        }
        ref={drop}
      >
        <TextLight
          text={"Arrastra y suelta tu campo aquí"}
          textAlign={"center"}
        />
      </div> */}
      <DropArea />
    </div>
  );
};

export default FieldsForm;
